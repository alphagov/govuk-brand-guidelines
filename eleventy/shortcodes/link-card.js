import { blockShortcode } from './utils.js'

export const linkCard = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined,
    titleContainer: "div"
  }
  options = { ...defaultOptions, ...options }

  const parts = [
    `<${options.titleContainer} class="app-link-card__title"><a class="app-link-card__link" href="${options.href ?? '#'}">${options.title}</a></${options.titleContainer}>`,
    options.description &&
      `<span class="app-link-card__description">${options.description}</span>`,
    options.icon &&
      `<img class="app-link-card__icon" alt="" src="${options.icon}">`
  ].filter(Boolean)

  return `<div class="app-link-card${options.classes ? ` ${options.classes}` : ''}">
    ${parts.join('')}
  </div>`
})
