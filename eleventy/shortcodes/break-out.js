import { blockPairedShortcode } from './utils.js'

export const breakOut = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,
    theme: 'blue'
  }
  options = { ...defaultOptions, ...options }

  return `<div class="app-break-out app-break-out--${options.theme} ${options.classes ? ` ${options.classes}` : ''}">
    ${content}
  </div>`
})
