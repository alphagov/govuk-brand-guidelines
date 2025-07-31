---
title: Test page for the `grid` shortcode
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

## No configuration

1 column across all breakpoints.

{% grid %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

## `columns` parameter

### Mobile configuration only

2 columns on mobile, which is inherited by tablet and desktop.

{% grid { columns: { mobile: 2 } } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

#### Alternate syntax

Number of columns passed as a number instead of an object.

2 columns on mobile, which is inherited by tablet and desktop.

{% grid { columns: 2 } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

### Tablet configuration only

1 column on mobile. 2 columns on tablet, which is inherited by desktop.

{% grid { columns: { tablet: 2 } } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

### Desktop configuration only

1 column on mobile and tablet. 2 columns on desktop.

{% grid { columns: { desktop: 2 } } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

### Hybrid configuration

2 columns on mobile and 4 columns on desktop. Tablet inherits from mobile.

{% grid { columns: { mobile: 2, desktop: 4 } } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

### All sizes configured

2 columns on mobile, 3 on tablet, 4 on desktop.

{% grid { columns: { mobile: 2, tablet: 3, desktop: 4 } } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}

## `classes` parameter

{% grid { columns: 2, classes: "page-custom-grid" } %}
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
{% endgrid %}
