---
title: Test page for the `informInspire` shortcode
---

There are 3 'Inform Inspire' graphics on the brand guidelines site, all with slightly different config.

## Inform inspire scale

{% informInspire %}

  <div class="app-inform-inspire__bar">Web</div>
  <div class="app-inform-inspire__bar">App</div>
  <div class="app-inform-inspire__bar">Social</div>
{% endinformInspire %}

## Inform inspire with flex container, 2 `figure` items

{% informInspire { contentClasses: 'app-inform-inspire__content--flex app-inform-inspire__content--flex-2-items' } %}
{% figure { src: "./video-thumb-get-help.png", alt: "A video thumbnail for 'Get help with registering a death'. Title is shown within a simple blue circle graphic on a blue background." } %}
Get help with...
{% endfigure %}

{% figure { src: "./video-thumb-influencer.png", alt: "A video thumbnail for 'How I learnt to drive. A smiling young adult is shown in front of a background, which is a purple circular title graphic." } %}
Influencer/presenter
{% endfigure %}
{% endinformInspire %}

## Inform inspire with flex container, 5 items and list

{% informInspire { contentClasses: 'app-inform-inspire__content--flex app-inform-inspire__content--flex-5-items', list: ['black and white', 'dark shade', 'Primary blue', 'tonal colour', 'companion colour'], listLabel: 'Colour use options (from left to right):' } %}
![TODO](./tone-black-and-white.png)

![TODO](./tone-dark-shade.png)

![TODO](./tone-primary-blue.png)

![TODO](./tone-tonal-colour.png)

![TODO](./tone-companion-colour.png)
{% endinformInspire %}
