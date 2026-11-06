---
order: 8
title: Icons
---

## Colour usage

Icons are generally designed to be monochromatic, using GOV.UK’s primary blue in light mode and accent blue in dark mode. They must always comply with [WCAG 2.2 accessibility standards](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag).

However, when there is a need to enhance icons, you may use two to three of the colour shades from the colour palette. For product UI we recommend that you stick strictly to the three blue shades in our palette listed below, making the main colour our primary blue.

<!-- TODO: where should "brand palette" link to?  -->

For Social Media & Marketing additional colours from the brand palette may be used if tonally appropriate.

### App recommended palette for enhanced icons

### Light mode

{% swatchList { use: "icons-light" } %}

### Dark mode

{% swatchList { use: "icons-dark" } %}

### Light Mode and Dark Mode pairings

{% grid { columns: { desktop: 1 }, gap: "0px", classes: "govuk-!-margin-top-0 govuk-!-margin-bottom-6" } %}

{% grid { columns: { mobile: 1, desktop: 3 }, gap: '15px', classes: 'govuk-!-margin-0 app-grid--auto-rows' }  %}

{% grid { columns: { desktop: 1 }, gap: "0px", classes: "govuk-!-margin-0 app-grid--auto-rows" } %}
{% sectionHighlight { classes: 'app-section-highlight--primary-blue app-section-highlight--colour' } %}
**Primary blue**
{% endsectionHighlight %}
{% sectionHighlight { classes: 'app-section-highlight--dark-mode-primary-blue app-section-highlight--colour' } %}
**Dark mode primary blue**
{% endsectionHighlight %}
{% endgrid %}

{% grid { columns: { desktop: 1 }, gap: "0px", classes: "govuk-!-margin-0 app-grid--auto-rows" } %}
{% sectionHighlight { classes: 'app-section-highlight--shade-blue app-section-highlight--colour' } %}
**Blue shade 25%**
{% endsectionHighlight %}
{% sectionHighlight { classes: 'app-section-highlight--primary-blue app-section-highlight--colour' } %}
**Primary blue**
{% endsectionHighlight %}
{% endgrid %}

{% grid { columns: { desktop: 1 }, gap: "0px", classes: "govuk-!-margin-0" } %}
{% sectionHighlight { classes: 'app-section-highlight--accent-blue app-section-highlight--colour' } %}
**Accent blue**
{% endsectionHighlight %}
{% endgrid %}

{% endgrid %}

{% callout { classes: "govuk-!-margin-bottom-4" } %}
The top colours shows light mode colours; the bottom colours show their dark mode equivalents. Accent blue remains the same across both modes.
{% endcallout %}

To improve colour contrast and meet accessibility standards, replace Primary Blue with Dark Mode Primary Blue, and replace Blue Shade 25 with Primary Blue. Continue using Accent Blue for highlights. This ensures icons remain accessible while preserving their visual hierarchy.

{% endgrid %}

### Applying colour to icons

{% grid { columns: { desktop: 2 }, classes: 'govuk-!-margin-0' } %}

{% gridCell { classes: 'app-grid__cell--image-full-width app-grid-cell--reduced-body-margin' } %}
![Enhanced payment icon displayed across light and dark interfaces, illustrating the recommended use of GOV.UK primary blue, supporting blue shades and one accent colour.](./app-pay-icon.svg)

We recommend that you choose no more than three shades of blue including GOV.UK primary blue and an accent when enhancing icons in product.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width app-grid-cell--reduced-body-margin' } %}
![Social media post featuring a bright pink, yellow and blue payment and wallet icon, demonstrating how enhanced icons can use a broader colour palette in communications while remaining simple, clear and easy to recognise.](./social-media-wallet-icons.svg)

For comms and social media, you may add more expression to the colour of the icons, but we recommend you keep them simple and readable at a glance.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width app-grid-cell--reduced-body-margin' } %}
![Profile icon paired with a warning symbol, illustrating how badges can communicate alerts, warnings or status changes associated with a user account.](./account-alert-icon.svg)

Sometimes, you may need to introduce colour in product interfaces for feedback screens. This is used to signal key states or actions, such as success, warnings, or critical errors. Typically, these are represented by green, yellow, and red. Always refer to [GOV.UK Design System colour guidance](https://design-system.service.gov.uk/styles/colour/) to ensure you are using the correct values.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width app-grid-cell--reduced-body-margin' } %}
![Status icons for success, error, blocked and warning states, illustrating the standard symbols used to communicate feedback and system status across GOV.UK services.](./icon-alert-modifiers.svg)

Ensure that when using the same glyph across different severity levels, you pair it with both the appropriate shape and colour. For example, use a triangle with an exclamation mark for warning states, and a circle with an appropriate glyph mark for severe alerts. This introduces two distinct visual cues, improving clarity and accessibility.
{% endgridCell %}

{% endgrid %}
