import { blockPairedShortcode } from './utils.js'

export const sectionHighlight = blockPairedShortcode(_sectionHighlight)

/**
 * Wraps the content in a section whose design makes it stand out from the page
 *
 * @param {string} content - The content of the section
 * @param {object} options
 * @param {string} [options.classes] - A space separated list of CSS classes to add to the section's `class` attribute
 * @returns
 */
function _sectionHighlight(content, { classes } = {}) {
  return `<div class="app-section-highlight${classes ? ` ${classes}` : ''}">
  ${content}
</div>`
}
