import { expect, test } from '@playwright/test'

let copyValue
let copyButton

test.beforeEach(async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/colour/web/')

  const descriptionDetails = await page
    .locator('[data-module="app-inline-copy"]')
    .first()
  copyValue = await descriptionDetails.getAttribute('data-copy-value')
  copyButton = descriptionDetails.getByRole('button')
})

test.describe('when Javascript is not available', () => {
  test('it does not render a `<button>` for copying to the clipboard', async ({
    browser
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false
    })
    const page = await context.newPage()
    await page.goto('/colour/web/')
    await expect(await page.locator('[class="app-inline-copy"]')).toHaveCount(0)
  })
})

test.describe('when Javascript is available', () => {
  test('it renders a `<button>` for copying to the clipboard', async ({
    page
  }) => {
    await expect(
      await page.locator('[class="app-inline-copy"]').first()
    ).toBeVisible()
  })

  test.describe('when the copy button is pressed', () => {
    test('it copies the provided `copy-value` to the clipboard', async ({
      page
    }) => {
      expect(
        await page.evaluate(() => navigator.clipboard.readText())
      ).not.toContain(copyValue)

      await copyButton.click()

      expect(
        await page.evaluate(() => navigator.clipboard.readText())
      ).toContain(copyValue)
    })

    test('it briefly displays a "copied" state', async ({ page }) => {
      expect(copyButton).toHaveClass('app-inline-copy')

      await copyButton.click()

      await expect(copyButton).toHaveClass(
        'app-inline-copy app-inline-copy--copied'
      )
    })

    test('it announces that the value has been copied to assistive technology users through a live-region', async ({
      page
    }) => {
      const status = await page.locator('[data-inline-copy-status]')

      expect(await status.getAttribute('aria-live')).toEqual('assertive')
      expect(status).toHaveText('')

      await copyButton.click()

      await expect(status).toHaveText('Copied!')
    })
  })
})
