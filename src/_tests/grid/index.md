---
title: Test page for the `grid` shortcode
---

## No configuration

1 column across all breakpoints.

{% testExample %}
{% grid {classes: 'test-outline-children test-outline--loose'} %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

## `columns` parameter

### Mobile configuration only

2 columns on mobile, which is inherited by tablet and desktop.

{% testExample %}
{% grid { columns: { mobile: 2 }, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

#### Alternate syntax

Number of columns passed as a number instead of an object.

2 columns on mobile, which is inherited by tablet and desktop.

{% testExample %}
{% grid { columns: 2, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

### Tablet configuration only

1 column on mobile. 2 columns on tablet, which is inherited by desktop.

{% testExample %}
{% grid { columns: { tablet: 2 }, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

### Desktop configuration only

1 column on mobile and tablet. 2 columns on desktop.

{% testExample %}
{% grid { columns: { desktop: 2 }, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

### Hybrid configuration

2 columns on mobile and 4 columns on desktop. Tablet inherits from mobile.

{% testExample %}
{% grid { columns: { mobile: 2, desktop: 4 }, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}

### All sizes configured

2 columns on mobile, 3 on tablet, 4 on desktop.

{% testExample %}
{% grid { columns: { mobile: 2, tablet: 3, desktop: 4 }, classes: 'test-outline-children test-outline--loose' } %}

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
{% endtestExample %}
