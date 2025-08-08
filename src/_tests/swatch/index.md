---
title: Test page for the `swatch` shortcode
---

The `swatch` shortcode displays a single colour swatch.

You may be looking for [the `swatchList` shortcode](/_tests/swatch/list/).

## Basic configuration

`label` and `hex` attributes are always required.

RGB values are derived from the `hex` and don't need to be provided separately, as the two formats can be converted losslessly.

{% swatch {
  label: "Muted purple",
  hex: "#786999"
} %}

## Print values

For print values, additionally define `cmyk` and `pantone` properties, and add `print: true`.

`cmyk` is provided as an array of percentage values between 0 and 100. For example, `cmyk: [22, 31, 0, 40]`

`hex` must still be defined for print values, as it is used to generate the swatch preview.

{% swatch {
  label: "Muted purple",
  hex: "#786999",
  cmyk: [22, 31, 0, 40],
  pantone: "667 C",
  print: true
} %}

## `classes` parameter

{% swatch {
  label: "Muted purple",
  hex: "#786999",
  classes: "page-my-custom-class"
} %}

## `isInSwatchList` parameter

This parameter changes which element is used for the swatch. It is intended for internal use, as part of [swatch lists](/_tests/swatch/list/).
