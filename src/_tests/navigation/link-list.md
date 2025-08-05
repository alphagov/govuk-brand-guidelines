---
title: 'Navigation tests'
---

## Link list

{% from 'link-list.njk' import 'appLinkList' %}

### Flat

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
    renderedPageUrl: '/somewhere/'
})}}

#### Current state

It detects the current link, whose URL exactly matches the rendered pages' URL, and sets its `aria-current` attribute to `page`.

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
    renderedPageUrl: '/another-page/'
})}}

#### Active state

It detects the current link, whose URL makes up the start of the rendered pages' URL, and sets its `aria-current` attribute to `true`

{{ appLinkList({
    pages: [
        {
            data: {
                title: 'A page'
            },
            url: '/another-page/'
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
    renderedPageUrl: '/one-more-page/child'
})}}

### Nested

It renders children of the page

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
                        url: '/another-page/child'
                    },
                    {
                        data: {
                            title: 'Another child page'
                        },
                        url: '/another-page/another-child'
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
    renderedPageUrl: '/somewhere/'
})}}

#### Active state

It detects the links, whose URL makes up the start of the rendered pages' URL or the whole URL, and set their `aria-current` attribute to `true` or `page` respectively.

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
    renderedPageUrl: '/another-page/another-child/'
})}}

### Styling

It allows to set classes on the wrapping `<ul>`, the `<li>` and `<a>` elements

<style style="display: block; white-space: pre">
    .test-component-outline {
        outline: dotted 2px blue;
        outline-offset: 2px;
    }
    .test-item-outline {
        outline: solid 2px;
    }

    .test-link-outline {
        outline: dashed 2px grey;
        outline-offset: -2px;
    }
</style>

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
    classes: "test-component-outline",
    itemClasses: 'test-item-outline',
    linkClasses: 'test-link-outline'
})}}

### Mobile navigation sections

Mobile navigation sections are just link list with specific classes

### Flat

<div style="border: solid 2px lightblue">
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
</div>

#### Nested

<div style="border: solid 2px lightblue">
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
</div>

#### In situ

<div class="govuk-service-navigation">
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
