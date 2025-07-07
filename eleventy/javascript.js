import * as paths from '../config/paths.js'

import { globSync } from 'glob'
import { rollup } from 'rollup'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

/**
 *  @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupJavaScriptCompilation(eleventyConfig) {
  eleventyConfig.addWatchTarget(`${paths.source}/**/*.js`)
  eleventyConfig.on('eleventy.before', compileJavaScriptFiles)
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

    await bundle.write({
      dir: paths.outputAssets,
      format: 'es'
    })
  } finally {
    if (bundle) {
      await bundle.close()
    }
  }
}
