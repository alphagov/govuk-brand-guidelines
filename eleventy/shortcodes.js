import { grid } from './shortcodes/grid.js'
import { swatch } from './shortcodes/swatch.js'
import { swatchList, filterColours } from './shortcodes/swatch-list.js'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupShortcodes(eleventyConfig) {
  // Standalone shortcodes are a single tag, they're passed parameters like a
  // function is normally.
  //
  // For example:
  // {% image(param1, param2) %}
  // ↓
  // function image(param1, param2)
  eleventyConfig.addShortcode('swatch', swatch)
  eleventyConfig.addShortcode('swatchList', swatchList)

  // Paired shortcodes require a starting and ending tag. Any content between
  // those tags is passed as the first parameter.
  //
  // For example:
  // {% grid(param1, param2) %} Content {% endgrid %}
  // ↓
  // function grid(content, param1, param2)
  eleventyConfig.addPairedShortcode('grid', grid)

  // Filters manipulate how a piece of data is formatted prior to outputting
  // it. They are separated using vertical bar character (|) after the value.
  //
  // For example:
  // {{ "Jean-Luc Picard" | lower }}
  // ↓
  // jean-luc picard
  eleventyConfig.addFilter('filterColours', filterColours)
}
