---
order: 4
title: Incorrect approaches
---

Icons help communicate complex concepts, making GOV.UK content clearer, more accessible and relevant for everyone. To maintain visual consistency, avoid the following:

## Avoid these mistakes

{% grid { columns: { mobile: 1, desktop: 2 }, classes: "govuk-!-margin-top-5" } %}
{% gridCell { classes: "app-border app-border--top" } %}

### Don’t use outline icons on lists

Avoid using outline-style icons for static list items or informational labels. GOV.UK’s default icons are filled with the exception of those places where icons become interactive buttons that change states (like hover or click).
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Mobile interface with outlined icons highlighted as an incorrect pattern, illustrating that outline icons should be reserved for interactive states rather than static lists.](./incorrect-list-icons.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### Don’t use filled icons in the navigation bar

Filled icons carry too much visual weight, making inactive navigation items look selected when they are actually resting.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Mobile navigation with filled icons used for unselected menu items, marked as incorrect to show how excessive visual weight can make inactive options appear selected or active.](./incorrect-navigation-icons.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### Don’t forget margins and visual alignment

Always draw icons on the provided grid, leaving consistent margins on all sides. These margins create the optical space needed to balance differences in volume and mass between different icon shapes.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Bus icon shown extending beyond the recommended grid boundaries, marked as incorrect to demonstrate the importance of maintaining consistent margins and optical space around icons.](./incorrect-icon-mass.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### Don’t round interior details

To maintain a visual stylistic connection with the GDS Transport typeface and GOV.UK’s design heritage, interior details and corners remain sharp.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Message icon with rounded interior corners, marked as incorrect to demonstrate that internal details should remain sharp to maintain consistency with GOV.UK’s visual style and design heritage.](./incorrect-icon-rounded-details.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### Don’t add excessive details

When scaling an icon up into an illustration, keep the main glyph consistent and avoid excessive decoration. Ornaments can clutter the design and reduce readability.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Transition from a pound icon to an overly decorated coin illustration, demonstrating how unnecessary embellishments can clutter the design and make the original symbol less recognisable.](./incorrect-icon-excessive-detail.svg)
{% endgridCell %}

{% gridCell { classes: "app-border app-border--top" } %}

### Don’t use transparency in icons

Partially transparent pixels or translucent areas render poorly on low-end devices and clash unpredictably with varying backgrounds, such as custom user themes or dark modes. Keep all icon vectors fully opaque to ensure crisp, clean rendering in every environment.
{% endgridCell %}

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}
![Briefcase and profile icon using transparency effects, illustrating a design approach that should be avoided because translucent elements can reduce clarity and display inconsistently across different environments.](./incorrect-icon-transparency.svg)
{% endgridCell %}
{% endgrid %}
