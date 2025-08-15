import { join } from 'node:path'
import nunjucks from 'nunjucks'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupNunjucks(eleventyConfig) {
  // Add govuk-frontend to places Nunjucks will look for templates
  const nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      eleventyConfig.dir.input,
      join(eleventyConfig.dir.input, eleventyConfig.dir.includes),
      './node_modules/govuk-frontend/dist'
    ]),
    // As we take over Eleventy's Nunjucks environment, we need to replicate the same
    // default it sets up
    // https://github.com/11ty/eleventy/blob/2b5e72c5fbea41bd82a03472679d90ef75fc3119/src/Engines/Nunjucks.js#L19
    eleventyConfig.nunjucksEnvironmentOptions || { dev: true }
  )

  // Enable the rebrand styles and assets
  nunjucksEnvironment.addGlobal('govukRebrand', true)

  eleventyConfig.setLibrary('njk', nunjucksEnvironment)
}
