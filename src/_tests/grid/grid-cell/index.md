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

## Content positioning - vertical

Use the `verticalAlign` option to control the alignment of shorter cells
relative to their taller neighbours. 

It accepts any of the keywords for the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS property.

{% grid {columns: { desktop: 3, tablet: 2, mobile: 1 }, classes: 'test-outline-children' }%}
    {% gridCell {verticalAlign: 'start'} %} 
        I'm a cell with a fair amount of content.

        This is me who'll dictate the height of that row
    {% endgridCell %}
    {% gridCell {verticalAlign: 'end'} %}
        I've got less content, I can be aligned differently and go to the bottom (the `end`)
    {% endgridCell %}
    {% gridCell {verticalAlign: 'center'} %}
        I prefer sitting in the `center`
    {% endgridCell %}
{% endgrid %}


## Spanning multiple columns

Use the `span` property to make a cell span multiple column.

{% grid {columns: { desktop: 3, tablet: 2, mobile: 1 }, classes: 'test-outline-children' }%}
    {% gridCell {span: 3} %} 
        I span 3 columns
    {% endgridCell %}
    {% gridCell {span: 2} %}
        I span 2 columns
    {% endgridCell %}
    {% gridCell %}
        I'm only a single column
    {% endgridCell %}
{% endgrid %}

Like with the `columns` option of the `grid` shortcode, the property can be set responsively:

{% grid {columns: 3, classes: 'test-outline-children' } %}
    {% gridCell {span: { desktop: 3, tablet: 2, mobile: 1 }, nothing: false} %} 
        I span 3 columns on desktop, 2 on tablet and 1 on mobile
    {% endgridCell %}
    {% gridCell {span: 2} %}
        I span 2 columns
    {% endgridCell %}
    {% gridCell %}
        I'm only a single column
    {% endgridCell %}
{% endgrid %}


<!-- prettier-ignore-end -->
