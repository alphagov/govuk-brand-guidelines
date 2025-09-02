import { ConfigurableComponent } from 'govuk-frontend'

const copyIcon = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
  <polygon points="12.58 16.51 2.27 16.51 2.27 3.35 3.27 3.35 3.27 15.51 12.58 15.51 12.58 16.51"/>
  <path d="M15.73,13.91H4.88V1.49h10.86v12.42ZM5.88,12.91h8.86V2.49H5.88v10.42Z"/>
</svg>`

const checkmarkIcon = `
<svg focusable="false" aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
  <path d="M9,1C4.58,1,1,4.58,1,9s3.58,8,8,8,8-3.58,8-8S13.42,1,9,1ZM14.33,6.84l-6.66,6.66c-.06.06-.15.06-.21,0l-3.78-3.78c-.06-.06-.06-.15,0-.21l.92-.92c.06-.06.15-.06.21,0l2.76,2.76,5.64-5.64c.06-.06.15-.06.21,0l.92.92c.06.06.06.15,0,.21Z"/>
</svg>`

export class InlineCopy extends ConfigurableComponent {
  $button
  initialText

  constructor($root, config) {
    super($root, config)

    this.initialText = $root.innerHTML

    // Create copy button
    const $button = document.createElement('button')
    $button.type = 'button'
    if (this.config.buttonClass) {
      $button.className = `${this.config.buttonClass}`
    }
    $button.addEventListener(
      'click',
      async () => await this.copy($button, this.config.copyValue)
    )
    this.$button = $button
    this.resetButton()

    $root.removeChild($root.firstChild)
    $root.appendChild($button)
  }

  resetButton() {
    this.$button.setAttribute('aria-label', `Copy ${this.config.copyValue}`)
    this.$button.innerHTML = `${this.initialText} ${copyIcon}`
    this.$button.classList.remove(
      this.config.buttonClass ? `${this.config.buttonClass}--copied` : 'copied'
    )
  }

  activeButton() {
    this.$button.setAttribute('aria-label', `Copied!`)
    this.$button.innerHTML = `${this.initialText} ${checkmarkIcon}`
    this.$button.classList.add(
      this.config.buttonClass ? `${this.config.buttonClass}--copied` : 'copied'
    )
  }

  async copy($button, text) {
    try {
      await navigator.clipboard.writeText(text)
      this.activeButton()

      // Begin a timer to reset the button contents
      setTimeout(() => {
        this.resetButton()
      }, this.config.delay)
    } catch (error) {
      console.error(error.message)
    }
  }

  static checkSupport() {
    ConfigurableComponent.checkSupport()

    // Check to see if Clipboard API is supported,
    // there's no point continuing if it isn't
    if (!('clipboard' in navigator)) {
      throw Error('Clipboard API not supported in this browser')
    }
  }

  static defaults = {
    copyValue: '',
    delay: 3000,
    buttonClass: 'app-inline-copy'
  }

  static schema = {
    properties: {
      copyValue: { type: 'string' },
      delay: { type: 'number' },
      buttonClass: { type: 'string' }
    }
  }

  static moduleName = 'app-inline-copy'
}
