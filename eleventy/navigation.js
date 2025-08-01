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

      // Compute the list of ancestors for the page
      // This cannot be a computed property as Collections are computed
      // after Computed properties, so parent and children wouldn't be available
      page.data.ancestors = getAncestors(page)
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

  eleventyConfig.addFilter(
    'ariaCurrentValue',
    function (pageUrl, renderedPageUrl) {
      if (isCurrent(pageUrl, renderedPageUrl)) {
        return 'page'
      } else if (isActive(pageUrl, renderedPageUrl)) {
        return 'true'
      }
    }
  )

  eleventyConfig.addFilter('asNavigationItems', function (pages) {
    const renderedPage = this.page

    return pages.map((page) => asNavigationItem(page, renderedPage.url))
  })

  eleventyConfig.addFilter(
    'asNavigationItem',
    function (page, navigationItemData) {
      const renderedPage = this.page

      return asNavigationItem(page, renderedPage.url, navigationItemData)
    }
  )
}

/**
 * Transforms an Eleventy page into a navigation item that can be
 * consumed by GOV.UK Frontend components
 *
 * @param {EleventyTemplate} navigationItemPage - The page the navigation item represents
 * @param {string} renderedPageUrl - The page currently being rendered
 * @returns {GOVUKFrontendNavigationItem}
 */
function asNavigationItem(
  navigationItemPage,
  renderedPageUrl,
  navigationItemData = {}
) {
  return {
    href: navigationItemPage.url,
    text:
      navigationItemPage.url === '/' ? 'Home' : navigationItemPage.data.title,
    current: isCurrent(navigationItemPage.url, renderedPageUrl),
    active: isActive(navigationItemPage.url, renderedPageUrl),
    ...navigationItemData
  }
}

/**
 * Returns whether the given URL should be marked as 'active'
 * when rendering the page for the `renderedUrl`
 *
 * @param {string} url
 * @param {string} renderedUrl
 * @returns {boolean}
 */
function isActive(url, renderedUrl) {
  return renderedUrl.startsWith(url)
}

/**
 * Returns whether the given URL should be marked as 'current'
 * when rendering the page for the `renderedUrl`
 *
 * @param {string} url
 * @param {string} renderedUrl
 * @return {boolean}
 */
function isCurrent(url, renderedUrl) {
  return renderedUrl === url
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
