import paths from "./config/paths.js";

import nunjucks from "nunjucks";

import { markdownConfig, markdownFilter } from "./config/markdown.js";
import compileSass from "./tasks/sass.js";

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default function (eleventyConfig) {
  // Add govuk-frontend to places Nunjucks will look for templates
  let nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      "./src",
      "./node_modules/govuk-frontend/dist",
    ]),
  );

  // Enable the rebrand styles and assets
  nunjucksEnvironment.addGlobal("govukRebrand", true);

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  // Watch and compile Sass files on change
  eleventyConfig.addWatchTarget(`${paths.source}/**/*.scss`);
  eleventyConfig.on("beforeBuild", compileSass);

  // Copy font and image assets from govuk-frontend to the project
  eleventyConfig.addPassthroughCopy({
    "./node_modules/govuk-frontend/dist/govuk/assets": "assets",
  });

  // Configure markdown-it and add Markdown shortcode/filter
  eleventyConfig.setLibrary("md", markdownConfig);
  eleventyConfig.addPairedNunjucksShortcode("markdown", markdownFilter);
  eleventyConfig.addFilter("markdown", markdownFilter);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: paths.source,
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
