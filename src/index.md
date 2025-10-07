---
order: 0
title: GOV.UK Brand Guidelines
layout: homepage.njk
mainClasses: 'app-homepage'
---

{% from "govuk/components/button/macro.njk" import govukButton %}

{% breakOut {classes: "app-homepage-masthead"} %}

{% grid { columns: { desktop: 3 }, classes: "govuk-!-margin-bottom-0" } %}
{% gridCell { span: 2 } %}

# A brand that can inform and inspire

We’ve refreshed the GOV.UK brand to meet the needs and changing expectations of users across different channels and contexts.

{{ govukButton({ href: ("/introduction/" | url), text: "Find out more", isStartButton: true, classes: "govuk-button--inverse govuk-!-margin-top-5" }) }}

{% endgridCell %}
{% endgrid %}

{% endbreakOut %}

<div class="app-homepage-section">

## Key elements

{% grid {columns: { mobile: 1, tablet: 2 } } %}
{% linkCard {titleContainer: 'h3', title: 'Graphic device', description: 'Using the dot as a guide and companion in images and videos.', icon: './graphic-device.svg', href: ('/graphic-device/' | url) } %}
{% linkCard {titleContainer: 'h3', title: 'Logo system', description: 'How the GOV.UK wordmark and crown work together in different contexts.', icon: './logo-system.svg', href: ('/logo-system/' | url) } %}
{% linkCard {titleContainer: 'h3', title: 'Colour', description: 'Core brand colours, palettes and contrast requirements for accessibility.', icon: './colour.svg', href: ('/colour/' | url) } %}
{% linkCard {titleContainer: 'h3', title: 'Typography', description: 'Which typeface and font to use, and how to use them.', icon: './typography.svg', href: ('/typography/' | url) } %}
{% endgrid %}

</div>

{% grid { columns: { desktop: 3 }, classes: "app-homepage-section" } %}
{% gridCell { span: { desktop: 2 } } %}

## Using the GOV.UK brand

These guidelines show GOV.UK teams within the Government Digital Service (GDS) how to apply the GOV.UK brand.

Teams in wider government also publish information and services as part of [the GOV.UK proposition](https://www.gov.uk/government/publications/govuk-proposition), with support from GDS. If you’re not part of GDS, you must get approval to apply the GOV.UK brand.

{% endgridCell %}
{% endgrid %}

{% grid { columns: { tablet: 2, desktop: 3 }, classes: "app-homepage-section app-homepage-section--top-border" } %}
{% gridCell %}

## Get brand assets

You can find and download brand element and asset files in [the govuk-brand-assets repository on GitHub](https://github.com/alphagov/govuk-brand-assets).

{% endgridCell %}
{% gridCell { span: { desktop: 2 } } %}

## Need help?

If you’re part of a team that works on government products and services, and got a question about how to apply the brand guidelines, [contact the team](mailto:govuk-brand-team@dsit.gov.uk).

You can also contact the team to get approval to use the brand.

{% endgridCell %}
{% endgrid %}
