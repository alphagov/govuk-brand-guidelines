/**
 * Babel config
 *
 * @type {import('@babel/core').ConfigFunction}
 */

export default function (api) {
  // If build gets too slow we can revisit, but rather
  // than handling the complexity of managing the caching
  // of Babel configuration and risking issues that are hard
  // to debug, let's have Babel re-run the config for now
  api.cache(false)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // Use our JS support query specifically
          browserslistEnv: 'javascript',

          // Apply bug fixes to avoid transforms
          bugfixes: true,

          // Apply smaller "loose" transforms for browsers
          loose: true,

          // Skip ES module transforms for browsers
          modules: false
        }
      ]
    ]
  }
}
