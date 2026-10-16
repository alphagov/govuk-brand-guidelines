import { blockPairedShortcode } from './utils.js'

export const figure = blockPairedShortcode((content, options = {}) => {
  const defaultOptions = {
    classes: undefined,
    captionPosition: 'bottom',

    // Image attributes
    // The resizing and conversion of images will be picked up by eleventy-img
    src: undefined,
    alt: undefined,

    // For rendering multiple images described by a single figcaption
    images: undefined
  }
  options = { ...defaultOptions, ...options }

  options.images ??= [{ src: options.src, alt: options.alt }]

  // Check caption position
  if (
    options.captionPosition !== 'top' &&
    options.captionPosition !== 'bottom'
  ) {
    options.captionPosition = defaultOptions.captionPosition
  }

  // Assemble caption and image
  const captionHtml = `<figcaption class="app-figure__caption">${content}</figcaption>`

  const imageHtml = options.images
    .map(({ src, alt }) => {
      checkImageAttributes(src, alt)
      return `<img class="app-figure__image" alt="${alt}" src="${src}">`
    })
    .join('\n')

  // This is written like this because excess newlines tend to become jank
  // (i.e. unnecessary and/or empty paragraphs) in the Markdown processor.
  // It's easier to output this as one line of HTML.
  //
  // prettier-ignore
  return `<figure class="app-figure app-figure--caption-${options.captionPosition}${options.classes ? ` ${options.classes}` : ''}">${
    options.captionPosition === 'top' ? captionHtml : ''
  }<div class="app-figure__images-container">${imageHtml}</div>${
    options.captionPosition === 'bottom' ? captionHtml : ''
  }</figure>`
})

function checkImageAttributes(src, alt) {
  if (typeof src === 'undefined') {
    console.error('Image in figure is missing a value for `src`.')
  }

  if (typeof alt === 'undefined') {
    console.error('Image in figure is missing a value for `alt`.')
  }
}
