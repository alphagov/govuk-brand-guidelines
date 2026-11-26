import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'

function slugify(pathname) {
  return pathname === '/'
    ? 'homepage'
    : pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-')
}

function promisifyImage(image) {
  image.loading = 'eager' // force any lazy loaded images to be fetched immediately
  if (image.complete) {
    return null
  }
  return new Promise((resolve) => {
    image.addEventListener('load', resolve, { once: true })
    image.addEventListener('error', resolve, { once: true })
  })
}

// wait for images and fonts to be fully loaded before capturing screenshots, avoiding flaky VRTs
async function settle(page) {
  await page.evaluate(async () => {
    const imagePromises = [...document.images].map((image) =>
      promisifyImage(image)
    )
    await Promise.all(imagePromises)
    await document.fonts.ready
  })
  await page.waitForLoadState('networkidle')
}

const sitemapRegex = /(?<=<loc>).*?(?=<\/loc>)/g
const sitemap = readFileSync('_site/sitemap.xml', 'utf8')
const pages = sitemap.match(sitemapRegex)

for (const pathname of [pages[0]]) {
  const name = slugify(pathname)
  test(name, async ({ page }) => {
    await page.goto(pathname)
    await settle(page)
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true })
  })
}
