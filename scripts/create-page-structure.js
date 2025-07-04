#! /usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import { parse } from 'csv'
import slug from 'slug'
import { dirname, join } from 'node:path'
import matter from 'gray-matter'

const parseCSV = promisify(parse)

// First let's get the rows of the CSV
const content = await readFile('site-structure.csv', { encoding: 'utf-8' })
const rows = await parseCSV(content, {
  fromLine: 2
})

// Arrays are nice, but objects will give us better access
const headings = rows.map((row) => {
  // First four columns represent the page level, with an `x` marking the level
  // let's turn this into a column
  const pageLevel = row.splice(0, 4).findIndex((value) => value === 'x') + 1

  const [isSubsection, titleInPDF, proposedTitle] = row
  return {
    level: pageLevel,
    titleInPDF,
    proposedTitle,
    slug: slug(proposedTitle),
    isSubsection,
    pages: [],
    sections: []
  }
})

// Now we have a flat list of headings, let's build a tree out of them
// attaching each heading to
let lastPageHeading
for (const heading of headings) {
  if (heading.level) {
    if (lastPageHeading) {
      while (lastPageHeading.parent && lastPageHeading.level >= heading.level) {
        lastPageHeading = lastPageHeading.parent
      }

      lastPageHeading.pages.push(heading)
    }

    heading.parent = lastPageHeading
    lastPageHeading = heading
  } else {
    lastPageHeading.sections.push(heading)
  }
}

const promises = []
// Now let's traverse the pages to create the appropriate files
traverse(headings[0], 'pages', (page, {ancestors, index}) => {
  const pathParts = ancestors
    // Ignore the home page's slug for generating the paths
    // as we want the pages to be directly in `src` not in `src/<HOMEPAGE_SLUG>`
    .filter((ancestor) => ancestor.level !== 1)
    .map((ancestor) => ancestor.slug)

  const filePathParts = [
    'src',
    ...pathParts,
    // We don't want the home page to be `src/<HOMEPAGE_SLUG>/index.md`, just `src/index.md`
    page.level !== 1 && page.slug,
    'index.md'
  ].filter(Boolean)

  const filePath = join(...filePathParts)

  const sections = page.sections
    // Ignore sections that are being dropped because of lack of content
    .filter((section) => section.proposedTitle !== '—')
    .map((section) => section.proposedTitle)
    .join('\n\n')
  const content = `# ${page.proposedTitle}\n\n${sections}`

  const data = {
    order: index
  }

  const fileContent = matter.stringify(content, data)

  promises.push(writeDeepFile(filePath, fileContent))
})

await Promise.all(promises)

async function writeDeepFile(filePath, ...args) {
  const directoryPath = dirname(filePath)
  await mkdir(directoryPath, {
    recursive: true
  })
  await writeFile(filePath, ...args)
}

function traverse(object, property, callback, {ancestors = [], index = 0} = {}) {
  callback(object, {ancestors, index})
  if (object[property]) {
    const childAncestors = [...ancestors, object]

    object[property].forEach((child, index) => {
      traverse(child, property, callback, {
        index,
        ancestors: childAncestors
      })
    })
  }
}
