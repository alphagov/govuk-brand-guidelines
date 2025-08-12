import { blockPairedShortcode, CustomProperties } from './utils.js'

export const grid = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,

    // The number of columns to use
    columns: undefined
  }
  options = { ...defaultOptions, ...options }

  // Assemble custom properties
  const properties = new CustomProperties()
  properties.setResponsive('app-grid-columns', options.columns)

  return `<div class="app-grid${options.classes ? ` ${options.classes}` : ''}" style="${properties.declarations}">
    ${content}
  </div>`
})
