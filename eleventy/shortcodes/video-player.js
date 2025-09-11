import { extname, resolve } from 'node:path'

import { blockShortcode } from './utils.js'
import { existsSync} from 'node:fs'

export const videoPlayer = blockShortcode(function (options = {}) {
  const defaultOptions = {
    classes: undefined,

    // Player dimensions
    width: 600,
    height: undefined,
    aspectRatio: '16:9',

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

    // A fallback description for the video, if the video is unavailable.
    // NOTE: Fallback text does not support block-level HTML elements!
    fallbackText: 'This video is unavailable.',

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
  const videoSourcesHtml = videoSources.map(
    (source) => `<source src="${source.file}" type="${source.type}">`
  )

  // If width is undefined or not a valid number, set a default
  // Later calculations rely on this existing
  const playerWidth = !isNaN(options.width)
    ? Number(options.width)
    : defaultOptions.width

  // If height is undefined, calculate player height from width and aspectRatio
  let playerHeight = !isNaN(options.width) ? Number(options.height) : null

  if (!playerHeight && options.aspectRatio) {
    const aspectRatio = options.aspectRatio.match(/^[0-9]+:[0-9]+$/)
      ? options.aspectRatio
      : defaultOptions.aspectRatio

    const ratioParts = aspectRatio.split(':')
    const multiplier = Number(ratioParts[1]) / Number(ratioParts[0])
    playerHeight = Math.ceil(playerWidth * multiplier)
  }

  // Create video element
  //
  // Video specific parameters:
  // controls = display video playback buttons, seek bar, volume control
  // playsinline = prevents video defaulting to fullscreen on mobile devices
  // muted = has the video muted by default (can be unmuted with controls)
  // loop = video repeats itself once concluded (useful for short videos)

  return `<video${options.classes ? ` class="${options.classes}"` : ''}
    width="${playerWidth}"
    height="${playerHeight}"
    controls
    playsinline
    muted
    poster="${options.poster ?? getPosterImage(videoSources, this.ctx.page)}"
    ${options.loop ? 'loop' : ''}>
    ${videoSourcesHtml.join('\n')}
    ${options.fallbackText ? ` <span class="govuk-body">${options.fallbackText}</span>` : ''}
  </video>`
})

function getPosterImage(videoSources, page) {
  const pathOfFirstSourceWithRelativeURL = videoSources
    .filter(source => !/^https?:/.test(source.file))
    .at(0)?.file

  if (pathOfFirstSourceWithRelativeURL) {
    const extension = extname(pathOfFirstSourceWithRelativeURL);
    const posterPath = pathOfFirstSourceWithRelativeURL.replace(extension, '.poster.jpg')

    // Video will be resolved from the page's URL, so we need to use this to
    // resolve the path. However, the page's URL will start with a leading '/'
    // so we need to strip that first character when joining with `src`
    const posterAbsolutePath = resolve('src',page.url.slice(1), posterPath);
    if (pathOfFirstSourceWithRelativeURL.includes('dot-animations')) {
      console.log(posterAbsolutePath)
    }

    if (existsSync(posterAbsolutePath)) {
      return posterPath
    }
  }

  return '/assets/videos.poster.jpg'
}

function getVideoFileTypeFromFileName(fileName) {
  return 'video/' + extname(fileName)?.slice(1).toLowerCase()
}
