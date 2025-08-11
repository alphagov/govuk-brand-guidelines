---
title: Test page for the `swatchList` shortcode
---

The `swatchList` shortcode displays a list of related colour swatches.

It is primarily intended to be used with the global colour palette, though the colour list can be overridden.

To display a single swatch, use [the `swatch` shortcode](/_tests/swatch/).

## No configuration

By default, the `swatchList` shortcode outputs every entry in the global colour palette.

## Basic configuration

You'll most commonly be using the shortcode with two parameters. These parameters filter the global colour palette to the specified subset of colours.

- `use` – The intended use of the colour. This can be one of 'app', 'print', 'social', or 'web'.
- `group` – The group that the colours belong to. This can be one of:
  - 'blue'
  - 'green'
  - 'teal'
  - 'purple'
  - 'magenta'
  - 'red'
  - 'orange'
  - 'yellow'
  - 'brown' – Only present in the 'web' `use`
  - 'neutral' – Black, white and grey shades

These options can be used individually or in combination.

- `{ use: 'social' }` will return all colours approved for social media use.
- `{ group: 'green' }` will return all greens in the palette, regardless of use.
- `{ use: 'web', group: 'blue' }` returns all blues approved for web use.

{% swatchList { use: 'web', group: 'blue' } %}

## Print colours

`use: 'print'` will automatically switch the list to outputting CMYK and Pantone values.

{% swatchList { use: 'print', group: 'blue' } %}

## Custom palette

A custom `palette` can be specified in place of the global colour palette.

{% set myCustomPalette = [
  { label: "Muted purple", hex: "#786999" },
  { label: "Neon green", hex: "#00FA17" },
  { label: "Not quite black", hex: "#2A2536" }
] %}

{% swatchList { palette: myCustomPalette } %}

Custom palettes can be filtered in the same way as the global colour palette, if the necessary `group` and `uses` parameters have been defined in the custom palette.

## `classes` parameter

{% swatchList { palette: myCustomPalette, classes: "my-funky-swatch-list" } %}
