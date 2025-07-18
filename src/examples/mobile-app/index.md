---
order: 1
title: Mobile App
---

## Icon

## Splash screen

{# This is a bit pants, would be nice if we could make this a globally available macro #}
{% from "../../_includes/video-player.njk" import appVideoPlayer %}
{{ appVideoPlayer({
  width: 225,
  height: 400,
  sources: [{
    fileName: "/videos/endcard-portrait.mp4",
    type: "video/mp4"
  }]
}) }}

## Homepage

## Screens
