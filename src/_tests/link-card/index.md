---
title: Link cards
---

## Title only

{% testExample %}
{% linkCard {title: 'Typography' } %}
{% endtestExample %}

## Title and description

{% testExample %}
{% linkCard {title: 'Typography', description: 'Which typeface and font to use, and how to use them' } %}
{% endtestExample %}

## Title and icon

{% testExample %}
{% linkCard {title: 'Typography', icon: './typography.svg' } %}
{% endtestExample %}

## Title, description and icon

{% testExample %}
{% linkCard {title: 'Typography', description: 'Which typeface and font to use, and how to use them', icon: './typography.svg' } %}
{% endtestExample %}


## Title with custom element type

Use `titleContainer` to change which element is used to surround the title.

{% testExample %}
{% linkCard {titleContainer: 'h3', title: 'Typography', description: 'Which typeface and font to use, and how to use them', icon: './typography.svg' } %}
{% endtestExample %}
