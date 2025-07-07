import paths from './config/paths.js'

import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

import { markdownConfig, markdownFilter } from './config/markdown.js'
import bundleJs from './tasks/javascript.js'
import compileSass from './tasks/sass.js'
import { setupNunjucks } from './eleventy/nunjucks.js'

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
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
  eleventyConfig.addWatchTarget(`${paths.source}/**/*.scss`)
  eleventyConfig.on('beforeBuild', compileSass)

  // Watch and bundle JS files on change
  eleventyConfig.addWatchTarget(`${paths.source}/**/*.js`)
  eleventyConfig.on('beforeBuild', bundleJs)

  // Copy font and image assets from govuk-frontend to the project
  eleventyConfig.addPassthroughCopy({
    './node_modules/govuk-frontend/dist/govuk/assets': 'assets'
  })

  // Configure markdown-it and add Markdown shortcode/filter
  eleventyConfig.setLibrary('md', markdownConfig)
  eleventyConfig.addPairedNunjucksShortcode('markdown', markdownFilter)
  eleventyConfig.addFilter('markdown', markdownFilter)

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: paths.source,
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
