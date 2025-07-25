#!/bin/sh
set -ex

# Computes the diff of `_site` between a provided base reference (branch, tag, commit SHA) and the current HEAD.
# It outputs the resulting diff in the provided output folder
#
# Usage: `bin/compare-output.sh <base-reference> <output-folder>`

# Default the base branch to main to allow running locally quickly
base="${1:-main}"
# Default the head branch to the commit SHA if detached
head=$(git branch --show-current | git rev-parse HEAD)
# And the output folder to the current working directory
output_folder="${2:-`pwd`}"

rm -Rf .cache/diff/output
mkdir -p .cache/diff/output

# Switch to base branch
git checkout $base

# Build package for base branch
npm install --ignore-scripts --no-save --silent
npm run build

# Switch back to original branch
git checkout $head

# Commit build output from base branch
git add --force ./_site
git commit --allow-empty -m "Build output for '$base'" --no-verify

# Build package for original branch
npm install --ignore-scripts --no-save --silent
npm run build

# Commit build output from original branch
git add --force ./_site
git commit --allow-empty -m "Build output for '$head'" --no-verify

# The following are directory diffs but filtered using git pathspec
# See https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefpathspecapathspec

# Diff the rendered HTML output
git diff -M05 HEAD^ -- "_site/**/*.html" \
  > $output_folder/.cache/diff/output/html.diff

# Diff the rest of the files, excluding the sourcemaps and the minified files
git diff -M05 HEAD^ -- _site \
  ":(exclude)**/*.html" \
  ":(exclude)**/*.map" \
  > $output_folder/.cache/diff/outpu/other.diff
