import { figure } from './shortcodes/figure.js'
import { grid } from './shortcodes/grid.js'
import { swatch, filterColours } from './shortcodes/swatch.js'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupShortcodes(eleventyConfig) {
  eleventyConfig.addShortcode('figure', figure)
  eleventyConfig.addPairedShortcode('grid', grid)
  eleventyConfig.addShortcode('swatch', swatch)

  eleventyConfig.addFilter('filterColours', filterColours)
}
