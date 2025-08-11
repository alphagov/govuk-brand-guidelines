import { blockShortcode } from './utils.js'

export const videoPlayer = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined,

    // Player dimensions
    width: 600,
    height: 338,

    // The source(s) for video files
    //
    // As a string: path to a video file
    // {% video { source: "path/to/file.mp4" } %}
    //
    // As an array: array of strings that are paths to video files
    // {% video { source: ["path/to/file.mp4", "path/to/file.webm"] } %}
    //
    // As an object: object containing media types (as keys) and file paths (values)
    // {% video { source: {"video/mp4": "path/to/file.mp4", "video/quicktime": "path/to/file.mov" } } %}
    source: undefined,

    // A fallback description for the video, if the video is unavailable
    description: undefined,

    // Whether to loop the video once played
    loop: true
  }
  options = { ...defaultOptions, ...options }

  const videoSources = []

  if (typeof options.source === 'string') {
    // Source is a string, assume it's a file path
    videoSources.push({
      file: options.source,
      type: getVideoFileTypeFromFileName(options.source)
    })
  } else if (Array.isArray(options.source)) {
    // Source is an array of file paths
    options.source.forEach((path) => {
      // Array item is a string, assume it's a file path
      videoSources.push({
        file: path,
        type: getVideoFileTypeFromFileName(path)
      })
    })
  } else if (typeof options.source === 'object') {
    // Source is an object of file type : paths
    Object.keys(options.source).forEach((key) => {
      videoSources.push({
        file: options.source[key],
        type: `video/${key}`
      })
    })
  }

  // Assemble sources HTML
  const videoSourcesHtml = []

  videoSources.forEach((source) => {
    videoSourcesHtml.push(`<source src="${source.file}" type="${source.type}">`)
  })

  // Assemble fallback HTML
  // NOTE: Fallback text does not support block-level HTML elements!
  let fallbackHtml = `<a class="govuk-link" href="${options.source}">Download this video.</a>`
  if (options.description) {
    fallbackHtml = `${options.description}` + fallbackHtml
  }

  // controls = display video playback buttons, seek bar, volume control
  // playsinline = prevents video defaulting to fullscreen on mobile devices
  // muted = has the video muted by default (can be unmuted with controls)
  // loop = video repeats itself once concluded (useful for short videos)
  return `<video
    class="app-prose-video${options.classes ? ` ${options.classes}` : ''}"
    width="${options.width}"
    height="${options.height}"
    controls
    playsinline
    muted
    ${options.loop ? 'loop' : ''}>
    ${videoSourcesHtml.join('\n')}
    ${fallbackHtml}
  </video>`
})

function getVideoFileTypeFromFileName(fileName) {
  return 'video/' + fileName.split('.').pop().toLowerCase()
}
