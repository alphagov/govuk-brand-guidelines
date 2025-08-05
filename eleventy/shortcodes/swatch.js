import { blockShortcode } from './utils.js'

export const swatch = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined,

    // The colours of the swatch
    hex: '#000',
    cmyk: [],
    pantone: undefined,

    // Visible label to associate with the swatch
    label: 'Unnamed',

    // Toggle for print colours, switches RGB/hex for CMYK/Pantone
    print: false,

    // Removes the wrapping `dl` element if this is an item in a list of swatches
    isInSwatchList: false
  }
  options = { ...defaultOptions, ...options }

  // Hex values are 1:1 translatable into RGB values, so we convert them
  // instead of storing both separately.
  const colourRGB = convertHexToRGB(options.hex)

  // Assemble values to display
  let colourValues = []
  if (options.print) {
    // Not all print colours in the palette have defined CMYK and Pantone
    // equivalents (e.g. white), so those need conditional checks
    if (options.cmyk.length) {
      colourValues.push({
        label: `CMYK ${options.cmyk.join(' ')}`,
        value: options.cmyk.join(' ')
      })
    }
    if (options.pantone) {
      colourValues.push({ label: options.pantone, value: options.pantone })
    }
  } else {
    colourValues = [
      { label: `RGB ${colourRGB.join(' ')}`, value: colourRGB.join(' ') },
      { label: options.hex.toUpperCase(), value: options.hex }
    ]
  }

  // Assemble the label's HTML
  const $values = colourValues.map(
    ({ label, value }) =>
      `<dd class="app-swatch__value" data-module="app-inline-copy" data-copy-value="${value}">${label}</dd>`
  )

  const $label = options.label
    ? `<dt class="app-swatch__name">${options.label}</dt>
      ${$values.join(' ')}`
    : ''

  // Assemble attributes for the wrapping element separately, as what element
  // that is changes depending on `isInSwatchList`
  const attributes = `class="app-swatch${options.classes ? ` ${options.classes}` : ''}" style="--app-swatch-colour:${options.hex};"`

  return options.isInSwatchList
    ? `<div ${attributes}>${$label}</div>`
    : `<dl ${attributes}>${$label}</dl>`
})

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
