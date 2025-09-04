import { blockPairedShortcode } from './utils.js'

// Shortcode for the common visual styling around the numerous Inform Inspire
// graphics.
export const informInspire = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,
    headingLevel: 3,
    contentClasses: undefined
  }
  options = { ...defaultOptions, ...options }

  return `<div class="app-inform-inspire${options.classes ? ` ${options.classes}` : ''}">
    <h${options.headingLevel} class="govuk-visually-hidden">From most informative to most inspiring</h${options.headingLevel}>
    <div class="app-inform-inspire__axis" aria-hidden="true">
      <div class="app-inform-inspire__axis-label">Inform</div>
      <div class="app-inform-inspire__axis-dot"></div>
      <div class="app-inform-inspire__axis-label">Inspire</div>
    </div>
    <div class="app-inform-inspire__content${options.contentClasses ? ` ${options.contentClasses}` : ''}">${
      content
    }</div>
  </div>`
})
