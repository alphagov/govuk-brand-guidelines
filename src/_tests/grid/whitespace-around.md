---
title: Whitespace handling around the `grid` shortcode
---

{% css %}

<style>
    .app-grid {
        outline: dashed 2px grey;
    
        > * {
            outline: solid
        }
    }
</style>

{% endcss %}

<!-- prettier-ignore-start -->
<!-- This file has a few tests about managing whitespace so we need it to stay as authored -->

## Surrounding content

It should correctly compile the markdown before and after the shortcode

### Markdown

#### On different line than previous and following content

Content before
{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
Content after

### Within markdown block

- First item
    {% grid {indent: 2, classes: 'test-outline-children test-outline--loose'} %}
    Grid content
    {% endgrid %}
- Second item

#### Line break before and after

Content before

{% grid {classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}

Content after


#### Same line before

Content before{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
Content after

#### Same line after

Content before
{% grid %}
Grid content
{% endgrid %}Content after


### HTML

#### Tags before and after

<p class="govuk-body">Content before</p>
{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
<p class="govuk-body">Content after</p>

#### Tags before and after, with line breaks

Shouldn't add extra paragraphs when Markdown is processed

<p class="govuk-body">Content before</p>

{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}

<p class="govuk-body">Content after</p>

#### At start of tag

<article>
{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
</article>

#### With surrounding text inside tag

<article>
Content before
{% grid {insideHTML: true, classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
Content after
</article>

### With surrounding inline HTML elements inside tag

<article>
<span>Content before</span>
{% grid {insideHTML: true, classes: 'test-outline-children test-outline--loose'} %}
Grid content
{% endgrid %}
<span>Content after</span>
</article>

### With surrounding block HTML elements inside tag

<article>
<ul><li>Content before</ul>
{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
<ul><li>Content after</ul>
</article>

### Markdown before, HTML after

- A list before
{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
<ul><li>Content after</ul>

### HTML before, Markdown after

<ul><li>Content before</ul>
{% grid {classes: 'test-outline-children test-outline--loose'}%}
Grid content
{% endgrid %}
- A list after


<!-- prettier-ignore-end -->
