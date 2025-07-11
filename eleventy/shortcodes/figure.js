import { markdown } from '../markdown.js'
import { trimTemplateLiteral } from '../utils.js'

export function figure(options = {}) {
  const defaultOptions = {
    classes: undefined,
    caption: undefined,
    src: undefined,
    alt: '',
    captionPosition: 'bottom'
  }
  options = { ...defaultOptions, ...options }

  // Assemble figcaption
  const caption = options.caption
    ? `<figcaption class="app-figure__caption">${markdown(options.caption)}</figcaption>`
    : null

  return trimTemplateLiteral(`<figure class="app-figure${options.classes ? ` ${options.classes}` : ''}">
    ${caption && options.captionPosition === 'top' ? caption : ''}
    <img src="${options.src}" alt="${options.alt}">
    ${caption && options.captionPosition === 'bottom' ? caption : ''}
  </figure>`)
}
