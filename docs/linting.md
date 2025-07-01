# Linting

## Sass

As recommended by the [GDS Way][gds-way-css-linting], Sass files are linted using [stylelint], using the shared GDS configuration [stylelint-config-gds] complemented by some custom rules. Configuration is set in [stylelint.config.js](../stylelint.config.js).

The following npm scripts are available:

- `npm run lint:scss`: Lints all the Sass files in the project
- `npm run lint:scss:cli -- <PATH_TO_FILE_OR_GLOB>`: Lints a specific file (or multiple ones if a glob matches multiple files)

[gds-way-css-linting]: https://gds-way.digital.cabinet-office.gov.uk/manuals/programming-languages/css.html#linting
[stylelint]: https://stylelint.io/
[stylelint-config-gds]: https://github.com/alphagov/stylelint-config-gds/

## JavaScript

JavaScript files are linted using [ESLint] and [neostandard], configured in [eslint.config.js](../eslint.config.js).

The following npm scripts are available:

- `npm run lint:js`: Lints all the JavaScript files in the project
- `npm run lint:js:cli -- <PATH_TO_FILE_OR_GLOB>`: Lints a specific file (or multiple ones if a glob matches multiple files)

[ESLint]: https://eslint.org/
[neostandard]: https://github.com/neostandard/neostandard

## Prettier

To ensure consistent formatting of files, Prettier is set up in the repository, to run over both Sass and JavaScript, but also Markdown and YAML.

To conform with our usual code style, some adaptations are made in [`.prettierrc.js`](.prettierrc.js)

The following npm scripts are available:

- `npm run lint:prettier`: Formats Sass, JavaScript, Markdown and YAML files in the project
- `npm run lint:prettier:cli -- <PATH_TO_FILE_OR_GLOB>`: Lints a specific file (or multiple ones if a glob matches multiple files)

## Linting on commit

Linting runs automatically before each commit, automatically fixing any error that can be fixed automatically.
In very exceptional cases where you need to bypass linting before committing, add the `--no-verify` option
to your `git commit` command.

This is powered by [Husky] and [lint-staged].

[Husky]: https://typicode.github.io/husky/
[lint-staged]: https://github.com/lint-staged/lint-staged

## Linting on CI

The `.github/workflows/test.yml` GitHub workflow runs all linter on CI to ensure code being merged into `main` is properly formatted and doesn't have automatically findable issues.
