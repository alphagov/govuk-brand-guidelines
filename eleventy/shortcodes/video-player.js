import { blockShortcode } from './utils.js'

export const videoPlayer = blockShortcode((options = {}) => {
  const defaultOptions = {
    classes: undefined,

    // Player dimensions
    width: 600,
    height: 450,

    // Filepath to video
    source: undefined,

    // The source type (e.g. video/mp4). If undefined, this is assumed
    // from the extension on `source`
    sourceType: undefined,

    // A fallback description for the video, if the video is unavailable
    description: undefined,

    // Whether to loop the video once played
    loop: true
  }
  options = { ...defaultOptions, ...options }

  // Determine media type
  const sourceType =
    options.sourceType ?? 'video/' + options.source.split('.').pop()

  // Assemble fallback HTML
  let fallbackHtml = `<p class="govuk-body">
    <a class="govuk-link" href="${options.source}">Download this video.</a>
  </p>`
  if (options.description) {
    fallbackHtml =
      `<p class="govuk-body">${options.description}</p>` + fallbackHtml
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
    muted${options.loop ? ' loop' : ''}>
    <source src="${options.source}" type="${sourceType}">
    ${fallbackHtml}
  </video>`
})
