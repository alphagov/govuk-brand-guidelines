---
order: 0
title: Homepage
---

<nav class="app-grid" style="--app-grid-columns: 2">
{% for navigationGroup in collections.pages[0].data.children %}
    <a class="app-link--card" href="{{navigationGroup.url}}">{{navigationGroup.data.title}}</a>
{% endfor %}
</nav>

## Brand ambition

## To inform and inspire across channels, formats and audiences
