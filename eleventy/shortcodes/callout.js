import { blockPairedShortcode } from './utils.js'

// A simple implementation of the govuk inset text component with `app-callout`
// added as a modifier class. Intended to save us callout govukInsetText with
// the modifier over and over again.
export const callout = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined
  }
  options = { ...defaultOptions, ...options }

  return `<div class="govuk-inset-text app-callout${options.classes ? ` ${options.classes}` : ''}">
    ${content}
  </div>`
})
