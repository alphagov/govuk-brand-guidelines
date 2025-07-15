---
order: 1
title: Web
---

## Web palette

### Blues

{%- for c in colours | filterColours("web", "blue") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Greens

{%- for c in colours | filterColours("web", "green") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Teals

{%- for c in colours | filterColours("web", "teal") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Purples

{%- for c in colours | filterColours("web", "purple") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Magentas

{%- for c in colours | filterColours("web", "magenta") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Reds

{%- for c in colours | filterColours("web", "red") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Oranges

{%- for c in colours | filterColours("web", "orange") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Yellows

{%- for c in colours | filterColours("web", "yellow") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Browns

{%- for c in colours | filterColours("web", "brown") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Neutrals

{%- for c in colours | filterColours("web", "neutral") %}
{% swatch { hex: c.hex, label: c.label } %}
{%- endfor %}

### Web functional colours
