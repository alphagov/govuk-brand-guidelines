---
title: Mobile navigation section
---

{% from 'link-list.njk' import 'appLinkList' %}

## Mobile navigation sections

Mobile navigation sections are [link lists](/_tests/link-lists/) with specific classes

### Flat

{% testExample %}
{{ appLinkList({
    pages: [
        {
            data: {
                title: 'A page'
            },
            url: '/a-page/'
        },
        {
            data: {
                title: 'Another page'
            },
            url: '/another-page/'
        },
        {
            data: {
                title: 'One more page'
            },
            url: '/one-more-page/'
        }
    ],
    renderedPageUrl: '/another-page/',
    classes: "app-mobile-navigation-section__subnav",
    itemClasses: 'app-mobile-navigation-section__item',
    linkClasses: 'govuk-service-navigation__link'
})}}
{% endtestExample %}

### Nested

{% testExample %}
{{ appLinkList({
    pages: [
        {
            data: {
                title: 'A page'
            },
            url: '/a-page/'
        },
        {
            data: {
                title: 'Another page',
                children: [
                    {
                        data: {
                            title: 'Child page'
                        },
                        url: '/another-page/child/'
                    },
                    {
                        data: {
                            title: 'Another child page'
                        },
                        url: '/another-page/another-child/'
                    }
                ]
            },
            url: '/another-page/'
        },
        {
            data: {
                title: 'One more page'
            },
            url: '/one-more-page/'
        }
    ],
    renderedPageUrl: '/another-page/another-child/',
    classes: "app-mobile-navigation-section__subnav",
    itemClasses: 'app-mobile-navigation-section__item',
    linkClasses: 'govuk-service-navigation__link'
})}}
{% endtestExample %}

### In situ - Flat

When displayed in the mobile navigation the dot marking the current item aligns with the centre of the chevron.

{% testExample %}

<div class="govuk-service-navigation test-guide-line--vertical" style="--x: 13.5px">
<ul class="govuk-service-navigation__list">
<li class="govuk-service-navigation__item app-mobile-navigation-section__service-navigation-item">
<button class="app-mobile-navigation-section__toggle" aria-expanded="true"><span>Test navigation section (non-interactive)</span></button>
{{ appLinkList({
    pages: [
        {
            data: {
                title: 'A page'
            },
            url: '/a-page/'
        },
        {
            data: {
                title: 'Another page'
            },
            url: '/another-page/'
        },
        {
            data: {
                title: 'One more page'
            },
            url: '/one-more-page/'
        }
    ],
    renderedPageUrl: '/another-page/',
    classes: "app-mobile-navigation-section__subnav",
    itemClasses: 'app-mobile-navigation-section__item',
    linkClasses: 'govuk-service-navigation__link'
})}}
</li>
</ul>
</div>
{% endtestExample %}

### In situ - Nested current page

When the current page is nested, the dot aligns back with the start of the previous level

{% testExample %}

<div class="govuk-service-navigation test-guide-line--vertical" style="--x: 30px">
<ul class="govuk-service-navigation__list">
<li class="govuk-service-navigation__item app-mobile-navigation-section__service-navigation-item">
<button class="app-mobile-navigation-section__toggle" aria-expanded="true"><span>Test navigation section (non-interactive)</span></button>
{{ appLinkList({
    pages: [
        {
            data: {
                title: 'A page'
            },
            url: '/a-page/'
        },
        {
            data: {
                title: 'Another page',
                children: [
                    {
                        data: {
                            title: 'Child page'
                        },
                        url: '/another-page/child/'
                    },
                    {
                        data: {
                            title: 'Another child page'
                        },
                        url: '/another-page/another-child/'
                    }
                ]
            },
            url: '/another-page/'
        },
        {
            data: {
                title: 'One more page'
            },
            url: '/one-more-page/'
        }
    ],
    renderedPageUrl: '/another-page/another-child/',
    classes: "app-mobile-navigation-section__subnav",
    itemClasses: 'app-mobile-navigation-section__item',
    linkClasses: 'govuk-service-navigation__link'
})}}
</li>
</ul>
</div>
{% endtestExample %}
