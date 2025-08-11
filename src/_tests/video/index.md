---
title: Test page for the `video` shortcode
---

## Basic configuration

At a minimum, a `source` parameter must be defined.

{% video { source: "test-video.mp4" } %}

## Video sources

Different browsers and operating systems support different video formats. Most modern browsers support MP4 and WebM video, but some other browsers may require different formats to be used.

All formats are provided via the `source` parameter.

### Defining a single source

Videos with a single source file can simply refer to the file:

```
{ source: "path/to/video.mp4" }
```

### Defining multiple sources

Videos with multiple source files can pass them as an array:

```
{ source: [
  "path/to/video.mp4",
  "path/to/another/video.webm"
] }
```

### Defining sources with unusual media types

Usually, a video file's [media type](https://en.wikipedia.org/wiki/Media_type) is assumed from the file extension, however not all video files use the extension as their media type. For example, .mov, .avi, .mkv, and .ogv files.

If **any** of the video sources have differing IMEs, all video sources must be defined with explicit media types.

```
{ source: {
  "mp4": "path/to/video.mp4",
  "webm": "path/to/another/video.webm",
  "ogg": "path/to/yet/another/video.ogv",
  "quicktime": "path/to/another/another/video.mov"
} }
```

## `description` parameter

Provides a short description of the video, which is shown if the video is unable to load.

Descriptions must be plain text (no HTML or Markdown formatting) and a single paragraph. They automatically include a link to download the video.

{% video { source: "test-video.mp4", description: "A series of examples of the dot in motion, first expanding into a speech bubble, then as numbered steps, highlighting one of four sections in turn, expanding to highlight a particular word in a statement, and then splitting, rotating and recombining to form the dot in the GOV.UK wordmark." } %}

## `loop` parameter

Whether the video should repeat indefinitely once played.

This defaults to `true` so that users don't need to repeatedly restart short demos. Set `{ loop: false }` to turn off looping.

{% video { source: "test-video.mp4", loop: false } %}

## `width` parameter

The **maximum** width of the video player can be customised with `width` parameter.

The dimensions of videos aren't fixed. The video player's width will be capped to the maximum width of the container or viewport, and the height will adapt to match the aspect ratio of the video being played.

{% video { source: "test-video.mp4", width: 300 } %}

## `classes` parameter

Adds custom classes to the video player, for bespoke styling.
