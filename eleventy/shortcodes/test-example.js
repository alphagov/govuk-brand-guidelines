import { blockShortcode } from './utils.js'

export const testExample = blockShortcode((content) => {
  return `<div class="test-example">${content}</div>`
})
