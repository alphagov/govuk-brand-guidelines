import { dirname as posixDirname } from 'node:path/posix'
import {
  ariaCurrentValue,
  isActive,
  isCurrent
} from './navigation/aria-current.js'

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

      // Now that we have ancestors we can get the accessible page title
      page.data.pageTitle = buildPageTitle(page)

      page.data.sidebarNavigationRoot =
        page.data.ancestors.length === 1
          ? page
          : page.data.ancestors
              .filter((ancestor) => ancestor.data.ancestors.length === 1)
              .at(0)

      page.data.isSidebarNavigationRoot =
        page.data.sidebarNavigationRoot === page
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
 * Builds an accessible page title from the current page's title and the titles
 * of its ancestors up to the homepage (GOV.UK Brand Guidelines)
 *
 * @param {data: {title: string}, ancestors: [{data: {title: string}]}}} page
 * @returns
 */
function buildPageTitle(page) {
  return [page.data.title]
    .concat(
      page.data.ancestors.reverse().map((ancestor) => ancestor.data.title)
    )
    .join(' - ')
}
