---
title: Test utilities
---

To facilitate creating test pages, we have a couple of utilities

## Outlines CSS classes

Use the following classes on your elements to give them an outline
and make them visually recognisable in the tests:

- `test-outline`: A regular solid outline sitting on the outside of the element
- `test-outline--loose`: A dotted outline 2px outside the boundary of the element
- `test-outline--tight`: A dashed outline sitting inside the element (same as a border)

<p class="govuk-body test-outline">.test-outline</p>
<p class="govuk-body test-outline--loose">.test-outline--loose</p>
<p class="govuk-body test-outline--tight">.test-outline--tight</p>
