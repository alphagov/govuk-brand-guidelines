// Takes the contents of the `src/_data/colours.js` file and turns the entries
// into a Sass map in `src/_stylesheets/_colours.scss`

import { writeFile } from 'node:fs'
import { outdent } from 'outdent'
import slug from 'slug'

import colours from '../src/_data/colours.js'

export function generateColourPaletteSass(eleventyConfig) {
  // Set up an object to contain what's going to be output
  const colourMap = {}

  colours().forEach((c) => {
    if (!c.hex) return
    const label = c.label.toLowerCase()

    colourMap[slug(label)] = c.hex.toLowerCase()
  })

  const sass = outdent`// This file is dynamically generated during build.
  // Update \`_data/colours.js\` and rebuild the site to regenerate this file.
  // This file should be committed to source control.

  $govuk-new-colours: (
    ${Object.keys(colourMap)
      .map((key) => `'${key}': ${colourMap[key]}`)
      .join(',\n  ')}
  );\n\n` // we like files to end in newlines

  // File path is relative to the root directory, not this one
  writeFile(
    'src/_stylesheets/_colour-palette.scss',
    sass,
    {
      encoding: 'utf-8'
    },
    (err) => {
      if (err) throw err
    }
  )
}
