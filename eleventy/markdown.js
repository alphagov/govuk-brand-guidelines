import markdownIt from 'markdown-it'
import markdownItGovuk from 'markdown-it-govuk'
import markdownItAnchor from 'markdown-it-anchor'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupMarkdownCompilation(eleventyConfig) {
  const markdownConfig = markdownIt({
    html: true,
    typographer: true
  })
    .use(markdownItGovuk)
    .use(markdownItAnchor)

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

  // Configure markdown-it and add Markdown shortcode/filter
  eleventyConfig.setLibrary('md', markdownConfig)
  eleventyConfig.addPairedNunjucksShortcode('markdown', markdownFilter)
  eleventyConfig.addFilter('markdown', markdownFilter)
}
