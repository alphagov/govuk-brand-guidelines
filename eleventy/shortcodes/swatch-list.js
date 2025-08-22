import { blockShortcode } from './utils.js'
import { swatch } from './swatch.js'

export const swatchList = blockShortcode(_swatchList)

/**
 * Renders a list of swatches from the provided palette, optionally filtered by group or use
 *
 * @param {object} options
 * @param {string} [options.classes] - A space separated list of CSS classes to add to the swatch list's `class` attribute
 * @param {string} [options.palette] - The palette from which to pull the colours, default to the one in the site's data
 * @param {string} [options.group] - Filter for the group of colour (eg. 'blue', 'green', 'red',...) to render from the palette
 * @param {string} [options.use] - Filter for the use of the colour ('web', 'app',...) to render from the palette
 * @returns {string}
 */
function _swatchList({ classes, palette, use, group } = {}) {
  palette ??= this.ctx.colours ?? []

  // Get an array of colours for the given options
  let colourList = filterColours(palette, use, group)

  // Modify the array to implant the print option and indicate this is a list of swatches
  colourList = colourList.map((c) => {
    return { ...c, print: use === 'print', isInSwatchList: true }
  })

  return `<dl class="app-swatch-list${classes ? ` ${classes}` : ''}">
  ${colourList.map((c) => swatch(c)).join(' ')}
</dl>`
}

export function filterColours(palette, use, group) {
  if (use) {
    palette = palette.filter((c) => c.uses.includes(use))
  }

  if (group) {
    palette = palette.filter((c) => c.group === group)
  }

  return palette
}
