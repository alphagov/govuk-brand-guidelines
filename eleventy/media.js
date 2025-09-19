import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'

/**
 * Configures processing of media (images, videos)
 *
 * @param {import("@11ty/eleventy/UserConfig")} eleventyConfig
 */
export function setupMedia(eleventyConfig) {
  // Load Eleventy image plugin. In this configuration, it automatically
  // resizes and compresses the sources of <img>s referenced in output HTML
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // Output image formats
    formats: ['auto', 'avif', 'webp'],

    // If the input is SVG, only output SVG
    svgShortCircuit: true,

    // Output image widths
    // These represent full-width, two-thirds and one-third grid widths respectively
    widths: [960, 630, 300],

    // Attributes on the output HTML
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async'
      },
      pictureAttributes: {}
    },

    // Sharp does not handle GIFs by default and limits
    // the size of the images it can process (which we lift
    // to be more open )
    sharpOptions: {
      animated: true,
      limitInputPixels: false
    }
  })

  // Copy video files in the output site
  eleventyConfig.addPassthroughCopy('**/*.mp4')
  eleventyConfig.addPassthroughCopy('**/*.webm')

  // Copy sass background images to the output site
  eleventyConfig.addPassthroughCopy({
    'src/_stylesheets/images': 'styles/images'
  })
}
