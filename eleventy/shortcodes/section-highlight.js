import { blockPairedShortcode } from './utils.js'

export const sectionHighlight = blockPairedShortcode(
  (content, options = {}) => {
    const defaultOptions = {
      classes: undefined
    }
    options = { ...defaultOptions, ...options }

    return `<div class="app-section-highlight${options.classes ? ` ${options.classes}` : ''}">
    ${content}
  </div>`
  }
)
