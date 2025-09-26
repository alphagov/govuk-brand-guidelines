---
order: 3
title: Social
---

## Social palette

The social palette requires moments of increased brand expression and flex and therefore contains all primary colours, tints, shades and accents.

[Follow the overall colour guidance](/colour/govuk-blue/) to ensure brand coherence across channels.

The social palette has:

- [blues](#blues)
- [greens](#greens)
- [teals](#teals)
- [purples](#purples)
- [magentas](#magentas)
- [reds](#reds)
- [oranges](#oranges)
- [yellows](#yellows)
- [neutrals](#neutrals)

### Blues

{% swatchList { use: "social", group: "blue" } %}

### Greens

{% swatchList { use: "social", group: "green" } %}

### Teals

{% swatchList { use: "social", group: "teal" } %}

### Purples

{% swatchList { use: "social", group: "purple" } %}

### Magentas

{% swatchList { use: "social", group: "magenta" } %}

### Reds

{% swatchList { use: "social", group: "red" } %}

### Oranges

{% swatchList { use: "social", group: "orange" } %}

### Yellows

{% swatchList { use: "social", group: "yellow" } %}

### Neutrals

{% swatchList { use: "social", group: "neutral" } %}

## Use colour to reflect tone

Our updated palette has been developed to allow a range in expression across the inform to inspire scale.

There are moments where the brand needs to feel functional and serious, guiding users seamlessly to the content and services they need. With the introduction of new channels such as social, there are also moments where the brand needs impact and visual differentiation.

Within our palette there are two approaches to colour application: tonal colours and companion colours.

Depending on tonal requirement, each can be used to achieve a different level of expression. The following guidance details the use of these two approaches.

{% informInspire { contentClasses: 'app-inform-inspire__content--flex app-inform-inspire__content--flex-5-items', list: ['black and white', 'dark shade', 'Primary blue', 'tonal colour', 'companion colour'], listLabel: 'Colour use options (from left to right):' } %}
![Text "National mourning guidance" in black, within a white circle, on a black background.](./tone-black-and-white.png)

![Text "Get support with the cost of living" in blue shade 50%, within a white circle, on a blue shade 50% background.](./tone-dark-shade.png)

![Text "Fuel duty will be frozen next year" in Primary blue, within a white circle, on a Primary blue background.](./tone-primary-blue.png)

![Text "Get help with your pension" in a dark blue, within a Accent blue circle, on a Primary blue background.](./tone-tonal-colour.png)

![Text "Learning to drive a car" in Accent green, within a blue shade 50% background, on an Accent green background.](./tone-companion-colour.png)
{% endinformInspire %}

### Tonal colour examples

Colour can be used to reflect tone of a message.

For more sensitive messaging, colours from within the same tonal range are used to feel more serious, informative and functional.

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

{% set tonalColourExamples = [
  { label: "Green tint 95%", hex: "#F3F9F7", group: "example1" },
  { label: "Green shade 50%", hex: "#09442D", group: "example1" },
  { label: "Primary red", hex: "#CA3535", group: "example2" },
  { label: "Red shade 50%", hex: "#651B1B", group: "example2" },
  { label: "Accent red", hex: "#FF5E5E", group: "example2" },
  { label: "Purple tint 95%", hex: "#F6F5FA", group: "example3" },
  { label: "Primary purple", hex: "#54319F", group: "example3" },
  { label: "Purple shade 50%", hex: "#2A1950", group: "example3" },
  { label: "Accent purple", hex: "#BA4AFF", group: "example3" }
] %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: tonalColourExamples, group: "example1" } %}

</div>

</div>

<div>

![Text "Fuel duty will be frozen next year" in Green shade 50%, within a whte circle, on a Green tint 50% background.](./example-tonal-1.png)

</div>

{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: tonalColourExamples, group: "example2" } %}

</div>

</div>

<div>

![Text "Strong winds and expected disruptions" in white, above the text is an exclamation mark icon in Red shade 50% inside a small circle in Accent red, on a Primary red background.](./example-tonal-2.png)

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: tonalColourExamples, group: "example3" } %}

</div>

</div>

<div>

![Text "Get your council bill reduced as a student" in white, with a Primary purple lozenge highlighting the word "reduced". Below the text is a large Accent purple arrow. Image background is in Purple shade 50%.](./example-tonal-3.png)

</div>
{% endgrid %}

## Companion colour set

Use companion colours when you need to emphasise something, like prompting action or sharing something positive. We’ve kept the set to 9 combinations to make sure they stay accessible.

Some pairings may be harder to see for people with visual impairments or colour blindness.

Choose combinations carefully and use a tool like [WhoCanUse.com](https://www.whocanuse.com/) to check they meet [WCAG 2.2 Contrast (Minimum) Level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Do not rely on colour alone to show meaning, signal an action or prompt a response. For more detail, see [WCAG 2.2: Use of Colour (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

Remember, some users browse with high-contrast settings or dark mode. Colours may need to be adjusted to work in those contexts.

{% set companionColours = [
  { label: "Primary blue", hex: "#1D70B8", group: "set1" },
  { label: "Primary yellow", hex: "#FFDD00", group: "set1" },
  { label: "Magenta tint 95%", hex: "#FCF5F8", group: "set2" },
  { label: "Primary red", hex: "#CA3535", group: "set2" },
  { label: "Blue tint 95%", hex: "#F4F8FB", group: "set3" },
  { label: "Primary magenta", hex: "#CA357C", group: "set3" },
  { label: "Primary yellow", hex: "#FFDD00", group: "set4" },
  { label: "Purple shade 50%", hex: "#2A1950", group: "set4" },
  { label: "Accent blue", hex: "#11E0F1", group: "set5" },
  { label: "Purple shade 25%", hex: "#3F2577", group: "set5" },
  { label: "Accent green", hex: "#66F39E", group: "set6" },
  { label: "Blue shade 50%", hex: "#0F385C", group: "set6" },
  { label: "Green shade 50%", hex: "#09442D", group: "set7" },
  { label: "Accent blue", hex: "#11E0F1", group: "set7" },
  { label: "Primary blue", hex: "#1D70B8", group: "set8" },
  { label: "Accent blue", hex: "#11E0F1", group: "set8" },
  { label: "Red shade 50%", hex: "#651B1B", group: "set9" },
  { label: "Primary yellow", hex: "#FFDD00", group: "set9" }
] %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set1.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set1" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set2.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set2" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set3.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set3" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set4.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set4" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set5.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set5" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set6.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set6" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set7.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set7" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set8.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set8" } %}

</div>

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>

![](./companion-colours-set9.svg)

</div>

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColours, group: "set9" } %}

</div>

</div>
{% endgrid %}

### Companion colour examples

Colour can be used to reflect tone of a message.

For more sensitive messaging, colours from within the same tonal range are used to feel more serious, informative and functional.

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

{% set companionColourExamples = [
  { label: "Primary blue", hex: "#1D70B8", group: "example1" },
  { label: "Primary yellow", hex: "#FFDD00", group: "example1" },
  { label: "Primary magenta", hex: "#CA357C", group: "example2" },
  { label: "Blue shade 50%", hex: "#0F385C", group: "example2" },
  { label: "Magenta tint 95%", hex: "#FCF5F8", group: "example2" },
  { label: "Accent green", hex: "#66F39E", group: "example3" },
  { label: "Blue shade 50%", hex: "#0F385C", group: "example3" }
] %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColourExamples, group: "example1" } %}

</div>

</div>

<div>

![Text "Get your council bill reduced as a student" in white, with "reduced" in black text within a Primary yellow lozenge highlight. Above is a large Primary yellow arrow. Image background is in Primary blue.](./example-companion-1.png)

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColourExamples, group: "example2" } %}

</div>

</div>

<div>

![Text "See to see if you need an Electronic Travel Authorisation (ETA)" in Blue shade 50%. Above is a map pin graphic in Primary magenta. Image background is in Magenta tint 90%.](./example-companion-2.png)

</div>
{% endgrid %}

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div>
<div class="app-border app-border--top">

{% swatchList { palette: companionColourExamples, group: "example3" } %}

</div>

</div>

<div>

![Text "Driving abroad" in white, with topic text "Step by step" above in Accent green, within a Blue shade 50% circle. Image background is Accent green.](./example-companion-3.png)

</div>
{% endgrid %}
