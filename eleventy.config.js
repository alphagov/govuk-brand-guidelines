import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

import { setupNunjucks } from './eleventy/nunjucks.js'
import { setupStylesheetCompilation } from './eleventy/stylesheets.js'
import { setupJavaScriptCompilation } from './eleventy/javascript.js'
import { setupMarkdownCompilation } from './eleventy/markdown.js'
import { dirname as posixDirname } from 'node:path/posix'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export default function (eleventyConfig) {
  // Load Eleventy image plugin. In this configuration, it automatically
  // resizes and compresses the sources of <img>s referenced in output HTML
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output image formats
    formats: ['svg', 'avif', 'webp'],

    // If the input is SVG, only output SVG
    svgShortCircuit: true,

    // Output image widths
    // These represent full-width, two-thirds and one-third grid widths respectively
    widths: [960, 630, 300],

    // Attributes on the output HTML
    htmlOptions: {
      imgAttributes: {
        class: 'app-prose-image',
        loading: 'lazy',
        decoding: 'async'
      },
      pictureAttributes: {}
    }
  })

  eleventyConfig.addPlugin(setupNunjucks)

  // Watch and compile Sass files on change
  eleventyConfig.addPlugin(setupStylesheetCompilation, { to: 'assets' })

  // Watch and bundle JS files on change
  eleventyConfig.addPlugin(setupJavaScriptCompilation, { to: 'assets' })

  // Copy font and image assets from govuk-frontend to the project
  eleventyConfig.addPassthroughCopy({
    './node_modules/govuk-frontend/dist/govuk/assets': 'assets'
  })

  // Configure markdown-it and add Markdown shortcode/filter
  eleventyConfig.addPlugin(setupMarkdownCompilation)

  eleventyConfig.addGlobalData('layout', 'generic')

  eleventyConfig.addCollection('navigation', (collectionAPI) => {
    // First sort the pages by the depth of their URL.
    // This will simplify the processing, ensuring parents
    // are processed before their decendants, making it easier
    // to look up a parent when processing a descendant
    const pages = collectionAPI
      .getFilteredByGlob('src/**/*.md')
      .toSorted((a, b) => depth(a) - depth(b))

    // To associate a child page with its parent, we'll look up
    // the parent using its URL. Storing the pages in a `url => page`
    // hash will help that look up
    const pagesByUrl = {}

    // Off we go, through the pages, looking up their parent in the hash
    // making the association in their `data` through the `parent` and `children`
    // properties
    for (const page of pages) {
      const parentPath = posixDirname(page.url)
      const parentUrl = parentPath.endsWith('/') ? parentPath : parentPath + '/'

      // Set a title to the page from the markdown
      // For production, probably better set through
      // having consistent 'title' properties in the frontmatter
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
      // Pre-compute navigation items
      page.data.navigationItems = page.data.children.map((page) => {
        return {
          href: page.url,
          text: page.data.title
        }
      })

      page.data.ancestors = getAncestors(page)
    }

    const homepage = pagesByUrl['/']

    return homepage.data.navigationItems
  })

  eleventyConfig.addFilter('asBreadcrumbItems', (pages) => {
    return pages.map((page) => {
      return {
        href: page.url,
        text: page.url === '/' ? 'Home' : page.data.title
      }
    })
  })

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}

function getAncestors(page) {
  const ancestors = []
  let current = page
  while (current.data.parent) {
    ancestors.push(current.data.parent)
    current = current.data.parent
  }
  return ancestors.toReversed()
}

function depth(eleventyPage) {
  return eleventyPage.page.url.split('/').length
}
