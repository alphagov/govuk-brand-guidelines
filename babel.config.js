/**
 * Babel config
 *
 * @type {import('@babel/core').ConfigFunction}
 */

export default function (api) {
  return {
    presets: [
      '@babel/preset-env',
      {
        // Apply bug fixes to avoid transforms
        bugfixes: true,

        // Apply smaller "loose" transforms for browsers
        loose: true,

        // Skip ES module transforms for browsers
        modules: false
      }
    ]
  }
}
