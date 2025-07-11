import { markdown } from '../markdown.js'
import { trimTemplateLiteral } from '../utils.js'

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

  return trimTemplateLiteral(`<div class="app-grid${options.classes ? ` ${options.classes}` : ''}" style="${cssProperties.join('')}">
    ${markdown(content)}
  </div>`)
}
