import { blockPairedShortcode, CustomProperties } from './utils.js'

export const gridCell = blockPairedShortcode((content, options) => {
  const defaultOptions = {
    classes: undefined,
    verticalAlign: undefined,
    span: undefined
  }
  options = { ...defaultOptions, ...options }

  // Assemble custom properties
  const properties = new CustomProperties()
  if (options.verticalAlign) {
    properties.set(`app-grid-cell-vertical-align`, options.verticalAlign)
  }
  if (options.span) {
    properties.setResponsive(`app-grid-cell-span`, options.span, {
      format: (value) => `span ${value}`
    })
  }

  return `<div class="app-grid-cell${options.classes ? ` ${options.classes}` : ''}" style="${properties.declarations}">
    ${content}
  </div>`
})
