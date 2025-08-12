import { blockPairedShortcode } from './utils.js'

export const gridCell = blockPairedShortcode((content, options) => {
  const defaultOptions = {
    classes: undefined
  }
  options = { ...defaultOptions, ...options }

  return `<div class="app-grid-cell${options.classes ? ` ${options.classes}` : ''}">${content}</div>`
})
