---
title: Test utilities
---

To facilitate creating test pages, we have a couple of utilities

## Test example shortcode

The `{{"{% testExample %}"}}` paired shortcode creates an area in which to render the test.
It prevents its children from overflowing but the padding around the test allows to detect
if something is not where it should be.

{% testExample %}
Test render goes here
{% endtestExample %}

## Outlines CSS classes

### Outlining elements

Use the following classes on your elements to give them an outline
and make them visually recognisable in the tests:

- `test-outline`: A regular solid outline sitting on the outside of the element
- `test-outline--loose`: A dotted outline 2px outside the boundary of the element
- `test-outline--tight`: A dashed outline sitting inside the element (same as a border)

{% testExample %}

<p class="govuk-body test-outline">.test-outline</p>
<p class="govuk-body test-outline--loose">.test-outline--loose</p>
<p class="govuk-body test-outline--tight">.test-outline--tight</p>

{% endtestExample %}

### Outlining children

If you need to outline children of an element in bulk, you can use the following classes:

- `test-outline-children`
- `test-outline-children--loose`
- `test-outline-children--tight`

{% testExample %}

<div class="test-outline-children">

`.test-outline-children`

And some more

</div>

{% endtestExample %}

{% testExample %}

<div class="test-outline-children--loose">

`.test-outline-children--loose`

And some more

{% endtestExample %}

</div>

{% testExample %}

<div class="test-outline-children--tight">

`.test-outline-children--tight`

And some more

{% endtestExample %}

</div>

## Overlaying guides

To check alignment, you can overlay guides drawing a line at a specific horizontal or vertical position using:

- `test-guide-line--vertical` for a vertical line
- `test-guide-line--horizontal` for a horizontal line

The position of the line is controlled by setting a `--x` or `--y` custom property (depending on the orientation) in the `style` attribute. It accepts any valid value for [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).

### Vertical guideline

{% testExample %}

<div class="test-guide-line--vertical" style="--x: 20px">

- Let's see a list
- With some items
- and some more

</div>

{% endtestExample %}

### Horizontal guideline

{% testExample %}

<div class="test-guide-line--horizontal" style="--y: 11px">

Some content

</div>

{% endtestExample %}

### Combined

{% testExample %}

<div class="test-guide-line--vertical test-guide-line--horizontal" style="--x: 20px; --y: 11px">

- Let's see a list
- With some items
- and some more

</div>

{% endtestExample %}

When using both guide lines, you may want to customise the colour of each of them, which can be done with the `--vertical-guide-line-colour` and `--horizontal-guide-line-colour` properties

{% testExample %}

<div class="test-guide-line--vertical test-guide-line--horizontal" 
    style="
        --x: 20px; 
        --y: 11px; 
        --vertical-guide-line-colour: rebeccapurple;
        --horizontal-guide-line-colour: blue">

- Let's see a list
- With some items
- and some more

</div>

{% endtestExample %}
