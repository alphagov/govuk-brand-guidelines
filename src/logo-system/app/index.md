---
order: 3
title: App
sitemapTitle: App logo
---

## App logo system

In GOV.UK apps we follow the primary logo system, using the wordmark as the main identifier whilst incorporating the crown as a supporting element to aid trust and recognition.

An example of this is the GOV.UK app icon.

<!-- The &shy; is intentionally between 'Word' and 'mark' because
     otherwise the column gets too wide and therefore uneven in mobile view -->

{% grid { columns: 3 } %}
{% gridCell {verticalAlign: 'end'} %} ### Word&shy;mark

    ![Wordmark for GOV.UK in white. The dot between 'GOV' and 'UK' is Accent teal and vertically-centred. Shown on a Primary blue background.](./wordmark-on-blue.svg)

{% endgridCell %}
{% gridCell {verticalAlign: 'end'} %} ### Crown

    ![Crown shown as white on a Primary blue background.](./crown-on-blue.svg)

{% endgridCell %}
{% gridCell {verticalAlign: 'end'} %} ### App icon

    ![App icon with a Primary blue background, showing a stacked lock-up of the GOV.UK wordmark and crown. A rounded square outline shows positioning of logo elements.](./app-icon-on-blue.svg)

{% endgridCell %}
{% endgrid %}

An exception to this principle includes other GOV.UK apps, where the symbol or identifier may be used instead of the crown within the app icon. See the [App icon suite section on this page](#app-icon-suite).

## Logo elements within the app

We always lead with the wordmark as our primary brand identifier - positioning it in a prominent position.

We use the crown as a supporting element that sits below or at the end of content.

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

{% grid { columns: { mobile: 1, desktop: 2 } } %}

<div>

### App splash screen

{% video { source: [
    "/graphic-device/dot-use-examples/splash-screen-short-version.mp4",
    "/graphic-device/dot-use-examples/splash-screen-short-version.webm"
] } %}

</div>

<div>

### Crown watermark

![Screenshot of the GOV.UK app, showing the GOV.UK wordmark centred in the top header and the crown watermark centred at the end of a page.](./app-watermark-example.png)

</div>

{% endgrid %}

## App icon

The GOV.UK app icon should follow the same principle, leading with the wordmark and using the crown as a supporting element.

As this is a small use application of the logo elements, we use the enlarged crown size to maximise legibility and recognition.

![App icon of the GOV.UK app, with gridlines showing how the crown is placed centred directly under GOV.UK and a mockup of the GOV.UK app's page in an App Store.](./app-icon-examples.png)

### App icon suite

As the family of GOV.UK applications grows, the need for a consistent approach to app icon design is necessary.

The suite of icons should follow the same principles, leading with the GOV.UK wordmark for recognition, with the symbol below, replacing the crown.

An example of this is the GOV.UK One Login app.

{% grid { columns: 3 } %}

{% figure { src: "./app-icon-template.svg", alt: "Logo template for GOV.UK-branded apps. The wordmark is shown above a placeholder space for a symbol to replace the crown.", classes: "govuk-!-margin-bottom-0" } %}
Framework
{% endfigure %}

{% figure { src: "./app-icon.svg", alt: "App icon of the GOV.UK app. The wordmark is shown above the crown.", classes: "govuk-!-margin-bottom-0" } %}
**Example 1:** GOV.UK app
{% endfigure %}

{% figure { src: "./app-icon-one-login.svg", alt: "App icon of the GOV.UK One Login app, showing the symbol for One Login below the wordmark.", classes: "govuk-!-margin-bottom-0" } %}
**Example 2:** GOV.UK One Login
{% endfigure %}

{% endgrid %}
