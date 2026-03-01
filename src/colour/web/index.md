---
order: 1
title: Web
sitemapTitle: Web colour
---

## Web palette

Use these colours for supporting elements in your service like illustrations, or in custom components where appropriate.

If you're using GOV.UK Frontend or the GOV.UK Prototype Kit, you can access the full web palette, and all its available colours, using the `govuk-colour` function.

By default, the function will return the ‘primary’ variant of each colour. For example: `govuk-colour("blue")` will return ‘Primary blue’ `#1d70b8`.

Access tints and shades of colour groups using the `$variant` option.

For example:

- `govuk-colour("red", $variant: "tint-25")` will return ‘Red tint 25%’, which is a variant of red with a tint of 25%
- `govuk-colour("blue", $variant: "shade-50")` will return ‘Blue shade 50%’, which is a variant of blue with a shade of 50%

Most colours include these variants:

- tints at 25% (`tint-25`), 50% (`tint-50`), 80% (`tint-80`) and 95% (tint-95)
- shades at 25% (`shade-25`) and 50% (`shade-50`)

Black includes Primary black, with tints to show greys. White has no variants.

The web palette has:

- [blues](#blues)
- [greens](#greens)
- [teals](#teals)
- [purples](#purples)
- [magentas](#magentas)
- [reds](#reds)
- [oranges](#oranges)
- [yellows](#yellows)
- [browns](#browns)
- [neutrals](#neutrals)
- [web functional colours](#web-functional-colours)

### Blues

{% swatchList { use: "web", group: "blue" } %}

### Greens

{% swatchList { use: "web", group: "green" } %}

### Teals

{% swatchList { use: "web", group: "teal" } %}

### Purples

{% swatchList { use: "web", group: "purple" } %}

### Magentas

{% swatchList { use: "web", group: "magenta" } %}

### Reds

{% swatchList { use: "web", group: "red" } %}

### Oranges

{% swatchList { use: "web", group: "orange" } %}

### Yellows

{% swatchList { use: "web", group: "yellow" } %}

### Browns

{% swatchList { use: "web", group: "brown" } %}

### Neutrals

{% swatchList { use: "web", group: "neutral" } %}

## Functional colours

The GOV.UK Design System has a set of functional colours for essential page elements. These help apply colours across the Design System in a way that makes interactions predictable and consistent to users.

If you're using GOV.UK Frontend or the GOV.UK Prototype Kit, use the `govuk-functional-colour` Sass function. The colours available using this function are based on specific purposes and contexts, so that function will automatically assign appropriate colours.

Do not copy the specific hexadecimal (hex) colour values. For example, use `govuk-functional-colour("brand")` rather than `#1d70b8`.

This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they’re designed for. In all other cases, you should reference the [GOV.UK web palette](https://design-system.service.gov.uk/styles/colour/#govuk-web-palette) directly. For example, if you wanted to use red, you should use `govuk-colour("red")` rather than `govuk-functional-colour("error")`.

{% set webFunctionalColours = [
  { label: "text", hex: "#0B0C0C", group: "text" },
  { label: "secondary-text", hex: "#484949", group: "text" },
  { label: "link", hex: "#1A65A6", group: "links" },
  { label: "link-hover", hex: "#0F385C", group: "links" },
  { label: "link-visited", hex: "#54319F", group: "links" },
  { label: "link-active", hex: "#0B0C0C", group: "links" },
  { label: "border", hex: "#CECECE", group: "border" },
  { label: "input-border", hex: "#0B0C0C", group: "border" },
  { label: "template-background", hex: "#F4F8FB", group: "background" },
  { label: "body-background", hex: "#FFFFFF", group: "background" },
  { label: "focus", hex: "#FFDD00", group: "focus" },
  { label: "focus-text", hex: "#0B0C0C", group: "focus" },
  { label: "surface-background", hex: "#F4F8FB", group: "surface" },
  { label: "surface-text", hex: "#0B0C0C", group: "surface" },
  { label: "surface-border", hex: "#8EB8DC", group: "surface" }
] %}

#### Text

{% swatchList { palette: webFunctionalColours, group: "text" } %}

#### Links

{% swatchList { palette: webFunctionalColours, group: "links" } %}

#### Border

{% swatchList { palette: webFunctionalColours, group: "border" } %}

#### Background

Use the `template-background` colour if you need to match the colour of the `<html>` element. Use the `body-background` colour if you need to match the colour of the `<body>` element.

{% swatchList { palette: webFunctionalColours, group: "background" } %}

#### Focus state

Only use the `focus` colour to indicate which element is focused on. For example, when a user tabs to an element with their keyboard.

{% swatchList { palette: webFunctionalColours, group: "focus" } %}

#### Error state

Use the `error` colour to show error messages.

{% swatch { label: "error", hex: "#CA3535" } %}

#### Success state

Use the `success` colour to show success messages.

{% swatch { label: "success", hex: "#0F7A52" } %}

#### Hover state

Use the `hover` colour to show input hover states.

{% swatch { label: "hover", hex: "#CECECE" } %}

#### Brand colour

{% swatch { label: "brand", hex: "#1D70B8" } %}

#### Surface

{% swatchList { palette: webFunctionalColours, group: "surface" } %}

### Web palette example

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

![A screenshot of the GOV.UK homepage on desktop, showing web palette colours such as Primary blue for the header and links and Primary purple for visited links.](./example.png)
