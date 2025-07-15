import { trimTemplateLiteral } from '../utils.js'

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

export function swatch(options = {}) {
  const defaultOptions = {
    classes: undefined,

    // The colours of the swatch
    hex: '#000',
    cmyk: [],
    pantone: undefined,

    // Visible label to associate with the swatch
    label: 'Unnamed',

    // Toggle for print colours, switches RGB/hex for CMYK/Pantone
    print: false
  }
  options = { ...defaultOptions, ...options }

  // Hex values are 1:1 translatable into RGB values, so we convert them
  // instead of storing both separately.
  const colourRGB = convertHexToRGB(options.hex)

  // Not all print colours in the palette have defined CMYK and Pantone
  // equivalents (e.g. white), so those need conditional checks
  const colourLabels = options.print
    ? `${options.cmyk ? `<div class="app-swatch__value" data-swatch-value="${options.cmyk.join(',')}">CMYK ${options.cmyk.join(' ')}</div>` : ''}
  ${options.pantone ? `<div class="app-swatch__value" data-swatch-value="${options.pantone}">${options.pantone}</div>` : ''}`
    : `<div class="app-swatch__value" data-swatch-value="${colourRGB.join(',')}">RGB ${colourRGB.join(' ')}</div>
  <div class="app-swatch__value" data-swatch-value="${options.hex}">${options.hex}</div>`

  const label = options.label
    ? `<div class="app-swatch__label">
      <div class="app-swatch__name"><strong>${options.label}</strong></div>
      ${colourLabels}
      </div>`
    : ''

  return trimTemplateLiteral(`<div class="app-swatch${options.classes ? ` ${options.classes}` : ''}" data-module="app-swatch" style="--app-swatch-colour:${options.hex};">
    ${label}
  </div>`)
}

export function filterColours(palette, use, group) {
  return palette.filter((c) => c.uses.includes(use) && c.group === group)
}
