import { blockShortcode } from './utils.js'

export const swatch = blockShortcode(_swatch)

/**
 * Renders a colour swatch, including name, visual sample and colour codes
 *
 * @param {object} options
 * @param {string} [options.classes] - A space separated list of CSS classes to add to the swatch's `class` attribute
 * @param {string} [options.hex] - The hexadecimal representation of the colour
 * @param {number[]} [options.cmyk] - The CMYK representation of the colour
 * @param {string} [options.pantone] - The name of the pantone colour
 * @param {string} options.label - The name of the colour in the brand colour system
 * @param {boolean} [options.print] - Whether the swatch should render the colours for print
 * @param {isInSwatchList} [options.isInSwatchList] - Removes the wrapping `dl` element if this is an item in a list of swatches
 * @returns {string}
 */
function _swatch({
  classes,
  hex = '#000',
  cmyk = [],
  pantone,
  label = 'Unnamed',
  print = false,
  isInSwatchList = false
} = {}) {
  // Hex values are 1:1 translatable into RGB values, so we convert them
  // instead of storing both separately.
  const colourRGB = convertHexToRGB(hex)

  // Assemble values to display
  let colourValues = []
  if (print) {
    // Not all print colours in the palette have defined CMYK and Pantone
    // equivalents (e.g. white), so those need conditional checks
    if (cmyk.length) {
      colourValues.push({
        label: `CMYK ${cmyk.join(' ')}`,
        value: cmyk.join(' ')
      })
    }
    if (pantone) {
      colourValues.push({ label: pantone, value: pantone })
    }
  } else {
    colourValues = [
      { label: `RGB ${colourRGB.join(' ')}`, value: colourRGB.join(' ') },
      { label: hex.toUpperCase(), value: hex }
    ]
  }

  // Assemble the label's HTML
  const $values = colourValues.map(
    ({ label, value }) =>
      `<dd class="app-swatch__value" data-module="app-inline-copy" data-copy-value="${value}">${label}</dd>`
  )

  const $label = label
    ? `<dt class="app-swatch__name">${label}</dt>
    ${$values.join(' ')}`
    : ''

  // Assemble attributes for the wrapping element separately, as what element
  // that is changes depending on `isInSwatchList`
  const attributes = `class="app-swatch${classes ? ` ${classes}` : ''}" style="--app-swatch-colour:${hex};"`

  return isInSwatchList
    ? `<div ${attributes}>${$label}</div>`
    : `<dl ${attributes}>${$label}</dl>`
}

/**
 * Function to convert hex values to RGB
 *
 * @link https://stackoverflow.com/a/11508164
 *
 * @property {string} hex - The hexadecimal value to convert to RGB
 * @returns {Array<number>} - Array containing R, G, and B values normalised to 0–255
 */
function convertHexToRGB(hex) {
  // Remove the # if one is present
  hex = hex.replace('#', '')

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}
