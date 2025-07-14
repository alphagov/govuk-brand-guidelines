import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

import { setupNunjucks } from './eleventy/nunjucks.js'
import { setupStylesheetCompilation } from './eleventy/stylesheets.js'
import { setupJavaScriptCompilation } from './eleventy/javascript.js'
import { setupMarkdownCompilation } from './eleventy/markdown.js'
import { setupNavigation } from './eleventy/navigation.js'

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

  // Set up data to help compute navigation
  eleventyConfig.addPlugin(setupNavigation)

  eleventyConfig.addGlobalData('layout', 'generic')

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
