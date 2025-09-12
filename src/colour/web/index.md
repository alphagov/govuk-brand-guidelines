---
order: 1
title: Web
---

## Web palette

Use these colours for supporting materials like illustrations, or in custom components where appropriate.

To reference colours from the palette directly you should use the `govuk-colour` function. For example, colour: `govuk-colour("blue")`.

Avoid using the palette colours if there is a Sass variable that is designed for your context. For example, if you are styling the error state of a component you should use the `$govuk-error-colour` Sass variable rather than `govuk-colour("red")`.

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

### Web functional colours

If you are using GOV.UK Frontend or the GOV.UK Prototype Kit, use the [Sass variables](https://frontend.design-system.service.gov.uk/sass-api-reference/#colours) provided rather than copying the hexadecimal (hex) colour values. For example, use `$govuk-brand-colour` rather than `#1d70b8`.

This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they’re designed for. In all other cases, you should reference the web primary directly. For example, if you wanted to use primary red, you should use `govuk-colour("primary-red")` rather than `$govuk-error-colour`.

{% set webFunctionalColours = [
  { label: "$govuk-text-colour", hex: "#0B0C0C", group: "text" },
  { label: "$govuk-secondary-text-colour", hex: "#484949", group: "text" },
  { label: "$govuk-link-colour", hex: "#1D70B8", group: "links" },
  { label: "$govuk-link-visited-colour", hex: "#54319F", group: "links" },
  { label: "$govuk-link-hover-colour", hex: "#0F385C", group: "links" },
  { label: "$govuk-link-active-colour", hex: "#0B0C0C", group: "links" },
  { label: "$govuk-border-colour", hex: "#CECECE", group: "border" },
  { label: "$govuk-input-border-colour", hex: "#0B0C0C", group: "border" }
] %}

#### Text

{% swatchList { palette: webFunctionalColours, group: "text" } %}

#### Links

{% swatchList { palette: webFunctionalColours, group: "links" } %}

#### Border

{% swatchList { palette: webFunctionalColours, group: "border" } %}

#### Focus state

{% swatch { label: "$govuk-focus-colour", hex: "#FFDD00" } %}

Only use this colour to indicate which element is focused on. For example, when a user tabs to an element with their keyboard.

{% swatch { label: "$govuk-focus-text-colour", hex: "#0B0C0C" } %}

#### Error state

{% swatch { label: "$govuk-error-colour", hex: "#CA3535" } %}

Use for error messages.

#### Success state.

{% swatch { label: "$govuk-success-colour", hex: "#11875A" } %}

Use for success messages.

#### Brand colour

{% swatch { label: "$govuk-brand-colour", hex: "#1D70B8" } %}

### Web palette example

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

![A screenshot of the GOV.UK homepage on desktop, showing web palette colours such as Primary blue for the header and links and Primary purple for visited links.](./example.png)
