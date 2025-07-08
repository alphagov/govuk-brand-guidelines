import { glob } from 'glob'
import { rollup } from 'rollup'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { join } from 'node:path'

/**
 * @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 * @param {CompilationOptions} options
 */
export function setupJavaScriptCompilation(eleventyConfig, { to }) {
  const outputDir = join(eleventyConfig.dir.output, to)

  eleventyConfig.addWatchTarget(`${eleventyConfig.dir.input}/**/*.js`)
  eleventyConfig.on('eleventy.before', async () => {
    // Grab only the JavaScript files at the root of the javascript directory
    // to avoid compiling `import`ed files into their own bundle
    const files = await glob(`${eleventyConfig.dir.input}/_javascript/*.js`, {
      ignore: `**/_*`
    })

    compileJavaScriptFiles(files, outputDir)
  })
}

/**
 * Compiles the given JavaScript files into the given outputDir
 *
 * @param {string[]} files - Paths to the files to compile
 * @param {string} outputDir - The output directory
 */
async function compileJavaScriptFiles(files, outputDir) {
  let bundle
  try {
    bundle = await rollup({
      input: files,
      plugins: [
        nodeResolve(),
        babel({
          babelHelpers: 'bundled'
        }),
        terser()
      ]
    })

    await bundle.write({
      dir: outputDir,
      format: 'es'
    })
  } finally {
    if (bundle) {
      await bundle.close()
    }
  }
}

/**
 * @typedef CompilationOptions
 * @property {string} to - Into the output directory to which assets should be compiled
 */
