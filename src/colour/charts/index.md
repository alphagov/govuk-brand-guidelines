---
order: 5
title: Charts
sitemapTitle: Charts colour
---

## Chart palette

In some charts, colours help differentiate between categories of data, such as in line charts or stacked bar charts. Some types of visualisations use colour to represent numerical values, such as heatmaps.

The chart palette has:

- [categorical colours](#categorical-palette)
- [blues](#blues)
- [magentas](#magentas)
- [reds](#reds)
- [greens](#greens)
- [purples](#purples)
- [teals](#teals)
- [oranges](#oranges)
- [neutrals](#neutrals)
- [additional colours](#additional-palette-for-illustrative-infographics)

{% set chartExtraColours = [
  { label: "Primary blue", hex: "#1D70B8", group: "categorical" },
  { label: "Blue shade 50%", hex: "#0F385C", group: "categorical" },
  { label: "Primary magenta", hex: "#CA357C", group: "categorical" },
  { label: "Purple tint 25%", hex: "#7F65B7", group: "categorical" },
  { label: "Teal tint 25%", hex: "#50A1A5", group: "categorical" },
  { label: "Orange tint 25%", hex: "#F7996A", group: "categorical" },
  { label: "Black tint 80%", hex: "#CECECE", group: "line" },
  { label: "Black", hex: "#0B0C0C", group: "label" },
  { label: "Blue tint 95%", hex: "#F4F8FB", group: "tint" },
  { label: "Magenta tint 95%", hex: "#FCF5F8", group: "tint" },
  { label: "Red tint 95%", hex: "#FCF5F5", group: "tint" },
  { label: "Green tint 95%", hex: "#F3F8F6", group: "tint" },
  { label: "Purple tint 95%", hex: "#F6F5FA", group: "tint" },
  { label: "Teal tint 95%", hex: "#F3F9F9", group: "tint" },
  { label: "Orange tint 95%", hex: "#FEF8F5", group: "tint" },
  { label: "Accent blue", hex: "#11E0F1", group: "accent" },
  { label: "Accent magenta", hex: "#FF52EE", group: "accent" },
  { label: "Accent red", hex: "#FF5E5E", group: "accent" },
  { label: "Accent green", hex: "#66F39E", group: "accent" },
  { label: "Accent purple", hex: "#BA4AFF", group: "accent" },
  { label: "Accent teal", hex: "#00FFE0", group: "accent" },
  { label: "Accent orange", hex: "#FFAF4A", group: "accent" }
] %}

### Categorical palette

{% swatchList { palette: chartExtraColours, group: "categorical" } %}

#### Axes & lines

{% swatchList { palette: chartExtraColours, group: "line" } %}

#### Labels

{% swatchList { palette: chartExtraColours, group: "label" } %}

### Sequential and divergent scale palette

Avoid using colour alone to visualise insights. Use a maximum of two scales in a single chart.

#### Blues

{% swatchList { use: "chart", group: "blue" } %}

#### Magentas

{% swatchList { use: "chart", group: "magenta" } %}

#### Reds

{% swatchList { use: "chart", group: "red" } %}

#### Greens

{% swatchList { use: "chart", group: "green" } %}

#### Purples

{% swatchList { use: "chart", group: "purple" } %}

#### Teals

{% swatchList { use: "chart", group: "teal" } %}

#### Oranges

{% swatchList { use: "chart", group: "orange" } %}

#### Neutrals

{% swatchList { use: "chart", group: "neutral" } %}

### Additional palette for illustrative infographics

Must only be used in conjunction with backgrounds using 25% and 50% shades.

{% swatchList { palette: chartExtraColours, group: "tint" } %}
{% swatchList { palette: chartExtraColours, group: "accent" } %}

## Using colour in charts

When choosing colours for your data visualisation:

- ensure sufficient contrast with the background and overlapping text
- avoid using colour as the only visual means of conveying information
- focus on applying colour that enhances the clarity of the data
- limit colours to avoid confusion

{% set chartCategoryColours = [
  { label: "Primary blue", hex: "#1D70B8", group: "single" },
  { label: "Black tint 80%", hex: "#CECECE", group: "single" },
  { label: "Black", hex: "#0B0C0C", group: "single" },
  { label: "Blue shade 50%", hex: "#0F385C", group: "multiple" },
  { label: "Teal tint 25%", hex: "#50A1A5", group: "multiple" },
  { label: "Primary magenta", hex: "#CA357C", group: "multiple" },
  { label: "Orange tint 25%", hex: "#F7996A", group: "multiple" },
  { label: "Black tint 80%", hex: "#CECECE", group: "multiple" },
  { label: "Black", hex: "#0B0C0C", group: "multiple" },
  { label: "Primary red", hex: "#CA3535", group: "divergent" },
  { label: "Red tint 50%", hex: "#E59A9A", group: "divergent" },
  { label: "Black tint 80%", hex: "#CECECE", group: "divergent" },
  { label: "Blue tint 50%", hex: "#8EB8DC", group: "divergent" },
  { label: "Primary blue", hex: "#1D70B8", group: "divergent" },
  { label: "Black", hex: "#0B0C0C", group: "divergent" }
] %}

{% grid { columns: { mobile: 1, desktop: 3 } } %}

{% gridCell {classes: "app-border app-border--top"} %}

### Single category

{% endgridCell %}
{% gridCell {span: {desktop: 2, tablet: 1, mobile: 1}, classes: "app-border"} %}

![Example of a bar chart with blue bars over grey lines](./example-single-category.svg)

{% endgridCell %}
{% endgrid %}

{% swatchList { palette: chartCategoryColours, group: "single", compact: true } %}

{% grid { columns: { mobile: 1, desktop: 3 } } %}

{% gridCell {classes: "app-border app-border--top"} %}

### Multiple categories

{% endgridCell %}
{% gridCell {span: {desktop: 2, tablet: 1, mobile: 1}, classes: "app-border"} %}

![Example of a line chart with differently coloured lines over a grid and a legend on top](./example-multiple-categories.svg)

{% endgridCell %}
{% endgrid %}

{% swatchList { palette: chartCategoryColours, group: "multiple", compact: true } %}

{% grid { columns: { mobile: 1, desktop: 3 } } %}

{% gridCell {classes: "app-border app-border--top"} %}

### Divergent categories

{% endgridCell %}
{% gridCell {span: {desktop: 2, tablet: 1, mobile: 1}, classes: "app-border"} %}

![Example of a stacked bar chart with four differently coloured stacks and a legend on top](./example-divergent-categories.svg)

{% endgridCell %}
{% endgrid %}

{% swatchList { palette: chartCategoryColours, group: "divergent", compact: true } %}

## Using charts within social media

On social, charts can leverage the full colour palette. For example, accent colours can be used to highlight key data points and positive messages. We also use larger and bolder graphical elements to help engage and inform audiences.

![Series of mock-ups of posts from GOV.UK on Instagram showing differently sized circles with numbers](./social-chart.png)

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}
