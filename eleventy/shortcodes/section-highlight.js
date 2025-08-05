import { blockShortcode } from './utils.js'

// TODO: This should be updated to `blockPairedShortcode` once PR #38 has been merged!

export const sectionHighlight = blockShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined
  }
  options = { ...defaultOptions, ...options }

  return `<div class="app-section-highlight${options.classes ? ` ${options.classes}` : ''}">
    ${content}
  </div>`
})
