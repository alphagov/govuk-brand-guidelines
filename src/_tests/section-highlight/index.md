---
title: Test page for the `sectionHighlight` shortcode
---

## No configuration

{% sectionHighlight %}

## This is a heading

This is some body copy. Nisi laborum nulla fugiat deserunt cupidatat proident deserunt anim sunt nulla.

- this is
- a list
- made of items
  {% endsectionHighlight %}

## `classes` parameter

{% sectionHighlight { classes: "page-custom-class" } %}

## This is a heading

This is some body copy. Amet quis magna in aliquip officia.

- this is
- a list
- made of items
  {% endsectionHighlight %}
