---
order: 7
title: File formatting and exporting
---

Assets require specific technical handling before they are ready for production. To ensure maximum performance and code efficiency, please follow these guidelines.

Depending on the use case, you may need to export assets as PNGs or SVGs directly from Figma. Both formats require post-export optimisation to avoid negative impacts on the app’s performance.

## Preparing assets for delivery

We recommend using a single SVG whenever possible and following these 7 steps in order:

{% grid { columns: { mobile: 1, desktop: 2 } } %}

{% gridCell { classes: "app-border app-border--top" } %}

### 1. Minimise vertices

Use the pen tool in Illustrator or another vector and remove as many anchor points as possible, without compromising the desired shape.

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Icon artwork showing an excessive number of anchor points and control handles, demonstrating the importance of simplifying vector paths while preserving the intended shape.](./icons-draw-pen.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 2. Flatten strokes and correct fill errors

Make sure everything is flattened, and in one single vector. Change the fill rule to Non-Zero Winding Rule in the attributes panel of Ai (Adobe Illustrator) to avoid the even/odd error. This is the most reliable way to ensure shapes render correctly in all browsers and apps.

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Comparison of a single flattened vector shape and a version made from multiple overlapping shapes, illustrating how icons should be merged into one continuous vector for reliable rendering across platforms.](./icons-flatten-lines.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 3. Optimise the vector

Run the file through an optimiser like [SVGOMG](https://jakearchibald.github.io/svgomg/). Adjust the settings to remove redundant data while ensuring the shapes do not become corrupted.

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![SVG file icon with a download arrow and optimisation controls, illustrating the process of reducing unnecessary SVG data while preserving the appearance and integrity of the icon.](./svg-download-settings.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 4. Check code hygiene

Open your SVG in a text editor. Ensure the code is clean and using as few characters as possible.

{% endgridCell %}

{% gridCell { classes: 'svg-snippet' } %}
<pre><code>&lt;svg
 width="55"
 height="55"
 viewBox="0 0"</code></pre>
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 5. Provide accessible labels

When handing assets to engineering, always provide: the semantic role (decorative or interactive), the exact screen label to use for the aria-label, and the user-facing context or action the icon represents. Never rely on the file name, labels should describe the action and context from the user's perspective, for example, “Add bank account”.

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Bank account icon with an add badge alongside an ARIA label example reading “add bank account” demonstrating how clear text labels help screen reader users understand the purpose of an icon-based action.](./icons-aria-label.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 6. Align to naming convention

When delivering assets to engineering, using this strict naming convention ensures seamless integration into the codebase, allowing developers to instantly identify, automate, and implement icons without friction.

gov\_uk\[team\]\_ic<wbr>\[type of asset\]\_\[description\]<wbr>\_\[tags\]\_\[style\]

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![](./icons-naming-convention.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### 7. PNGs

If you require a PNG, you may need to export at various sizes. Always make sure you have run the exported files through a standard image compressor.

{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![](./icons-png-format.svg)
{% endgridCell %}

{% endgrid %}
