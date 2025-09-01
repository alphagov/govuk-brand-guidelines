import { dirname as posixDirname } from 'node:path/posix'
import {
  ariaCurrentValue,
  isActive,
  isCurrent
} from './navigation/aria-current.js'
import { parse } from 'node-html-parser'

export function setupNavigation(eleventyConfig) {
  eleventyConfig.addCollection('pages', (collectionAPI) => {
    // First sort the pages by the depth of their URL.
    // This will simplify the processing, ensuring parents
    // are processed before their descendants, making it easier
    // to look up a parent when processing a descendant
    const pages = collectionAPI
      .getFilteredByGlob('src/**/*.md')
      .toSorted((a, b) => getDepthOfUrl(a) - getDepthOfUrl(b))

    // To associate a child page with its parent, we'll look up
    // the parent using its URL. Storing the pages in a `url => page`
    // hash will help that look up
    const pagesByUrl = {}

    // Off we go, through the pages, looking up their parent in the hash
    // making the association in their `data` through the `parent` and `children`
    // properties
    for (const page of pages) {
      const parentPath = posixDirname(page.url)

      // dirname will not include a trailing slash, except for the root URL
      const parentUrl = parentPath.endsWith('/') ? parentPath : parentPath + '/'

      // Set a title to the page from the markdown
      page.data.title ??= page.rawInput.match(/# (.*)/).at(1)

      const parent = pagesByUrl[parentUrl]
      if (parent) {
        page.data.parent = parent
        parent.data.children.push(page)
      }

      page.data.children = []
      pagesByUrl[page.url] = page
    }

    // Last thing before we can use the `children` data is to make
    // sure it is sorted according to the `order` property
    for (const page of pages) {
      page.data.children?.sort((a, b) => a.data.order - b.data.order)

      page.data.ancestors = getAncestors(page)

      page.data.sidebarNavigationRoot =
        page.data.ancestors.length === 1
          ? page
          : page.data.ancestors
              .filter((ancestor) => ancestor.data.ancestors.length === 1)
              .at(0)

      page.data.isSidebarNavigationRoot = page.data.sidebarNavigationRoot === page
    }

    return pages
  })

  eleventyConfig.addFilter('asBreadcrumbItems', asBreadcrumbItems)

  eleventyConfig.addFilter('asServiceNavigationItem', asServiceNavigationItem)

  eleventyConfig.addFilter('ariaCurrentValue', ariaCurrentValue)
}

/**
 * Bulk converts and Eleventy pages object into the shape expected for Breadcrumb's `items` option
 *
 * @param {Array<{url: string, data: {title: string}}>} pages -- The Eleventy pages to convert into a Service Navigation item
 */
function asBreadcrumbItems(pages) {
  return pages.map((page) => ({
    href: page.url,
    text: page.url === '/' ? 'Home' : page.data.title
  }))
}

/**
 * Converts an Eleventy page object into the shape expected for Service Navigation's `navigation` option
 *
 * @param {{url: string, data: {title: string}}} page -- The Eleventy page to convert into a Service Navigation item
 * @param {object} itemOptions -- Options merged into the generated item for the Service Navigation, except `renderedPageUrl`
 * @param {string} itemOptions.renderedPageUrl -- URL of the page currently being rendered
 */
function asServiceNavigationItem(
  page,
  { renderedPageUrl, ...serviceNavigationItemOptions }
) {
  return {
    href: page.url,
    text: page.data.title,
    current: isCurrent(page.url, renderedPageUrl),
    active: isActive(page.url, renderedPageUrl),
    ...serviceNavigationItemOptions
  }
}

/**
 * Compute the depth of the URL of an Eleventy page
 *
 * Depth being the number of parts in the path of the URL
 *
 * @param {{page: {url: string}}} eleventyPage
 * @returns {number} The depth of the URL for that page
 */
function getDepthOfUrl(eleventyPage) {
  return eleventyPage.url.split('/').length
}

/**
 * Collects the list of ancestors of the given page
 *
 * From shallowest to deepest URL
 *
 * @param {{parent?: object}} page
 * @returns
 */
function getAncestors(page) {
  const ancestors = []
  let current = page
  while (current.data.parent) {
    ancestors.push(current.data.parent)
    current = current.data.parent
  }
  return ancestors.toReversed()
}

/**
 * Converts an Eleventy page into data that can be fed
 * to GOV.UK Frontend's Breadcrumbs or Service Navigation
 *
 * @param {{url:string, data: {title: string}}} page
 * @returns {{href: string, text: string}}
 */
function asGOVUKFrontendNavigationItem(page) {
  return {
    href: page.url,
    text: page.url === '/' ? 'Home' : page.data.title
  }
}

/**
 * Create a table of contents by extracting
 * headings and IDs from the given HTML.
 */
export function tableOfContents(eleventyConfig) {
  eleventyConfig.addNunjucksGlobal('getTableOfContents', (html) => {
    // The selectors to look for
    const selectors = ['h2[id]']

    const root = parse(html)
    const headingList = root.querySelectorAll(selectors.join(','))

    console.log({ selectors, headingList })

    const headings = headingList.map((h) => {
      // Determine a 'level' property for nesting headers of different levels
      const level = Number(h.rawTagName.substring(1))

      return {
        id: h.id,
        html: h.innerHTML,
        level: isNaN(level) ? 0 : level
      }
    })

    // Store the final array
    const headingData = []

    // Track nested headings
    const stack = []

    // Loop through the headings to nest them according to their heading level
    headings.forEach((item) => {
      const newItem = {
        ...item,
        children: []
      }

      if (stack.length === 0) {
        // If there's nothing in the stack (i.e. this is the first iteration of the
        // loop), just push it
        headingData.push(newItem)
      } else {
        // Get the most recently pushed item from the stack
        const parent = stack[stack.length - 1]

        if (item.level > parent.level) {
          // If this item's level is greater than the parent, it's a child,
          // so nest it against the parent object
          parent.children.push(newItem)
        } else {
          // Go back through the stack, removing items until we find something
          // that is a parent
          while (
            stack.length > 0 &&
            item.level <= stack[stack.length - 1].level
          ) {
            stack.pop()
          }

          if (stack.length > 0) {
            // If a parent's found, nest things under it
            stack[stack.length - 1].children.push(newItem)
          } else {
            // Otherwise, just put it on the stack's root level
            headingData.push(newItem)
          }
        }
      }

      // Push item to the stack
      stack.push(newItem)
    })

    return headingData
  })
}
