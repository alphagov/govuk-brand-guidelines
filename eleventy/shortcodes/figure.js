import { blockPairedShortcode } from './utils.js'

export const figure = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,
    captionPosition: 'bottom',

    // Image attributes
    // The resizing and conversion of images will be picked up by eleventy-img
    src: undefined,
    alt: undefined
  }
  options = { ...defaultOptions, ...options }

  if (typeof options.alt === 'undefined') {
    console.error('Figure is missing a value for `src`.')
  }

  if (typeof options.alt === 'undefined') {
    console.error('Figure is missing a value for `alt`.')
  }

  // Check caption position
  if (
    options.captionPosition !== 'top' &&
    options.captionPosition !== 'bottom'
  ) {
    options.captionPosition = defaultOptions.captionPosition
  }

  // Assemble caption and image
  const captionHtml = `<figcaption class="app-figure__caption">${content}</figcaption>`

  // This is written like this because excess newlines tend to become jank
  // (i.e. unnecessary and/or empty paragraphs) in the Markdown processor.
  // It's easier to output this as one line of HTML.
  //
  // prettier-ignore
  return `<figure class="app-figure app-figure--caption-${options.captionPosition}${options.classes ? ` ${options.classes}` : ''}">${
    options.captionPosition === "top" ? captionHtml : ''
  }<img class="app-figure__image" alt="${options.alt}" src="${options.src}">${
    options.captionPosition === "bottom" ? captionHtml : ''
  }</figure>`
})
