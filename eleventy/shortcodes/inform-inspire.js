import { blockPairedShortcode } from './utils.js'

// Shortcode for the common visual styling around the numerous Inform Inspire
// graphics.
//
// This component has 3 variants that we take into account with this shortcode:
//
// - No need for extra styling besides the standard container
// - Modifiers on the content element eg: adding flex styling which we do via
// `contentClasses`
// - A list under the content element which we do via `list`. We handle the
// rendering of the list here rather than in the markdown to avoid markdown
// processing nonsense
export const informInspire = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,
    headingLevel: 3,
    contentClasses: undefined,
    list: [],
    listLabel: undefined
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
    }</div>${
      options.list.length > 0
        ? `${
            options.listLabel
              ? `<p class="govuk-body govuk-!-margin-top-4">${options.listLabel}</p>`
              : ''
          }
        <ul class="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">
        ${options.list.map((item) => `<li>${item}</li>`).join('\n')}
      </ul>`
        : ''
    }</div>`
})
