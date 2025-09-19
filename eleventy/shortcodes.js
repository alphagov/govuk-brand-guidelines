import { callout } from './shortcodes/callout.js'
import { figure } from './shortcodes/figure.js'
import { grid } from './shortcodes/grid.js'
import { gridCell } from './shortcodes/grid-cell.js'
import { informInspire } from './shortcodes/inform-inspire.js'
import { sectionHighlight } from './shortcodes/section-highlight.js'
import { swatch } from './shortcodes/swatch.js'
import { swatchList, filterColours } from './shortcodes/swatch-list.js'
import { testExample } from './shortcodes/test-example.js'
import { videoPlayer } from './shortcodes/video-player.js'
import { breakOut } from './shortcodes/break-out.js'
import { linkCard } from './shortcodes/link-card.js'

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
  eleventyConfig.addShortcode('video', videoPlayer)
  eleventyConfig.addShortcode('linkCard', linkCard)

  // Paired shortcodes require a starting and ending tag. Any content between
  // those tags is passed as the first parameter.
  //
  // For example:
  // {% grid(param1, param2) %} Content {% endgrid %}
  // ↓
  // function grid(content, param1, param2)
  eleventyConfig.addPairedShortcode('breakOut', breakOut)
  eleventyConfig.addPairedShortcode('callout', callout)
  eleventyConfig.addPairedShortcode('figure', figure)
  eleventyConfig.addPairedShortcode('grid', grid)
  eleventyConfig.addPairedShortcode('gridCell', gridCell)
  eleventyConfig.addPairedShortcode('informInspire', informInspire)
  eleventyConfig.addPairedShortcode('sectionHighlight', sectionHighlight)
  eleventyConfig.addPairedShortcode('testExample', testExample)

  // Filters manipulate how a piece of data is formatted prior to outputting
  // it. They are separated using vertical bar character (|) after the value.
  //
  // For example:
  // {{ "Jean-Luc Picard" | lower }}
  // ↓
  // jean-luc picard
  eleventyConfig.addFilter('filterColours', filterColours)
}
