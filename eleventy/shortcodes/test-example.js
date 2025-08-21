import { blockPairedShortcode } from './utils.js'

export const testExample = blockPairedShortcode(
  /**
   * Renders an area into which to render test examples
   *
   * @param {string} content - The content of the test example
   * @returns
   */
  function (content) {
    return `<div class="test-example">${content}</div>`
  }
)
