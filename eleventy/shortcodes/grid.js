import { markdown } from '../markdown.js'
import { trimTemplateLiteral } from '../utils.js'

export function grid(content, options = {}) {
  const defaultOptions = {
    classes: undefined,

    // The number of columns to use
    columns: undefined
  }
  options = { ...defaultOptions, ...options }

  // Assemble custom properties
  const cssProperties = []
  if (typeof options.columns === 'number') {
    cssProperties.push(`--app-grid-columns-mobile: ${options.columns};`)
  } else if (typeof options.columns === 'object') {
    if (options.columns.mobile) {
      cssProperties.push(
        `--app-grid-columns-mobile: ${options.columns.mobile};`
      )
    }
    if (options.columns.tablet) {
      cssProperties.push(
        `--app-grid-columns-tablet: ${options.columns.tablet};`
      )
    }
    if (options.columns.desktop) {
      cssProperties.push(
        `--app-grid-columns-desktop: ${options.columns.desktop};`
      )
    }
  }

  return trimTemplateLiteral(`<div class="app-grid${options.classes ? ` ${options.classes}` : ''}" style="${cssProperties.join('')}">
    ${markdown(content)}
  </div>`)
}
