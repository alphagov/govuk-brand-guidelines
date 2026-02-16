import { blockShortcode } from './utils.js'
import { swatch } from './swatch.js'

export const swatchList = blockShortcode(function (options = {}) {
  const defaultOptions = {
    classes: undefined,

    // The colour palette to use
    // Default to the brand colour palette
    palette: this.ctx.colours ?? [],

    // Filter by the intended use of the colour.
    // One of 'web', 'app', 'print', `social`.
    use: undefined,

    // What group of colours to filter down to
    group: undefined,

    // Render list in compact format
    compact: false
  }
  options = { ...defaultOptions, ...options }

  // Get an array of colours for the given options
  let colourList = filterColours(options.palette, options.use, options.group)

  // Modify the array to implant the print option and indicate this is a list of swatches
  colourList = colourList.map((c) => {
    return {
      ...c,
      print: options.use === 'print',
      compact: options.compact,
      isInSwatchList: true
    }
  })

  return `<dl class="app-swatch-list${options.classes ? ` ${options.classes}` : ''}">
    ${colourList.map((c) => swatch(c)).join(' ')}
  </dl>`
})

export function filterColours(palette, use, group) {
  if (use) {
    palette = palette.filter((c) => c.uses.includes(use))
  }

  if (group) {
    palette = palette.filter((c) => c.group === group)
  }

  return palette
}
