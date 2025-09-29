---
order: 4
title: Social
---

## Social logo system

Within GOV.UK social channels we follow the primary logo system, using the wordmark as the main identifier whilst incorporating the crown as a supporting element to aid trust and recognition.

An example of this is in profile icons.

{% grid { columns: 3 } %}
{% gridCell {verticalAlign: 'end'} %} ### Wordmark

    ![Wordmark for GOV.UK in white. The dot between 'GOV' and 'UK' is Accent teal and vertically-centred. Shown on a Primary blue background.](./wordmark-on-blue.svg)

{% endgridCell %}
{% gridCell {verticalAlign: 'end'} %} ### Crown

    ![The crown element of the GOV.UK logo, shown as white on a Primary blue background.](./crown-on-blue.svg)

{% endgridCell %}
{% gridCell {verticalAlign: 'end'} %} ### Profile icons

    ![Social profile icon with a Primary blue background, showing a stacked lock-up of the GOV.UK wordmark and crown. A circle outline shows positioning of logo elements.](./profile-icon-on-blue.svg)

{% endgridCell %}
{% endgrid %}

## Logo elements within social

{% grid { columns: { mobile: 1, desktop: 2 } } %}

<div>

We always lead with the wordmark as our primary brand identifier – positioning it in a prominent position.

We use the crown as a supporting element that sits below or to the right of the wordmark, or at the end of content.

</div>

<div class="govuk-!-text-align-centre">

![Logo lock-up of the GOV.UK logo, with gridlines showing how the crown is placed centred directly under GOV.UK. A circle outline shows positioning of logo elements.](./profile-icon-lines.svg) ![](./profile-icon.svg)

</div>
{% endgrid %}

{% callout %}
Indicative examples for illustrative purposes only.
{% endcallout %}

{% grid { columns: { mobile: 3, desktop: 3 } } %}

![Mock-up of the GOV.UK channel page on YouTube.](./youtube-example.png)

![Mock-up of a post from GOV.UK on Instagram.](./insta-example.png)

![Mock-up of the GOV.UK profile page on Instagram.](./facebook-example.png)

{% endgrid %}

## Social end frames

Social end frames can be used at the end of animated or filmed content. They incorporate both the wordmark and crown and act as a branded sign-off.

### Video end frame 16:9

{% video { source: [
    "/graphic-device/dot-use-examples/end-frame-1920-1080.mp4",
    "/graphic-device/dot-use-examples/end-frame-1920-1080.webm"
] } %}

{% grid { columns: { mobile: 1, desktop: 2 } } %}

<div>

### Video end frame 9:16

{% video { source: [
    "/graphic-device/dot-use-examples/end-frame-1080-1920.mp4",
    "/graphic-device/dot-use-examples/end-frame-1080-1920.webm"
] } %}

</div>
<div>

### Video end frame 1:1

{% video { source: [
    "/graphic-device/dot-use-examples/end-frame-1080-1080.mp4",
    "/graphic-device/dot-use-examples/end-frame-1080-1080.webm"
] } %}

</div>
{% endgrid %}

## Adaptive dot colour

At times, our social content will need greater impact. One of the ways this can be achieved is through the use of colour.

Our logo follows the adaptive dot colour principle, which allows the dot to change colour depending on the background. This must always follow the tonal range of a colour.

The adaptive dot colour should be reserved for moments where the brand requires more expression, and should not be used in communications that require a more somber or serious tone.

For example, if using Purple Shade 50% as a background, the dot colour would become the Accent Purple.

This can be applied within the live artwork files using the relevant swatches. Always consider accessibility when making these changes.

To aid brand recognition and coherency, adaptive dot colour should not be used within video end frames.

{% grid { columns: { mobile: 2, desktop: 3 } } %}

    {% gridCell %}
    ![GOV.UK wordmark shown with adaptive dot to tonally match different coloured backgrouds.](./adaptive-primary-blue.svg)
    {% endgridCell %}
    {% gridCell %}
    ![](./adaptive-primary-green.svg)
    {% endgridCell %}
    {% gridCell %}
    ![](./adaptive-shade50-blue.svg)
    {% endgridCell %}
    {% gridCell %}
    ![](./adaptive-shade50-purple.svg)
    {% endgridCell %}
    {% gridCell %}
    ![](./adaptive-shade50-red.svg)
    {% endgridCell %}
    {% gridCell %}
    ![](./adaptive-shade50-teal.svg)
    {% endgridCell %}

{% endgrid %}

### Incorrect adaptive dot colour usage

{% grid { columns: { mobile: 2, desktop: 2 } } %}

<div class="app-border app-border--top">

Do not use colour combinations that are not accessible.

</div>

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}

![](./incorrect-not-accessible-1.svg) ![](./incorrect-not-accessible-2.svg)

{% endgridCell %}

<div class="app-border app-border--top">

Do not use colour combinations that lack contrast between the wordmark and dot.

</div>

{% gridCell { classes: 'app-grid__cell--image-full-width' } %}

![](./incorrect-low-contrast-1.svg) ![](./incorrect-low-contrast-2.svg)

{% endgridCell%}

<div class="app-border app-border--top">

Do not use colour combinations that are not from the same tonal range.

</div>
{% gridCell { classes: 'app-grid__cell--image-full-width' } %}

![](./incorrect-tonal-1.svg) ![](./incorrect-tonal-2.svg)

{% endgridCell %}
{% endgrid %}
