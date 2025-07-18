/**
 * Remove excess whitespace from JavaScript template literals.
 *
 * Whitespace management is pretty important in shortcodes, as their output
 * still goes through the Markdown parser. Errant spaces and line breaks can
 * result in unwanted code blocks and empty paragraph elements!
 *
 * @param str - The template literal to remove whitespace from
 * @returns The modified template literal
 */

export function trimTemplateLiteral(str) {
  // Replaces any instances of two or more whitespace characters (spaces, tabs,
  // or newlines) with a single space, remove starting and ending whitespace
  return str.replace(/\s{2,}/g, ' ').trim()
}
