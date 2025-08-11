/**
 * Computes the value of the `aria-current` attribute
 * a link to the given `linkUrl` should have when rendered
 * on the page at `renderedPageUrl`
 *
 * @param {string} linkUrl -- The URL of the link whose `aria-current` is computed
 * @param {string} renderedPageUrl -- The URL of the page the link is being rendered
 * @returns {'page'|'true'|undefined} -- The value for the `aria-current` attribute of the link
 */
export function ariaCurrentValue(linkUrl, renderedPageUrl) {
  if (isCurrent(linkUrl, renderedPageUrl)) {
    return 'page'
  } else if (isActive(linkUrl, renderedPageUrl)) {
    return 'true'
  }
}

/**
 * Returns whether the given URL should be marked as 'active'
 * when rendering the page for the `renderedUrl`.
 *
 * 'active' is when the `linkUrl`'s path forms the start of the `renderedUrl`
 *
 * @param {string} linkUrl -- The URL of the link that might be 'active'
 * @param {string} renderedPageUrl -- The URL of the page the link is being rendered
 * @returns {boolean}
 */
export function isActive(linkUrl, renderedPageUrl) {
  return renderedPageUrl.startsWith(linkUrl)
}

/**
 * Returns whether the given URL should be marked as 'current'
 * when rendering the page for the `renderedUrl`
 *
 * 'current' meaning that that `linkUrl` is the same as the page being rendered
 *
 * @param {string} linkUrl -- The URL of the link that might be 'current'
 * @param {string} renderedPageUrl -- The URL of the page the link is being rendered
 * @return {boolean}
 */
export function isCurrent(linkUrl, renderedPageUrl) {
  return renderedPageUrl === linkUrl
}
