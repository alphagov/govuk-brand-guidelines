---
title: Test page for the `video` shortcode
---

## Video sources

Different browsers and operating systems support different video formats. Most modern browsers support MP4 and WebM video, but some other browsers may require different formats to be used.

All formats are provided via the `source` parameter.

### Defining a single source

Videos with a single source file can simply refer to the file:

```
{% raw %}{% video { source: "path/to/video.mp4" } %}{% endraw %}
```

{% video { source: "mp4-h264.mp4" } %}

### Defining multiple sources

Videos with multiple source files can pass them as an array:

```
{% raw %}{% video { source: [
  "path/to/video.mp4",
  "path/to/video.webm"
] } %}{% endraw %}
```

{% video { source: [
  "mp4-h264.mp4",
  "webm-vp8.webm"
] } %}

### Defining sources with unusual media types

Usually, a video file's [media type](https://en.wikipedia.org/wiki/Media_type) is assumed from the file extension, however not all video files use the extension as their media type. For example, .mov, .avi, .mkv, and .ogv files.

If **any** of the video sources have differing IMEs, all video sources must be defined with explicit media types.

```
{% raw %}{% video { source: {
  "mp4": "path/to/video.mp4",
  "webm": "path/to/video.webm",
  "quicktime": "path/to/video.mov"
} } %}{% endraw %}
```

{% video { source: {
  "mp4": "mp4-h264.mp4",
  "webm": "webm-vp8.webm",
  "ogg": "ogg-theora.ogv"
} } %}

## `fallbackText` parameter

Provides a short description of the video, which is shown if the video is unable to load.

Fallback text must be plain text (no HTML or Markdown formatting) and a single paragraph.

This defaults to the text "This video is unavailable."

```
{% raw %}{% video {
  source: "video.mp4",
  fallbackText: "No video for you."
} %}{% endraw %}
```

{% video { source: "mp4-h264.mp4", fallbackText: "A series of examples of the dot in motion, first expanding into a speech bubble, then as numbered steps, highlighting one of four sections in turn, expanding to highlight a particular word in a statement, and then splitting, rotating and recombining to form the dot in the GOV.UK wordmark." } %}

## `loop` parameter

Whether the video should repeat indefinitely once played.

This defaults to `true` so that users don't need to repeatedly restart short demos. Set `{ loop: false }` to turn off looping.

```
{% raw %}{% video {
  source: "path/to/video.mp4",
  loop: false
} %}{% endraw %}
```

{% video { source: "mp4-h264.mp4", loop: false } %}

## `width` parameter

The **maximum** width of the video player can be customised with `width` parameter.

The dimensions of videos aren't fixed. The video player's width will be capped to the maximum width of the container or viewport.

```
{% raw %}{% video {
  source: "path/to/video.mp4",
  width: 200
} %}{% endraw %}
```

{% video { source: "mp4-h264.mp4", width: 200 } %}

## `height` and `aspectRatio` parameters

Define a height for the video player, or calculate the height using an aspect ratio. You only need to specify one of these.

- `height` is provided as a number: `{ height: 300 }`
- `aspectRatio` is provided as a colon-separated string: `{ aspectRatio: "9:16" }`

**Both `height` and `aspectRatio` are overridden by the intrinsic dimensions of the video file, once it has loaded.** This is only to 'reserve' space on the page so that the video player appears correctly sized before the video has loaded.

```
{% raw %}{% video {
  source: "path/to/video.mp4",
  width: 200,
  height: 300
} %}

{% video {
  source: "path/to/video.mp4",
  width: 200,
  aspectRatio: "9:16"
} %}{% endraw %}
```

{% grid { columns: { tablet: 2 } } %}
{% video { source: "mp4-h264.mp4", width: 200, height: 300 } %}
{% video { source: "mp4-h264.mp4", width: 200, aspectRatio: "9:16" } %}
{% endgrid %}

## `classes` parameter

Adds custom classes to the video player, for bespoke styling.
