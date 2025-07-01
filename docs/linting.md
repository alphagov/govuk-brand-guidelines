# Linting

## Sass

As recommended by the [GDS Way][gds-way-css-linting], Sass files are linted using [stylelint], using the shared GDS configuration [stylelint-config-gds] complemented by some custom rules. Configuration is set in [stylelint.config.js](../stylelint.config.js).

The following npm scripts are available:

- `npm run lint:scss`: Lints all the Sass files in the project
- `npm run lint:scss:cli -- <PATH_TO_FILE_OR_GLOB>`: Lints a specific file (or multiple ones if a glob matches multiple files)

[gds-way-css-linting]: https://gds-way.digital.cabinet-office.gov.uk/manuals/programming-languages/css.html#linting
[stylelint]: https://stylelint.io/
[stylelint-config-gds]: https://github.com/alphagov/stylelint-config-gds/