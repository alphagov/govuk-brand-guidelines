import markdownIt from 'markdown-it'
import markdownItGovuk from 'markdown-it-govuk'

const markdownConfig = markdownIt({
  html: true,
  typographer: true,
  breaks: true
}).use(markdownItGovuk)

/**
 * Process a string as Markdown, treating it as a block of content (i.e. it will
 * insert paragraph tags around the content.)
 *
 * @param {string} str - The string to parse as Markdown.
 * @returns {string} - The resulting HTML.
 */
function markdownFilter(str) {
  return markdownConfig.render(str)
}

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupMarkdownCompilation(eleventyConfig) {
  // Configure markdown-it and add Markdown shortcode/filter
  eleventyConfig.setLibrary('md', markdownConfig)
  eleventyConfig.addPairedNunjucksShortcode('markdown', markdownFilter)
  eleventyConfig.addFilter('markdown', markdownFilter)
}

// Export filter for use in shortcodes
export { markdownFilter as markdown }
