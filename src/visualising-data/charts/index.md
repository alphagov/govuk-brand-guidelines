---
order: 1
title: Charts
---

## Elements of a chart

TODO: add image

Charts come in a variety of forms, but most share the same anatomy. Understanding the basic building blocks behind a chart can help when creating one.

### Titles

All charts need at least one title, but it is considered best practice to give them two. These should be: a headline title and a formal statistical subtitle.

Titles should be:

- front-loaded
- in the active voice
- in sentence case
- describing the main trend
- as concise as possible

Subtitles should include the:

- statistical measure
- geographic coverage
- time-period

### Axis

Axes show what’s being measured in a chart like time, quantity, or categories. Clear labels help users understand the data quickly.

Use axis titles to show units, but avoid repeating details from the chart title, subtitle, or annotations.

For percentages or money, include symbols like % or £ in the axis labels. For other units, place them in the axis title or subtitle—not the labels.

Category names should be short and clear. Simplify long labels to make charts easier to read and more accessible.

### Annotations

Keep annotations concise. Limit them to around 50 characters (10 to 12 words) and a single sentence.

Place annotations as close as possible to the part of the chart they relate to.

There should be white space between your annotation text and other text or parts of your chart. Make sure your annotation text does not overlap with other chart elements.

Make sure any essential information you include in annotations is also included in the main text or footnotes.

### Sources/Footnotes

You should give the specific data source for each chart and link directly to it if you can.

It is best practice to provide source information in the following format: [publication, survey or other source of data] from the [organisation]

Footnotes should only be used to provide essential contextual information for a specific chart or table. They should be as clear and concise as possible.

Using too many footnotes can interrupt the flow of the publication.

## Chart palette

In some charts, colours help differentiate between categories of data, such as in line charts or stacked bar charts. Some types of visualisations use colour to represent numerical values, such as heatmaps.

{% set chartExtraColours = [
  { label: "Primary Blue", hex: "#1D70B8", group: "categorical" },
  { label: "Blue Shade 50%", hex: "#0F385C", group: "categorical" },
  { label: "Primary Magenta", hex: "#CA357C", group: "categorical" },
  { label: "Purple Tint 25%", hex: "#7F65B7", group: "categorical" },
  { label: "Teal Tint 25%", hex: "#50A1A5", group: "categorical" },
  { label: "Orange Tint 25%", hex: "#F7996A", group: "categorical" },
  { label: "Black Tint 80%", hex: "#CECECE", group: "line" },
  { label: "Black", hex: "#0B0C0C", group: "label" },
  { label: "Blue Tint 95%", hex: "#F4F8FB", group: "tint" },
  { label: "Magenta Tint 95%", hex: "#FCF5F8", group: "tint" },
  { label: "Red Tint 95%", hex: "#FCF5F5", group: "tint" },
  { label: "Green Tint 95%", hex: "#F3F9F7", group: "tint" },
  { label: "Purple Tint 95%", hex: "#F6F5FA", group: "tint" },
  { label: "Teal Tint 95%", hex: "#F3F9F9", group: "tint" },
  { label: "Orange Tint 95%", hex: "#FEF8F5", group: "tint" },
  { label: "Accent Blue", hex: "#11E0F1", group: "accent" },
  { label: "Accent Magenta", hex: "#FF52EE", group: "accent" },
  { label: "Accent Red", hex: "#FF5E5E", group: "accent" },
  { label: "Accent Green", hex: "#66F39E", group: "accent" },
  { label: "Accent Purple", hex: "#BA4AFF", group: "accent" },
  { label: "Accent Teal", hex: "#00FFE0", group: "accent" },
  { label: "Accent Orange", hex: "#FFAF4A", group: "accent" }
] %}

### Categorical palette

{% swatchList { palette: chartExtraColours, group: "categorical" } %}

### Axes & lines

{% swatchList { palette: chartExtraColours, group: "line" } %}

### Labels

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

- Ensure sufficient contrast with the background and overlapping text.
- Avoid using colour as the only visual means of conveying information.
- Focus on applying colour that enhances the clarity of the data.
- Limit colours to avoid confusion.

{% set chartCategoryColours = [
  { label: "Primary Blue", hex: "#1D70B8", group: "single" },
  { label: "Black Tint 80%", hex: "#CECECE", group: "single" },
  { label: "Black", hex: "#0B0C0C", group: "single" },
  { label: "Blue Shade 50%", hex: "#0F385C", group: "multiple" },
  { label: "Teal Tint 25%", hex: "#50A1A5", group: "multiple" },
  { label: "Primary Magenta", hex: "#CA357C", group: "multiple" },
  { label: "Orange Tint 25%", hex: "#F7996A", group: "multiple" },
  { label: "Black Tint 80%", hex: "#CECECE", group: "multiple" },
  { label: "Black", hex: "#0B0C0C", group: "multiple" },
  { label: "Primary Red", hex: "#CA3535", group: "divergent" },
  { label: "Red Tint 50%", hex: "#E59A9A", group: "divergent" },
  { label: "Black Tint 80%", hex: "#CECECE", group: "divergent" },
  { label: "Blue Tint 50%", hex: "#8EB8DC", group: "divergent" },
  { label: "Primary Blue", hex: "#1D70B8", group: "divergent" },
  { label: "Black", hex: "#0B0C0C", group: "divergent" }
] %}

### Single category

{% swatchList { palette: chartCategoryColours, group: "single" } %}

TODO: add image

### Multiple categories

{% swatchList { palette: chartCategoryColours, group: "multiple" } %}

TODO: add image

### Divergent categories

{% swatchList { palette: chartCategoryColours, group: "divergent" } %}

TODO: add image

## Using charts within social media

On social, charts can leverage the full colour palette. For example, accent colours can be used to highlight key data points and positive messages. We also use larger and bolder graphical elements to help engage and inform audiences.

TODO: 3 images

Indicative examples for illustrative purposes only.
