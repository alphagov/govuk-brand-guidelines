---
title: Grid cells
---

<!-- prettier-ignore-start -->

The `gridCell` shortcode helps create grid cells.
It's preferable to `<div>` as it avoids having to handle whitespace between HTML and markdown

## Basic

It creates a `<div>` without having to add extra whitespace

{% grid {columns: 2, classes: 'test-outline-children' }%}
    {% gridCell %} 
        - a list 
        - of items

        And a paragraph
    {% endgridCell %}
    {% gridCell %}
        <p class="govuk-body">This one with an HTML paragraph</p>
    {% endgridCell %}
{% endgrid %}

<!-- prettier-ignore-end -->
