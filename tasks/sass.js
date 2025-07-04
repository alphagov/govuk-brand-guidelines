import paths from '../config/paths.js'

import { mkdir, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { glob } from 'glob'
import * as sass from 'sass'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const compileSassFile = async function (file) {
  const sassCompilationResult = sass.compile(file, {
    loadPaths: ['./node_modules/govuk-frontend/dist'],
    sourceMap: false,
    outputStyle: 'compressed',
    silenceDeprecations: ['import'],
    quietDeps: true // silence warnings from govuk-frontend
  })

  const postcssCompilationResult = await postcss([
    autoprefixer,
    cssnano
  ]).process(sassCompilationResult.css.toString(), { from: undefined })

  return postcssCompilationResult.css
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
    const css = await compileSassFile(file)

    // Create the output assets directory if it doesn't already exist
    await mkdir(`${paths.outputAssets}`, {
      recursive: true
    })

    // Write the CSS file
    await writeFile(`${paths.outputAssets}/${filename}`, css)
  }
}
