import { extname } from 'node:path'

import { blockShortcode } from './utils.js'

export const videoPlayer = blockShortcode(
  /**
   * Renders a video player with the provided source(s)
   *
   * @param {object} options
   * @param {string | Array<string> | {[mediaType: string]: string}} options.source - The sources of the video
   * @param {string} [options.classes] - A space separated list of CSS classes to add to the player's `class` attribute
   * @param {number} [options.width] - The width of the video player
   * @param {string} [options.fallbackText] - A fallback description for the video, shown when the video is unavailable
   * @param {boolean} [options.loop] - Whether the video should loop once played
   * @returns {string}
   */
  function ({
    source,
    classes,
    width = 600,
    fallbackText = 'This video is unavailable',
    loop = true
  } = {}) {
    const videoSources = []

    if (typeof source === 'string') {
      // Source is a string, assume it's a file path
      videoSources.push({
        file: source,
        type: getVideoFileTypeFromFileName(source)
      })
    } else if (Array.isArray(source)) {
      // Source is an array of file paths
      source.forEach((path) => {
        // Array item is a string, assume it's a file path
        videoSources.push({
          file: path,
          type: getVideoFileTypeFromFileName(path)
        })
      })
    } else if (typeof source === 'object') {
      // Source is an object of file type : paths
      Object.keys(source).forEach((key) => {
        videoSources.push({
          file: source[key],
          type: `video/${key}`
        })
      })
    }

    // Assemble sources HTML
    const videoSourcesHtml = videoSources.map(
      (source) => `<source src="${source.file}" type="${source.type}">`
    )

    // Create video element
    //
    // Video specific parameters:
    // controls = display video playback buttons, seek bar, volume control
    // playsinline = prevents video defaulting to fullscreen on mobile devices
    // muted = has the video muted by default (can be unmuted with controls)
    // loop = video repeats itself once concluded (useful for short videos)
    return `<video
    class="app-prose-video${classes ? ` ${classes}` : ''}"
    width="${width}"
    controls
    playsinline
    muted
    ${loop ? 'loop' : ''}>
    ${videoSourcesHtml.join('\n')}
    ${fallbackText ? ` <span class="govuk-body">${fallbackText}</span>` : ''}
  </video>`
  }
)

function getVideoFileTypeFromFileName(fileName) {
  return 'video/' + extname(fileName)?.slice(1).toLowerCase()
}
