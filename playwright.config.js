import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['dot'], ['html', { open: 'never' }]] : 'list',

  // In CI, fail on missing baselines instead of silently creating them
  updateSnapshots: process.env.CI ? 'none' : 'missing',

  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',

  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.001
    }
  },

  use: {
    baseURL: 'http://localhost:8080'
  },

  webServer: {
    command: 'npx http-server _site -p 8080 -c-1 -s',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI
  }
})
