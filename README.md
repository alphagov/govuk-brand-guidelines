# Brand Guidelines

The Brand Guidelines presents the various elements making the GOV.UK Brand and advises on their usage.

## Run locally

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

Note: You will need the [active LTS (Long-term support)](https://github.com/nodejs/Release#release-schedule) Node.js version for this project (as specified in [.nvmrc](./.nvmrc))

### Clone repository

```shell
git clone git@github.com:alphagov/govuk-brand-guidelines.git

cd govuk-brand-guidelines
```

### Using nvm (optional)

If you work across multiple Node.js projects there's a good chance they require different Node.js and npm versions.

To enable this we use [nvm (Node Version Manager)](https://github.com/creationix/nvm) to switch between versions easily.

1. [Install nvm](https://github.com/creationix/nvm#installation)
2. Run `nvm install` in the project directory (this will use [.nvmrc](./.nvmrc))

### Install npm dependencies

```shell
npm ci
```

### Start a local server

This will tell [Eleventy](https://www.11ty.dev) to build sources, serve pages and watch for changes.
The command will output the local development URL in the terminal (by default <http://localhost:8080>).

```shell
npm start
```

## Build

This will tell Eleventy to build everything and output the compiled code and assets to the `./_site` directory:

```shell
npm run build
```

## Continuous integration

When changes are pushed to GitHub, [Github Actions](https://github.com/alphagov/govuk-brand-guidelines/actions) will:

- lint the files in the repository

If any of these fail, this will be reported in the GitHub status checks interface.

## Licence

Unless stated otherwise, the codebase is released under [the MIT License][mit]. This covers both the codebase and any sample code in the documentation.

The documentation is [© Crown copyright][copyright] and available under the terms of the [Open Government 3.0][ogl] licence.

[mit]: LICENCE
[copyright]: https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/
[ogl]: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
