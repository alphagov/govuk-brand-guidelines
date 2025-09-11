---
order: 0
title: GOV.UK Brand Guidelines
layout: homepage.njk
mainClasses: 'app-homepage'
---

{% from "govuk/components/button/macro.njk" import govukButton %}

{% breakOut {classes: "app-homepage-section app-homepage-masthead"} %}

{% grid { columns: {mobile: 1, desktop: 3} } %}
{% gridCell {span: 2} %}

# A brand that can inform and inspire

We’ve refreshed the GOV.UK brand to meet the needs and changing expectations of users across different channels and contexts.

{{ govukButton({ href: "#", text: "Find out more", isStartButton: true, classes: "govuk-button--inverse govuk-!-margin-top-5" }) }}

{% endgridCell %}
{% endgrid %}

{% endbreakOut %}

{% grid { columns: {mobile: 1, desktop: 3}, classes: "app-homepage-section" } %}

{% gridCell {span: 2} %}

## Key elements

{% grid {columns: { mobile: 1, tablet: 2, desktop: 2 } } %}
{% linkCard {title: 'Graphic device', description: 'Using the dot as a guide and companion in images and videos', icon: './graphic-device.svg' } %}
{% linkCard {title: 'Logo system', description: 'How the logo elements work together in different contexts', icon: './logo-system.svg' } %}
{% linkCard {title: 'Typography', description: 'Which typeface and font to use, and how to use them', icon: './typography.svg' } %}
{% linkCard {title: 'Colour', description: 'Core brand colours, palettes and accessibility requirements', icon: './colour.svg' } %}
{% endgrid %}

{% endgridCell %}
{% gridCell %}

## Get brand assets

[TODO: Write link text to find brand assets in GitHub folders]

## Need help?

If you’re part of a team that works on government products and services, and got a question about how to apply the brand guidelines, contact the team.

You can also contact the team to get approval to use the brand.

{% endgridCell %}
{% endgrid %}
