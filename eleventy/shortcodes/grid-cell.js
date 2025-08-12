import { blockPairedShortcode } from './utils.js'

export const gridCell = blockPairedShortcode((content, options) => {
  const defaultOptions = {
    classes: undefined,

    verticalAlign: undefined
  }
  options = { ...defaultOptions, ...options }

  // Assemble custom properties
  const cssProperties = []
  if (options.verticalAlign) {
    cssProperties.push(`--app-grid-cell-vertical-align: ${options.verticalAlign}`)
  }

  return `<div class="app-grid-cell${options.classes ? ` ${options.classes}` : ''}" style="${cssProperties.join(';')}">
    ${content}
  </div>`
})
