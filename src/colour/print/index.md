---
order: 4
title: Print
---

## Print palette

Use these colours for printed materials like documents, or in custom formats where appropriate.

### Blues

{%- for c in colours | filterColours("print", "blue") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Greens

{%- for c in colours | filterColours("print", "green") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Teals

{%- for c in colours | filterColours("print", "teal") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Purples

{%- for c in colours | filterColours("print", "purple") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Magentas

{%- for c in colours | filterColours("print", "magenta") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Reds

{%- for c in colours | filterColours("print", "red") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Oranges

{%- for c in colours | filterColours("print", "orange") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Yellows

{%- for c in colours | filterColours("print", "yellow") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}

### Neutrals

{%- for c in colours | filterColours("print", "neutral") %}
{% swatch { hex: c.hex, cmyk: c.cmyk, pantone: c.pantone, label: c.label, print: true } %}
{%- endfor %}
