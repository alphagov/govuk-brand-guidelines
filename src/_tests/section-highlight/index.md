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

### Available variants

{% sectionHighlight { classes: "app-section-highlight--light-blue" } %}
`app-section-highlight--light-blue`
{% endsectionHighlight%}

{% sectionHighlight { classes: "app-section-highlight--light-grey" } %}
`app-section-highlight--light-grey`
{% endsectionHighlight%}

{% sectionHighlight { classes: "app-section-highlight--white" } %}
`app-section-highlight--white`
{% endsectionHighlight%}

{% sectionHighlight { classes: "app-section-highlight--logo" } %}
`app-section-highlight--logo`
{% endsectionHighlight%}
