---
order: 0
title: GOV.UK Brand Guidelines
layout: homepage.njk
mainClasses: 'app-homepage'
---

{% breakOut {classes: "app-homepage-section app-homepage-masthead"} %}

<div class="govuk-grid-row">
<div class="govuk-grid-column-two-thirds-from-desktop">

# A brand that can inform and inspire

[Intro text expanding on the idea of a flexible brand that can be expressed in a range of different ways]

</div>
</div>

{% endbreakOut %}

{% breakOut {classes: "app-homepage-section", theme: "light-blue" } %}
{% grid {columns: { mobile: 1, tablet: 2 } } %}

<div>

## Adapting to [xx]

GOV.UK’s key brand elements are designed to shift in tone, visuals and motion along an ‘inform to inspire’ scale.

With this flexibility, the brand can adapt its level of expression to work across a broad range of channels, formats and audiences.

</div>
<div>

![](./inform-inspire.svg)

</div>
{% endgrid %}
{% endbreakOut %}
