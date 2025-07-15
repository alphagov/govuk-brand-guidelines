---
order: 1
title: Web
---

## Web palette

Use these colours for supporting materials like illustrations, or in custom components where appropriate.

To reference colours from the palette directly you should use the `govuk-colour` function. For example, colour: `govuk-colour("blue")`.

Avoid using the palette colours if there is a Sass variable that is designed for your context. For example, if you are styling the error state of a component you should use the `$govuk-error-colour` Sass variable rather than `govuk-colour("red")`.

<!-- It was easier to copy this order, but we'd probably want to bunch them per colour -->

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

If you are using GOV.UK Frontend or the GOV.UK Prototype Kit, use the [Sass variables](https://frontend.design-system.service.gov.uk/sass-api-reference/#colours) provided rather than copying the hexadecimal (hex) colour values. For example, use `$govuk-brand-colour` rather than `#1d70b8`.

This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they’re designed for. In all other cases, you should reference the web primary directly. For example, if you wanted to use primary red, you should use `govuk-colour("primary-red")` rather than `$govuk-error-colour`.

#### Text

$govuk-text-colour
Black
RGB 11 12 12
#0B0C0C

$govuk-secondary-text-colour
Black Tint 25%
RGB 72 73 73
#484949

#### Links

$govuk-link-colour
Primary Blue
RGB 29 112 184
#1D70B8

$govuk-link-visited-colour
Primary Purple
RGB 84 49 159
#54319F

$govuk-link-hover-colour
Blue Shade 50%
RGB 15 56 92
#0F385C

$govuk-link-active-colour
Black
RGB 11 12 12
#0B0C0C

#### Border

$govuk-border-colour
Black Tint 80%
RGB 206 206 206
#CECECE

$govuk-input-border-colour
Black
RGB 11 12 12
#0B0C0C

#### Focus state

$govuk-focus-colour
Primary Yellow
RGB 255 221 0
#FFDD00

Only use this colour to indicate which element is focused on. For example, when a user tabs to an element with their keyboard.

$govuk-focus-text-colour
Black
RGB 11 12 12
#0B0C0C

#### Error state

$govuk-error-colour
Primary Red
RGB 202 53 53
#CA3535

Use for error messages

#### Success state

$govuk-success-colour
Primary Green
RGB 17 135 90
#11875A

Use for success messages

#### Brand colour

$govuk-brand-colour
Primary Blue
RGB 29 112 184
#1D70B8

### Web palette example

Indicative examples for illustrative purposes only.

TODO: missing image
