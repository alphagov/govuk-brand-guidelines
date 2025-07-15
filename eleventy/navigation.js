import { dirname as posixDirname } from 'node:path/posix'

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

      // Pre-compute navigation related items
      // These cannot be Computed properties as Collections are computed
      // after Computed properties, so parent and children wouldn't be available
      page.data.navigationItems = page.data.children.map(
        asGOVUKFrontendNavigationItem
      )
      page.data.ancestors = getAncestors(page)
      page.data.breadcrumbItems = page.data.ancestors.map(
        asGOVUKFrontendNavigationItem
      )
    }

    for (const page of pages) {
      page.data.sidebarNavigationRoot =
        page.data.ancestors.length === 1
          ? page
          : page.data.ancestors
              .filter((ancestor) => ancestor.data.ancestors.length === 1)
              .at(0)
    }

    return pages
  })
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
