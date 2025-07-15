import { Component } from 'govuk-frontend'

export class Swatch extends Component {
  constructor($root) {
    super($root)

    // Check to see if Clipboard API is supported,
    // there's no point continuing if it isn't
    if ((!'clipboard') in navigator) {
      return
    }

    // Contents of button prior to being clicked
    this.buttonHtml = `
    <svg class="app-swatch__copy-icon">
      <use xlink:href="#icon-clipboard"></use>
    </svg>
    <span class="govuk-visually-hidden">Copy</span>`

    // Contents of button when copy has taken place
    this.activeButtonHtml = `
    <svg class="app-swatch__copy-icon app-swatch__copy-icon--copied">
      <use xlink:href="#icon-check"></use>
    </svg>
    <span class="govuk-visually-hidden">Copied!</span>`

    // Get all the values displayed by the swatch
    const $valueElements = $root.querySelectorAll('.app-swatch__value')
    $valueElements.forEach(($element) => {
      this.createCopyButton($element, $element.dataset.swatchValue)
    })
  }

  createCopyButton($appendElement, copyText) {
    // Create copy button for hex colours
    const $button = document.createElement('button')
    $button.type = 'button'
    $button.className = 'app-swatch__copy-button'
    $button.innerHTML = this.buttonHtml
    $button.setAttribute('aria-label', `Copy ${copyText}`)
    $button.setAttribute('aria-live', 'assertive')
    $button.addEventListener(
      'click',
      async () => await this.copy($button, copyText)
    )

    $appendElement.insertAdjacentElement('beforeend', $button)
  }

  async copy($button, text) {
    try {
      await navigator.clipboard.writeText(text)

      // Display confirmation in the button
      $button.innerHTML = this.activeButtonHtml

      // Begin a timer to reset the button contents
      setTimeout(() => {
        $button.innerHTML = this.buttonHtml
      }, 5000)
    } catch (error) {
      console.error(error.message)
    }
  }

  static moduleName = 'app-swatch'
}
