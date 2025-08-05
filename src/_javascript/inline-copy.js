import { ConfigurableComponent } from 'govuk-frontend'

// Contents of button prior to being clicked
const $copyButtonHtml = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 28 28">
  <path d="M12 26h14v-10h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-6v18zM16 3.5v-1c0-0.266-0.234-0.5-0.5-0.5h-11c-0.266 0-0.5 0.234-0.5 0.5v1c0 0.266 0.234 0.5 0.5 0.5h11c0.266 0 0.5-0.234 0.5-0.5zM20 14h4.672l-4.672-4.672v4.672zM28 16v10.5c0 0.828-0.672 1.5-1.5 1.5h-15c-0.828 0-1.5-0.672-1.5-1.5v-2.5h-8.5c-0.828 0-1.5-0.672-1.5-1.5v-21c0-0.828 0.672-1.5 1.5-1.5h17c0.828 0 1.5 0.672 1.5 1.5v5.125c0.203 0.125 0.391 0.266 0.562 0.437l6.375 6.375c0.594 0.594 1.062 1.734 1.062 2.562z"></path>
</svg>
<span class="govuk-visually-hidden">Copy</span>`

// Contents of button when copy has taken place
const $copyButtonCopiedHtml = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 28 28">
  <path d="M26.109 8.844c0 0.391-0.156 0.781-0.438 1.062l-13.438 13.438c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-7.781-7.781c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.609 10.25-10.266c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062z"></path>
</svg>
<span class="govuk-visually-hidden">Copied!</span>`

export class InlineCopy extends ConfigurableComponent {
  constructor($root, config) {
    super($root, config)

    // Check to see if Clipboard API is supported,
    // there's no point continuing if it isn't
    if ((!'clipboard') in navigator) {
      return
    }

    // Create copy button
    const $button = document.createElement('button')
    $button.type = 'button'
    if (this.config.buttonClass) {
      $button.className = `${this.config.buttonClass}`
    }
    $button.innerHTML = this.config.html
    $button.setAttribute('aria-label', `Copy ${this.config.copyValue}`)
    $button.setAttribute('aria-live', 'assertive')
    $button.addEventListener(
      'click',
      async () => await this.copy($button, this.config.copyValue)
    )

    $root.insertAdjacentElement('beforeend', $button)
  }

  async copy($button, text) {
    try {
      await navigator.clipboard.writeText(text)

      // Display confirmation in the button
      $button.innerHTML = this.config.copiedHtml
      $button.classList.add(
        this.config.buttonClass
          ? `${this.config.buttonClass}--copied`
          : 'copied'
      )

      // Begin a timer to reset the button contents
      setTimeout(() => {
        $button.innerHTML = this.config.html
        $button.classList.remove(
          this.config.buttonClass
            ? `${this.config.buttonClass}--copied`
            : 'copied'
        )
      }, this.config.delay)
    } catch (error) {
      console.error(error.message)
    }
  }

  static defaults = {
    copyValue: '',
    delay: 3000,
    buttonClass: 'app-inline-copy',
    html: $copyButtonHtml,
    copiedHtml: $copyButtonCopiedHtml
  }

  static schema = {
    properties: {
      copyValue: { type: 'string' },
      delay: { type: 'number' },
      buttonClass: { type: 'string' },
      html: { type: 'string' },
      copiedHtml: { type: 'string' }
    }
  }

  static moduleName = 'app-inline-copy'
}
