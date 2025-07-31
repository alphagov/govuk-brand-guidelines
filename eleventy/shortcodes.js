import { grid } from './shortcodes/grid.js'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupShortcodes(eleventyConfig) {
  // Standalone shortcodes are a single tag, they're passed parameters like a
  // function is normally.
  //
  // {% image(param1, param2) %}
  // function image(param1, param2)

  // Paired shortcodes require a starting and ending tag. Any content between
  // those tags is passed as the first parameter.
  //
  // For example:
  // {% grid(param1, param2) %} Content {% endgrid %}
  //
  // function grid(content, param1, param2)
  eleventyConfig.addPairedShortcode('grid', grid)
}
