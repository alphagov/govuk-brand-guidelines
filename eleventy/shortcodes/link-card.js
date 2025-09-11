import { blockShortcode } from './utils.js'

export const linkCard = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined
  }
  options = { ...defaultOptions, ...options }

  const parts = [
    `<span class="app-link-card__title"><a class="app-link-card__link" href="${options.href ?? '#'}">${options.title}</a></span>`,
    options.description &&
      `<span class="app-link-card__description">${options.description}</span>`,
    options.icon &&
      `<img class="app-link-card__icon" alt="" src="${options.icon}">`
  ].filter(Boolean)

  const attributes = {
    class: ['app-link-card', options.classes].filter(Boolean).join(' ')
  }

  return `<div class="app-link-card${options.classes ? ` ${options.classes}` : ''}">
    ${parts.join('')}
  </div>`
})
