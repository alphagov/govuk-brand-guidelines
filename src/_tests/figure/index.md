---
title: Test page for the `figure` shortcode
---

The figure shortcode displays an image with a semantically linked caption.

## Basic usage

Setting an image `src` and `alt` are both required.

The caption's content is nested between the tags and can contain Markdown formatting.

```
{% raw %}{% figure {
  src: "image.png",
  alt: "A fire breathing tiger riding atop a fighter jet."
} %}
My **extremely cool** image.
{% endfigure %}{% endraw %}
```

{% figure { src: "./test.svg", alt: "The GOV.UK wordmark." } %}
Caption below the image
{% endfigure %}

{% figure { src: "./test.svg", alt: "The GOV.UK wordmark." } %}

### Caption with Markdown

This is some accompanying text with a heading and more than one paragraph.

Sint reprehenderit aliquip magna ex elit aliqua mollit nisi non exercitation ut exercitation veniam adipisicing.
{% endfigure %}

## `captionPosition` parameter

Set `captionPosition: "top"` to move the caption above the image.

```
{% raw %}{% figure {
  src: "image.png",
  alt: "A fire breathing tiger riding atop a fighter jet.",
  captionPosition: "top"
} %}
My **extremely cool** image.
{% endfigure %}{% endraw %}
```

{% figure { src: "./test.svg", alt: "The GOV.UK wordmark.", captionPosition: "top" } %}
Caption on the top
{% endfigure %}

## `classes` parameter

Use the `classes` parameter to add custom styles, such as override classes that change spacing and text alignment.

```
{% raw %}{% figure {
  src: "image.png",
  alt: "A fire breathing tiger riding atop a fighter jet.",
  classes: "govuk-!-margin-bottom-0 govuk-!-text-align-left"
} %}
My **extremely cool** image.
{% endfigure %}{% endraw %}
```
