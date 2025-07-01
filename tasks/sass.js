import paths from "../config/paths.js";

import { mkdir, writeFile } from "node:fs/promises";
import { glob } from "glob";
import * as sass from "sass";

const compileSassFile = function (file) {
  const result = sass.compile(file, {
    loadPaths: ["./node_modules/govuk-frontend/dist"],
    sourceMap: false,
    outputStyle: "expanded",
  });
  return result.css.toString();
};

export default async function () {
  // Get all Sass files in the source assets directory, excluding partials
  const files = await glob(`${paths.source}/_stylesheets/**/*.scss`, {
    ignore: `${paths.source}/_stylesheets/**/_*.scss`,
  });

  // Loop through files
  for await (const file of files) {
    // Get the filename and replace .scss with .css
    const filenameParts = file.split("/");
    const filename = filenameParts[filenameParts.length - 1].replace(
      ".scss",
      ".css",
    );

    // Compile Sass to CSS
    let css = compileSassFile(file);

    // Create the output assets directory if it doesn't already exist
    await mkdir(`${paths.output}/assets`, {
      recursive: true,
    });

    // Write the CSS file
    await writeFile(`${paths.output}/assets/${filename}`, css);
  }
}
