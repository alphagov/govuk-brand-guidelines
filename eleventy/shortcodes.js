import { figure } from './shortcodes/figure.js'
import { grid } from './shortcodes/grid.js'
import { swatch } from './shortcodes/swatch.js'
import { swatchList, filterColours } from './shortcodes/swatch-list.js'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupShortcodes(eleventyConfig) {
  eleventyConfig.addShortcode('figure', figure)
  eleventyConfig.addPairedShortcode('grid', grid)
  eleventyConfig.addShortcode('swatch', swatch)
  eleventyConfig.addShortcode('swatchList', swatchList)

  eleventyConfig.addFilter('filterColours', filterColours)
}
