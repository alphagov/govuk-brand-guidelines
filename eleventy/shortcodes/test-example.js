import { blockPairedShortcode } from './utils.js'

export const testExample = blockPairedShortcode((content) => {
  return `<div class="test-example">${content}</div>`
})
