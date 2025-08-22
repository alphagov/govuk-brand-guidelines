import { blockPairedShortcode } from './utils.js'

export const grid = blockPairedShortcode(_grid)

/**
 * Wraps the content in a grid of the specified number of columns
 *
 * @param {string} content - The content of the grid
 * @param {options} options
 * @param {string} [options.classes] - A space separated list of CSS classes to add to the grid's `class` attribute
 * @param {number | ResponsiveValue<number>} options.columns - The number of columns in the grid
 * @returns
 */
function _grid(content, { classes, columns } = {}) {
  // Assemble custom properties
  const cssProperties = []
  if (typeof columns === 'number') {
    cssProperties.push(`--app-grid-columns-mobile: ${columns}`)
  } else if (typeof columns === 'object') {
    if (columns.mobile) {
      cssProperties.push(`--app-grid-columns-mobile: ${columns.mobile}`)
    }
    if (columns.tablet) {
      cssProperties.push(`--app-grid-columns-tablet: ${columns.tablet}`)
    }
    if (columns.desktop) {
      cssProperties.push(`--app-grid-columns-desktop: ${columns.desktop}`)
    }
  }

  return `<div class="app-grid${classes ? ` ${classes}` : ''}" style="${cssProperties.join(';')}">
  ${content}
</div>`
}

/**
 * An object representing responsive values of a given type
 *
 * @template Type
 * @typedef {object} ResponsiveValue
 * @property {Type} [mobile]
 * @property {Type} [tablet]
 * @property {Type} [desktop]
 */
