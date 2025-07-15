---
order: 2
title: App
---

## App palette

The app palette contains all primary colours, tints, shades and accents. Guidance outlined within the overview section should be followed to ensure brand coherence across channels.

### Blues

{%- for c in colours | filterColours("app", "blue") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Greens

{%- for c in colours | filterColours("app", "green") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Teals

{%- for c in colours | filterColours("app", "teal") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Purples

{%- for c in colours | filterColours("app", "purple") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Magentas

{%- for c in colours | filterColours("app", "magenta") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Reds

{%- for c in colours | filterColours("app", "red") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Oranges

{%- for c in colours | filterColours("app", "orange") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Yellows

{%- for c in colours | filterColours("app", "yellow") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Neutrals

{%- for c in colours | filterColours("app", "neutral") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

## App header

For coherence with web, the app also uses the blue header throughout key screens. This also adds visual hierarchy and aids brand recognition.

### Mobile web header

![TODO](./mobile-header.png)

### App header

![TODO](./app-header1.png) ![TODO](./app-header2.png) ![TODO](./app-header3.png) ![TODO](./app-header4.png)

Indicative examples for illustrative purposes only.

## Examples

Within app we lead with the Primary Blue and Accent Teal, from splash screen to core components.

Where appropriate we can introduce harmonious colours to aid with structure and hierarchy of content – such as tints within cards or contextual colours that enhances navigation.

Colour should be applied in a way that does not add visual complexity or reduce accessibility.

![TODO](./app-homepage.png) ![TODO](./app-settings.png)
