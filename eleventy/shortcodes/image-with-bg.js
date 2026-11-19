import { blockPairedShortcode } from './utils.js'

export const imageWithBG = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    color: 'blue',
    variant: 'tint-50'
  }
  options = { ...defaultOptions, ...options }

  return `<div class="app-image-with-background app-bg-${options.color ? `${options.color}` : ''}-${options.variant ? `${options.variant}` : ''}">
    ${content}
  </div>`
})
