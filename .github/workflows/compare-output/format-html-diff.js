#! /usr/bin/env node
import { readFile } from 'node:fs/promises'

import { formatPatch, parsePatch } from 'diff'

// eslint-disable-next-line no-unused-vars -- Unused variable for destructuring
const [nodePath, scriptPath, diffPath, prNumberOrGitHubRef] = process.argv

console.error(process.argv)

const diff = await readDiff(diffPath)

const prNumber = getPRNumber(prNumberOrGitHubRef)
const netlifyURLBase = `https://deploy-preview-${prNumber}--govuk-brand-guidelines.netlify.app`

const formatted = diff.map((file) => {
  console.error(file.newFileName)
  const path = file.newFileName.split('_site').at(-1).replace('index.html', '')
  return {
    path,
    url: `${netlifyURLBase}${path}`,
    content: formatPatch([file])
  }
})

process.stdout.write(JSON.stringify(formatted, null, 2))

async function readDiff(path) {
  const diffContent = await readFile(path, { encoding: 'utf-8' })
  if (diffContent) {
    return parsePatch(diffContent)
  } else {
    return []
  }
}

/**
 * Extract PR number from string passed as argument to the script
 *
 * For flexibility the script can either accept:
 * - a PR number
 * - the `refs/pull/<PR_NUMBER>/merge` string [available on GitHub actions](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request)
 *
 * This function extracts the number from either string
 *
 * @param {string} prNumberOrGitHubRef
 * @returns
 */
function getPRNumber(prNumberOrGitHubRef) {
  // Extract the number from the string passed as an argument
  const number = /\d+/.exec(prNumberOrGitHubRef)
  return number[0]
}
