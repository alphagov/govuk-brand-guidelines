import { outdent } from 'outdent'

/**
 * Wraps a *non-paired* shortcode function so that it applies
 * appropriate whitespace around the output HTML.
 *
 * @param {(options:Object) => string} shortcode
 * @returns
 */

export function blockShortcode(shortcode) {
  return function ({ insideHTML, indent = 0, ...options } = {}) {
    const output = indentLines(shortcode.call(this, options), { amount: indent })

    return insideHTML ? output : `\n\n${output}\n\n`
  }
}

/**
 * Wraps a paired shortcode function so it handles whitespace
 * correctly both inside and outside the shortcode tags
 *
 * Allows shortcodes to receive both markdown and HTML
 *
 * @param {(content:string, options:Object) => string} shortcode
 * @returns
 */
export function blockPairedShortcode(shortcode) {
  return function (content, { insideHTML, indent = 0, ...options } = {}) {
    // For content to be formatted properly inside the `<div>`
    // we need two things to happen for markdown to be processed properly:
    // 1. Removing any indentation, so that markdown blocks are properly at the start of the line
    // 2. Adding new lines at the start and end, unless it's an HTML element
    const formattedContent = ensureLeadingTrailingNewLines(
      outdent.string(content)
    )

    const output = indentLines(shortcode.call(this, formattedContent, options), {
      amount: indent
    })

    return insideHTML ? output : `\n\n${output}\n\n`
  }
}

function indentLines(content, { amount = 0, character = ' ' }) {
  const indentation = character.repeat(amount)

  return content
    .split('\n')
    .map((line) => indentation + line)
    .join('\n')
}

function ensureLeadingTrailingNewLines(content) {
  content = content.trim()
  if (!startsWithHTML(content)) {
    content = `\n\n${content}`
  }
  if (!endsWithHTML(content)) {
    content = `${content}\n\n`
  }

  return content
}

function startsWithHTML(string) {
  return string.match(/^<\[\w][\w-]?>/)
}

function endsWithHTML(string) {
  return string.match(/<\/[\w]+[\w-]?>$/)
}
