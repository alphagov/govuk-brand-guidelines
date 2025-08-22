import { blockPairedShortcode } from './utils.js'

export const testExample = blockPairedShortcode(_testExample)

/**
 * Renders an area into which to render test examples
 *
 * @param {string} content - The content of the test example
 * @returns
 */
function _testExample(content) {
  return `<div class="test-example">${content}</div>`
}
