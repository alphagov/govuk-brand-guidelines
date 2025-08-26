---
title: Test page for the `callout` shortcode
---

## Different content types

### Single paragraph

{% callout %}
This is a callout
{% endcallout %}

### Multiple paragraphs

{% callout %}
This is a paragraph

This is another one
{% endcallout %}

### List

{% callout %}
- this
- is
- a
- list
{% endcallout %}

## `classes` parameter

{% callout {classes: "govuk-!-padding-left-9"} %}
This is a callout
{% endcallout %}
