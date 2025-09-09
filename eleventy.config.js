import { setupNunjucks } from './eleventy/nunjucks.js'
import { setupStylesheetCompilation } from './eleventy/stylesheets.js'
import { setupJavaScriptCompilation } from './eleventy/javascript.js'
import { setupMarkdownCompilation } from './eleventy/markdown.js'
import { setupMedia } from './eleventy/media.js'
import { setupNavigation } from './eleventy/navigation.js'
import { setupShortcodes } from './eleventy/shortcodes.js'
import { generateColourPaletteSass } from './eleventy/colours-stylesheet.js'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export default function (eleventyConfig) {
  // Eleventy doesn't watch the plugins the configuration
  // depends on, so we need to give it a little nudge
  eleventyConfig.addWatchTarget('./eleventy/**', {
    resetConfig: true
  })

  eleventyConfig.addPlugin(setupMedia)

  eleventyConfig.addPlugin(setupNunjucks)

  // Watch and compile Sass files on change
  eleventyConfig.addPlugin(generateColourPaletteSass)
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

  // Import custom shortcodes
  eleventyConfig.addPlugin(setupShortcodes)

  // Set the default layout for new pages
  // Can be overridden using `layout` front-matter parameter
  eleventyConfig.addGlobalData('layout', 'generic')

  // Set up bundle for per-page CSS
  // https://www.11ty.dev/docs/plugins/bundle/
  eleventyConfig.addBundle('css')

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}
