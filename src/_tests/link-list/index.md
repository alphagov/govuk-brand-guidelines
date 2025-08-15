---
title: 'Navigation tests'
---

## Link list

{% from 'link-list.njk' import 'appLinkList' %}

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
    renderedPageUrl: '/somewhere/'
})}}
{% endtestExample %}

#### Current state

It detects the current link, whose URL exactly matches the rendered pages' URL, and sets its `aria-current` attribute to `page`.

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
    renderedPageUrl: '/another-page/'
})}}
{% endtestExample %}

#### Active state

It detects the active link, whose URL makes up the start of the rendered pages' URL, and sets its `aria-current` attribute to `true`

{% testExample %}
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
{% endtestExample %}

### Nested

It renders children of the page

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
{% endtestExample %}

#### Active state

It detects the links, whose URL makes up the start of the rendered pages' URL or the whole URL, and set their `aria-current` attribute to `true` or `page` respectively.

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
    renderedPageUrl: '/another-page/another-child/'
})}}
{% endtestExample %}

### Styling

It allows to set classes on the wrapping `<ul>`, the `<li>` and `<a>` elements

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
    classes: "test-outline--loose",
    itemClasses: 'test-outline',
    linkClasses: 'test-outline--tight'
})}}
{% endtestExample %}
