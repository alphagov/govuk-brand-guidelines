---
title: Whitespace handling within the `grid` shortcode
---

<!-- prettier-ignore-start -->
<!-- This file has a few tests about managing whitespace so we need it to stay as authored -->

## `content`

### Single line

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}Hello{% endgrid %}
{% endtestExample %}

### Next line both ends

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
{% endtestExample %}

### Line break

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}

Grid content

{% endgrid %}
{% endtestExample %}

### Intended

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
    Grid content
{% endgrid %}
{% endtestExample %}

### Same line at start
{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}Grid content
{% endgrid %}
{% endtestExample %}

### Next line at start
{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content{% endgrid %}
{% endtestExample %}

### Markdown

#### Next line both ends

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
A paragraph introducing:

- a list
{% endgrid %}
{% endtestExample %}

#### Line break at start, line break at end

It shouldn't have extra `<p>` from markdown transformation

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}

A paragraph introducing:

- a list

{% endgrid %}
{% endtestExample %}

#### Indented

It shouldn't be turned into a Markdown code block

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
    A paragraph introducing:

    - a list
{% endgrid %}
{% endtestExample %}

#### Same line at start

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}A paragraph introducing:

    - a list
{% endgrid %}
{% endtestExample %}

#### Same line at end

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
    A paragraph introducing:

    - a list{% endgrid %}
    {% endtestExample %}

### HTML

#### Next line both ends

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>
{% endgrid %}
{% endtestExample %}

#### Line break at start, line break at end

It shouldn't have extra `<p>` from Markdown transformation

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}

<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>

{% endgrid %}
{% endtestExample %}

#### Indented

It shouldn't be turned into a Markdown code block

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}

<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>

{% endgrid %}
{% endtestExample %}

#### Same line at start

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>
{% endgrid %}
{% endtestExample %}

#### Same line at end

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>{% endgrid %}
{% endtestExample %}

#### Pre-formatted text

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<pre>
Hello,
    How does this look?
  Some space indentation as well
</pre>
{% endgrid %}
{% endtestExample %}

#### Mixed with markdown

##### Markdown first

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
- a list
- with two items

<small>Followed by some HTML</small>
{% endgrid %}
{% endtestExample %}

##### Markdown last

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<small>Some HTML...</small>

- a list
- with two items
{% endgrid %}
{% endtestExample %}

##### Markdown around

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
1. One
2. Two

<small>Some HTML...</small>

- a list
- with two items
{% endgrid %}
{% endtestExample %}

##### HTML around

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<small>Some initial HTML...</small>

- a list
- another list

<small>HTML again</small>
{% endgrid %}
{% endtestExample %}

##### Markdown inside

Like with any nesting of Markdown inside HTML,
the markdown blocks need to be at the start of the line

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<article>

###### Here's the heading

And some content

</article>
{% endgrid %}
{% endtestExample %}

Markdown blocks (headings, lists...) won't get detected if they're not at the start of the line,
only `<p>` tags will be created

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<article>

    ###### Here's the heading

    And some content

</article>
{% endgrid %}
{% endtestExample %}

Without a line break after the HTML opening tag, Markdown won't be detected either

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
<article>
Some **bold text**
###### Here's the heading

And some content, including **bold text**
</article>
{% endgrid %}
{% endtestExample %}

## Surrounding content

It should correctly compile the markdown before
and after the shortcode

### On different line than previous and following content
Content before
{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
{% endtestExample %}
Content after

### Same line before

{% testExample %}Content before
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
{% endtestExample %}
Content after

### Same line after

Content before
{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
{% endtestExample %}Content after

<!-- prettier-ignore-end -->
