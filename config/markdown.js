import markdownIt from "markdown-it";
import markdownItGovuk from "markdown-it-govuk";

/**
 * Process a string as Markdown, treating it as a block of content (i.e. it will
 * insert paragraph tags around the content.)
 *
 * @param {string} str - The string to parse as Markdown.
 * @returns {string} - The resulting HTML.
 */
const markdownFilter = function (str) {
  return markdownConfig.render(str);
};

const markdownConfig = markdownIt({
  html: true,
  typographer: true,
  breaks: true,
}).use(markdownItGovuk);

export { markdownConfig, markdownFilter };
