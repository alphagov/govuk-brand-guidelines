import { defineConfig } from 'html-validate'

export default defineConfig({
  extends: ['html-validate:recommended'],
  rules: {
    // Allow components to set boolean attributes with empty values
    // e.g. using `params.attributes` to set <fieldset hidden="">
    'attribute-boolean-style': 'off',

    // More hassle than it's worth 👾
    'no-trailing-whitespace': 'off',

    // Allow use of roles where there are native elements that would give
    // us that role automatically, e.g. <section> instead of
    // <div role="region">
    //
    // This is mainly needed for links styled as buttons, but we do this
    // in the cookie banner and notification banner too
    'prefer-native-element': 'off',

    // HTML Validate is opinionated about IDs beginning with a letter and
    // only containing letters, numbers, underscores and dashes – which is
    // more restrictive than the spec allows.
    //
    // Relax the rule to allow anything that is valid according to the
    // spec.
    'valid-id': ['error', { relaxed: true }]
  },
  elements: [
    'html5',
    {
      // Allow buttons to omit the type attribute (defaults to 'submit')
      button: {
        attributes: {
          type: { required: false }
        }
      }
    }
  ]
})
