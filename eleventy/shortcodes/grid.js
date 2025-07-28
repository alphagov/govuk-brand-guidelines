import { outdent } from 'outdent'

export function grid(content, options = {}) {
  const defaultOptions = {
    classes: undefined,

    // The number of columns to use
    // If undefined, it will use as many columns as the content allows
    columns: undefined,

    // The narrowest that any column can be before it will coerce other
    // columns to wrap onto a new line. — Default is set in CSS
    minWidth: undefined
  }
  options = { ...defaultOptions, ...options }

  // Assemble custom properties
  const cssProperties = []
  if (options.columns) {
    cssProperties.push(`--app-grid-columns: ${options.columns}`)
  }
  if (options.minWidth) {
    cssProperties.push(`--app-grid-min-width: ${options.minWidth}`)
  }

  // For content to be formatted properly inside the `<div>`
  // we need two things to happen for markdown to be processed properly:
  // 1. Removing any indentation, so that markdown blocks are properly at the start of the line
  // 2. Adding new lines at the start and end, unless it's an HTML element
  const formattedContent = ensureLeadingTrailingNewLines(
    outdent.string(content)
  )

  return `\n\n<div class="app-grid${options.classes ? ` ${options.classes}` : ''}" style="${cssProperties.join(';')}">${formattedContent}</div>\n\n`
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
