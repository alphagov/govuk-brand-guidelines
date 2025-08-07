---
title: Test page for the `video` shortcode
---

## Basic configuration

At a minimum, a `source` parameter must be defined.

{% video { source: "dot-animations.mp4" } %}

## `description` parameter

Provides a short description of the video, which is shown if the video is unable to load.

Descriptions must be plain text (no HTML or Markdown formatting) and a single paragraph. Descriptions include an automatically added link to download the video.

{% video { source: "dot-animations.mp4", description: "A series of examples of the dot in motion, first expanding into a speech bubble, then as numbered steps, highlighting one of four sections in turn, expanding to highlight a particular word in a statement, and then splitting, rotating and recombining to form the dot in the GOV.UK wordmark." } %}

## `loop` parameter

Whether the video should repeat indefinitely once played.

This defaults to `true` so that users don't need to repeatedly play videos to watch short demos. You can set `{ loop: false }` if you don't want this to happen.

{% video { source: "dot-animations.mp4", loop: false } %}

## `width` and `height` parameters

The **maximum** width and height of the video player can be customised with `{ width: 600, height: 450 }`.

These values aren't fixed. The video player's height will adapt to match the aspect ratio of the video being played, and the width will be capped to the maximum width of the container.

{% video { source: "dot-animations.mp4", width: 200 } %}

## `sourceType` parameter

Changes the [media type](https://en.wikipedia.org/wiki/Media_type) (formerly known as MIME type) of the video file. For example, MP4 files typically use `video/mp4`.

You usually won't need to set this unless you're using some weird video formats.

## `classes` parameter

Adds custom classes to the video player, for bespoke styling.
