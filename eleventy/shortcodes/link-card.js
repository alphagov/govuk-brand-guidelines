import { randomUUID } from 'node:crypto'
import { blockShortcode } from './utils.js'

export const linkCard = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined
  }
  options = { ...defaultOptions, ...options }

  const descriptionId = options.description && randomUUID()

  const parts = [
    `<span class="app-link-card__title">${options.title}</span>`,
    options.description &&
      `<span aria-hidden id="${descriptionId}" class="app-link-card__description">${options.description}</span>`,
    options.icon &&
      `<img class="app-link-card__icon" alt="" src="${options.icon}"></img>`
  ].filter(Boolean)

  const attributes = {
    class: ['app-link-card', options.classes].filter(Boolean).join(' '),
    href: options.url || '',
    'aria-describedby': descriptionId || null
  }

  return `<a ${asHTMLAttributes(attributes)}>
    ${parts.join('')}
  </a>`
})

function asHTMLAttributes(attributes) {
  return Object.entries(attributes)
    .filter(
      ([attributeName, attributeValue]) =>
        attributeValue != null || typeof attributeValue === 'undefined'
    )
    .map(
      ([attributeName, attributeValue]) =>
        `${attributeName}="${attributeValue}"`
    )
    .join(' ')
}
