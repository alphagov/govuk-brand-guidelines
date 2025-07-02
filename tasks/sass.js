import paths from '../config/paths.js'

import { mkdir, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { glob } from 'glob'
import * as sass from 'sass'

const compileSassFile = function (file) {
  const result = sass.compile(file, {
    loadPaths: ['./node_modules/govuk-frontend/dist'],
    sourceMap: false,
    outputStyle: 'compressed'
  })
  return result.css.toString()
}

export default async function () {
  // Get all Sass files in the source assets directory, excluding partials
  const files = await glob(`${paths.source}/_stylesheets/**/*.scss`, {
    ignore: `${paths.source}/_stylesheets/**/_*.scss`
  })

  // Loop through files
  for (const file of files) {
    // Get the filename and replace .scss with .css
    const sourceFileName = basename(file)
    const filename = sourceFileName.replace('.scss', '.css')

    // Compile Sass to CSS
    const css = compileSassFile(file)

    // Create the output assets directory if it doesn't already exist
    await mkdir(`${paths.outputAssets}`, {
      recursive: true
    })

    // Write the CSS file
    await writeFile(`${paths.outputAssets}/${filename}`, css)
  }
}
