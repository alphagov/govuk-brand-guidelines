---
title: Whitespace handling within the `grid` shortcode
---

<!-- prettier-ignore-start -->
<!-- This file has a few tests about managing whitespace so we need it to stay as authored -->
<style>
    .app-grid {
        outline: dashed 2px grey;

        > * {
            outline: solid
        }
    }
</style>

## `content`

### Single line

{% grid %}Hello{% endgrid %}

### Next line both ends

{% grid %}
Grid content
{% endgrid %}

### Line break

{% grid %}

Grid content

{% endgrid %}

### Intended

{% grid %}
    Grid content
{% endgrid %}

### Same line at start
{% grid %}Grid content
{% endgrid %}

### Next line at start
{% grid %}
Grid content{% endgrid %}

### Markdown

#### Next line both ends

{% grid %}
A paragraph introducing:

- a list
{% endgrid %}

#### Line break at start, line break at end

It shouldn't have extra `<p>` from markdown transformation

{% grid %}

A paragraph introducing:

- a list

{% endgrid %}

#### Indented

It shouldn't be turned into a Markdown code block

{% grid %}
    A paragraph introducing:

    - a list
{% endgrid %}

#### Same line at start

{% grid %}A paragraph introducing:

    - a list
{% endgrid %}

#### Same line at end

{% grid %}
    A paragraph introducing:

    - a list{% endgrid %}

### HTML

#### Next line both ends

{% grid %}
<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>
{% endgrid %}

#### Line break at start, line break at end

It shouldn't have extra `<p>` from Markdown transformation

{% grid %}

<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>

{% endgrid %}

#### Indented

It shouldn't be turned into a Markdown code block

{% grid %}

<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>

{% endgrid %}

#### Same line at start

{% grid %}<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>
{% endgrid %}

#### Same line at end

{% grid %}
<p class="govuk-body">A paragraph introducing:</p>

<ul class="govuk-list">
    <li>a list
</ul>{% endgrid %}

#### Pre-formatted text

{% grid %}
<pre>
Hello,
    How does this look?
  Some space indentation as well
</pre>
{% endgrid %}

#### Mixed with markdown

##### Markdown first

{% grid %}
- a list
- with two items

<small>Followed by some HTML</small>
{% endgrid %}

##### Markdown last

{% grid %}
<small>Some HTML...</small>

- a list
- with two items
{% endgrid %}

##### Markdown around

{% grid %}
1. One
2. Two

<small>Some HTML...</small>

- a list
- with two items
{% endgrid %}

##### HTML around

{% grid %}
<small>Some initial HTML...</small>

- a list
- another list

<small>HTML again</small>
{% endgrid %}

##### Markdown inside

Like with any nesting of Markdown inside HTML,
the markdown blocks need to be at the start of the line

{% grid %}
<article>

###### Here's the heading

And some content

</article>
{% endgrid %}

Markdown blocks (headings, lists...) won't get detected if they're not at the start of the line,
only `<p>` tags will be created

{% grid %}
<article>

    ###### Here's the heading

    And some content

</article>
{% endgrid %}

Without a line break after the HTML opening tag, Markdown won't be detected either

{% grid %}
<article>
Some **bold text**
###### Here's the heading

And some content, including **bold text**
</article>
{% endgrid %}

## Surrounding content

It should correctly compile the markdown before
and after the shortcode

### On different line than previous and following content
Content before
{% grid %}
Grid content
{% endgrid %}
Content after

### Same line before

Content before{% grid %}
Grid content
{% endgrid %}
Content after

### Same line after

Content before
{% grid %}
Grid content
{% endgrid %}Content after

<!-- prettier-ignore-end -->
