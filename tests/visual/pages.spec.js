import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'

function slugify(pathname) {
  return pathname === '/'
    ? 'homepage'
    : pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-')
}

const sitemapRegex = /(?<=<loc>).*?(?=<\/loc>)/g
const sitemap = readFileSync('_site/sitemap.xml', 'utf8')
const pages = sitemap.match(sitemapRegex)

for (const pathname of pages) {
  const name = slugify(pathname)
  test(name, async ({ page }) => {
    await page.goto(pathname)
    await page.evaluate(() => document.fonts.ready)

    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true })
  })
}
