---
order: 2
title: App
---

## App palette

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

## Examples
