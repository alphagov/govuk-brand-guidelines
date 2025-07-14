---
order: 2
title: Web
---

# Web

## Web palette

Use these colours for supporting materials like illustrations, or in custom components where appropriate.

To reference colours from the palette directly you should use the `govuk-colour` function. For example, colour: `govuk-colour("blue")``.

Avoid using the palette colours if there is a Sass variable that is designed for your context. For example, if you are styling the error state of a component you should use the `$govuk-error-colour` Sass variable rather than `govuk-colour("red")`.

<!-- It was easier to copy this order, but we'd probably want to bunch them per colour -->

Primary Blue
RGB 29 112 184
#1D70B8

Primary Green
RGB 17 135 90
#11875A

Primary Teal
RGB 186 74 255
#158187

Primary Purple
RGB 84 49 159
#54319F

Primary Magenta
RGB 202 53 124
#CA357C

Primary Red
RGB 202 53 53
#CA3535

Primary Orange
RGB 244 119 56
#F47738

Primary Yellow
RGB 255 221 0
#FFDD00

Primary Brown
RGB 153 112 74
#99704A

Black
RGB 11 12 12
#0B0C0C



Blue Tint 25%
RGB 86 148 202
#5694CA

Green Tint 25%
RGB 77 165 131
#4DA583

Teal Tint 25%
RGB 80 161 165
#50A1A5

Purple Tint 25%
RGB 127 101 183
#7F65B7

Magenta Tint 25%
RGB 215 104 157
#D7689D

Red Tint 25%
RGB 215 104 104
#D76868

Orange Tint 25%
RGB 247 153 106
#F7996A

Yellow Tint 25%
RGB 255 230 64
#FFE640

Brown Tint 25%
RGB 179 148 119
#B39477

Black Tint 25%
RGB 72 73 73
#484949



Blue Tint 50%
RGB 142 184 220
#8EB8DC

Green Tint 50%
RGB 136 195 173
#88C3AD

Teal Tint 50%
RGB 138 192 195
#8AC0C3

Purple Tint 50%
RGB 170 152 207
#AA98CF

Magenta Tint 50%
RGB 229 154 190
#E59ABE

Red Tint 50%
RGB 229 154 154
#E59A9A

Orange Tint 50%
RGB 250 187 156
#FABB9C

Yellow Tint 50%
RGB 255 238 128
#FFEE80

Brown Tint 50%
RGB 204 184 165
#CCB8A5

Black Tint 50%
RGB 133 134 134
#858686



Blue Tint 80%
RGB 210 226 241
#D2E2F1

Green Tint 80%
RGB 231 243 238
#CFE7DE

Teal Tint 80%
RGB 208 230 231
#D0E6E7

Purple Tint 80%
RGB 221 214 236
#DDD6EC

Magenta Tint 80%
RGB 244 215 229
#F4D7E5

Red Tint 80%
RGB 244 215 215
#F4D7D7

Orange Tint 80%
RGB 253 228 215
#FDE4D7

Yellow Tint 80%
RGB 255 248 204
#FFF8CC

Brown Tint 95%
RGB 250 248 246
#FAF8F6

Black Tint 80%
RGB 206 206 206
#CECECE



Blue Tint 95%
RGB 244 248 251
#F4F8FB

Green Tint 95%
RGB 243 249 247
#F3F9F7

Teal Tint 95%
RGB 243 249 249
#F3F9F9

Purple Tint 95%
RGB 246 245 250
#F6F5FA

Magenta Tint 95%
RGB 252 245 248
#FCF5F8

Red Tint 95%
RGB 252 245 245
#FCF5F5

Orange Tint 95%
RGB 254 248 245
#FEF8F5

Yellow Tint 95%
RGB 255 253 242
#FFFDF2

Black Tint 95%
RGB 243 243 243
#F3F3F3


<!-- under blue -->

Blue Shade 50%
RGB 15 56 92
#0F385C

<!-- under teal -->

Accent Teal
RGB 0 255 224
#00FFE0

<!-- under black -->

White
RGB 255 255 255
#FFFFFF


### Web functional colours

If you are using GOV.UK Frontend or the GOV.UK Prototype Kit, use the [Sass variables](https://frontend.design-system.service.gov.uk/sass-api-reference/#colours) provided rather than copying the hexadecimal (hex) colour values. For example, use `$govuk-brand-colour` rather than `#1d70b8`.

This means that your service will always use the most recent colour palette whenever you update.

Only use the variables in the context they’re designed for. In all other cases, you should reference the web primary directly. For example, if you wanted to use primary red, you should use `govuk-colour("primary-red")` rather than `$govuk-error-colour`.

#### Text

$govuk-text-colour
Black
RGB 11 12 12
#0B0C0C

$govuk-secondary-text-colour
Black Tint 25%
RGB 72 73 73
#484949

#### Links

$govuk-link-colour
Primary Blue
RGB 29 112 184
#1D70B8

$govuk-link-visited-colour
Primary Purple
RGB 84 49 159
#54319F

$govuk-link-hover-colour
Blue Shade 50%
RGB 15 56 92
#0F385C

$govuk-link-active-colour
Black
RGB 11 12 12
#0B0C0C

#### Border

$govuk-border-colour
Black Tint 80%
RGB 206 206 206
#CECECE

$govuk-input-border-colour
Black
RGB 11 12 12
#0B0C0C

#### Focus state

$govuk-focus-colour
Primary Yellow
RGB 255 221 0
#FFDD00

Only use this colour to indicate which element is focused on. For example, when a user tabs to an element with their keyboard.

$govuk-focus-text-colour
Black
RGB 11 12 12
#0B0C0C

#### Error state

$govuk-error-colour
Primary Red
RGB 202 53 53
#CA3535

Use for error messages

#### Success state

$govuk-success-colour
Primary Green
RGB 17 135 90
#11875A

Use for success messages

#### Brand colour

$govuk-brand-colour
Primary Blue
RGB 29 112 184
#1D70B8


### Web palette example

Indicative examples for illustrative purposes only.

TODO: missing image

