---
order: 3
title: Guide for creating charts
---

## Step by step guide

### 1. Gather data, sources and references

Begin by extracting, cleaning, and verifying the data required for your publication. Ensure that the figures are robust, quality-assured, and suitable for public dissemination on GOV.UK. Keep meticulous track of all raw data origins, as you will need to link directly to these sources in the final published output.

### 2. Define the story

Identify the primary user need and the core narrative of your data before designing. Determine exactly what users need to know and understand from the dataset. The visualisation should focus on important messages and avoid overwhelming the audience with secondary or irrelevant information. If the dataset does not have a clear narrative, consider whether a reference table might be more appropriate than a chart.

### 3. Choose a visualisation type

Select the format that best communicates your specific data relationship:

| Relationship  | Example                                        | Recommended chart types                           |
| ------------- | ---------------------------------------------- | ------------------------------------------------- |
| Distribution  | Population by age                              | Bar chart, population pyramid, box plot, dot plot |
| Time          | Price inflation over time                      | Line chart, calendar heat map                     |
| Rank          | Schools ranked by performance                  | Bar chart, lollipop chart, slope chart            |
| Deviation     | Rail company performance compared with target  | Bar chart, dot plot                               |
| Correlation   | Relationship between weight and height         | Scatterplot, line graph                           |
| Magnitude     | Average income by region                       | Bar chart                                         |
| Spatial       | Geographical clusters of notifiable diseases   | Map                                               |
| Part-to-whole | Total economic production by industrial sector | Pie chart, donut chart, tree map, bubble chart    |
| Flow          | Trade between countries                        | Sankey graph                                      |

### 4. Build and cite sources

Construct the chart accurately using appropriate software such as R Studio, Microsoft Excel and/or Adobe Illustrator. You must provide the specific data source for every chart and link directly to it. Avoid vague attributions; place precise source information immediately underneath the figure or table so users can easily access the underlying data.

For example:

{% callout %}
Source: [Childcare and early years survey of parents](https://explore-education-statistics.service.gov.uk/find-statistics/childcare-and-early-years-survey-of-parents/2024) from the Department for Education.
{% endcallout %}

### 5. Simplify and establish a visual hierarchy

- Reduce visual noise to help users immediately grasp the data story.
- Remove default chart clutter, unnecessary borders, and redundant gridlines.
- Right-align numerical values on y-axes and use commas to separate thousands to make figures easier to read.
- Use spacing effectively to group associated data without relying on blank rows or columns that can confuse screen readers.
- Use a single colour where there are no groups to highlight, limiting the number of colours used to make key differences stand out.

### 6. Get feedback

Share the draft visualisation with colleagues such as graphic designers, content designers, and subject matter experts. Test the chart on various devices and screen sizes to ensure it remains legible on mobile browsers. Seek insight to verify that the core message is immediately understandable and that unintended colour associations do not confuse the audience.

### 7. Review for clarity and consistency

- Conduct a final check to ensure the design remains clear and consistent across the publication.
- Assign the same colour to the same variable consistently across a series of charts so users can follow the story.
- Ensure all text labels are horizontal and legible.
- Verify that a comprehensive plain text alternative is provided, explaining all the information within the graphic to support users relying on screen readers.

### 8. Publish your visualisation on GOV.UK

Before finalising your content, conduct a final review against the core publication checklist. Check that the visualisation:

- Meets accessibility standards.
- Has accurate, up to date and clearly labelled sources.
- Is formatted as a Scalable Vector Graphic (SVG).
- Aligns with [GOV.UK Content](https://guidance.publishing.service.gov.uk/) and Brand Guidelines.
- Adopts colours from the appropriate [GOV.UK charts colour palette](/colour/charts/).
