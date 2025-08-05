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

#### In situ - Flat

When displayed in the mobile navigation the dot marking the current item aligns with the centre of the chevron.

<style>
    /* Overlay an element on top of the test area and draw a line where the centre of the chevron is */
    .test-vertical-guideline {
        position: relative;
        z-index: 0;

        --x: 50%;
    }

    .test-vertical-guideline::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        z-index: 1;

        background-image: linear-gradient(red, red);
        background-size: 1px 100%;
        background-repeat: no-repeat;
        background-position: var(--x) 0;
    }
</style>

<div class="govuk-service-navigation test-vertical-guideline" style="--x: 13.5px">
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

#### In situ - Nested current page

When the current page is nested, the dot aligns back with the start of the previous level

<div class="govuk-service-navigation test-vertical-guideline" style="--x: 30px">
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
