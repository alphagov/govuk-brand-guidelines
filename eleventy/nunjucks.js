import nunjucks from 'nunjucks'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupNunjucks(eleventyConfig) {
  // Add govuk-frontend to places Nunjucks will look for templates
  const nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      eleventyConfig.dir.input,
      './node_modules/govuk-frontend/dist'
    ])
  )

  // Enable the rebrand styles and assets
  nunjucksEnvironment.addGlobal('govukRebrand', true)

  eleventyConfig.setLibrary('njk', nunjucksEnvironment)
}
