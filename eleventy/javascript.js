import * as paths from '../config/paths.js'

import { mkdir, writeFile } from 'node:fs/promises'
import { globSync } from 'glob'
import { rollup } from 'rollup'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export function setupJavaScriptCompilation(eleventyConfig) {
  eleventyConfig.addWatchTarget(`${paths.source}/**/*.js`)
  eleventyConfig.on('beforeBuild', compileJavaScriptFiles)
}

async function compileJavaScriptFiles() {
  let bundle
  try {
    bundle = await rollup({
      input: globSync(`${paths.source}/_javascript/*.js`, {
        ignore: '**/_*'
      }),
      plugins: [
        nodeResolve(),
        babel({
          babelHelpers: 'bundled'
        }),
        terser()
      ]
    })

    await generateOutputs(bundle)
  } finally {
    if (bundle) {
      await bundle.close()
    }
  }
}

async function generateOutputs(bundle) {
  const { output } = await bundle.generate({
    dir: paths.outputAssets,
    format: 'es'
  })

  // Create the output assets directory if it doesn't already exist
  await mkdir(`${paths.outputAssets}`, {
    recursive: true
  })

  for (const chunkOrAsset of output) {
    // Rollup produces two types of output:
    // * chunks are pieces of JavaScript code
    // * assets are other files referenced in the JS (images, stylesheets, etc.)
    //
    // Our code doesn't use assets for anything so we don't handle them here,
    // but still ensure the output is a chunk so that it doesn't fall over.
    if (chunkOrAsset.type === 'chunk') {
      // Write the JS chunk file
      await writeFile(
        `${paths.outputAssets}/${chunkOrAsset.fileName}`,
        chunkOrAsset.code
      )
    }
  }
}
