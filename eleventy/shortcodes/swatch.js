import { blockShortcode } from './utils.js'

// Function to convert hex values to RGB
// HT: https://stackoverflow.com/a/11508164
function convertHexToRGB(hex) {
  // Remove the # if one is present
  hex = hex.replace('#', '')

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

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

  // Not all print colours in the palette have defined CMYK and Pantone
  // equivalents (e.g. white), so those need conditional checks
  const colourLabels = options.print
    ? `${options.cmyk.length ? `<dd class="app-swatch__value" data-swatch-value="${options.cmyk.join(' ')}">CMYK ${options.cmyk.join(' ')}</dd>` : ''}
  ${options.pantone ? `<dd class="app-swatch__value" data-swatch-value="${options.pantone}">${options.pantone}</dd>` : ''}`
    : `<dd class="app-swatch__value" data-swatch-value="${colourRGB.join(' ')}">RGB ${colourRGB.join(' ')}</dd>
  <dd class="app-swatch__value" data-swatch-value="${options.hex}">${options.hex.toUpperCase()}</dd>`

  const label = options.label
    ? `<div class="app-swatch__label">
      <dt class="app-swatch__name"><strong>${options.label}</strong></dt>
      ${colourLabels}
      </div>`
    : ''

  // Assemble attributes for the wrapping element, as what it is can change
  const attributes = `class="app-swatch${options.classes ? ` ${options.classes}` : ''}" data-module="app-swatch" style="--app-swatch-colour:${options.hex};"`

  return options.isInSwatchList
    ? `<div ${attributes}>${label}</div>`
    : `<dl ${attributes}>${label}</dl>`
})
