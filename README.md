# @fairdataihub/config

![NPM](https://img.shields.io/npm/l/@fairdataihub/config)
![NPM](https://img.shields.io/npm/v/@fairdataihub/config)
![GitHub Workflow Status](https://github.com/fairdataihub/config/actions/workflows/release.yml/badge.svg?branch=main)

A simple list of configs for use in [FAIR Data Innovations Hub](https://github.com/fairdataihub) projects.

```
npm install --save-dev @fairdataihub/config
yarn add -D @fairdataihub/config
```

## How to use

Refer to our documentation for this package here: [@fairdataihub/config](https://dev.fairdataihub.org/general/config.html)

## Getting started

1. `git clone https://github.com/fairdataihub/config.git `
2. `cd config`
3. `npm install`

To enable deployment, you will need to:

1. Setup `NPM_TOKEN` secret in GitHub actions ([Settings > Secrets > Actions](https://github.com/fairdataihub/config/settings/secrets/actions))
2. Give `GITHUB_TOKEN` write permissions for GitHub releases ([Settings > Actions > General](https://github.com/fairdataihub/config/settings/actions) > Workflow permissions)

## Features

Currently supported configs:

- prettier
- eslint
- devmoji
- commitlint

### Typescript

Leverages [esbuild](https://github.com/evanw/esbuild) for blazing fast builds, but keeps `tsc` to generate `.d.ts` files.
Generates two builds to support both ESM and CJS.

Commands:

- `build`: runs typechecking then generates CJS, ESM and `d.ts` files in the `build/` directory
- `clean`: removes the `build/` directory
- `type:dts`: only generates `d.ts`
- `type:check`: only run typechecking
- `type:build`: only generates CJS and ESM

### Tests

This library uses [ava](https://github.com/avajs/ava) and [esbuild-register](https://github.com/egoist/esbuild-register) so that there is no need to compile before the tests start running. The coverage is done through [nyc](https://github.com/istanbuljs/nyc).

Commands:

- `test`: runs ava test runner
- `test:coverage`: runs ava test runner and generates coverage reports

### Format & lint

This project relies on the combination of [eslint](https://github.com/eslint/eslint) — through [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for linting and [prettier](https://github.com/prettier/prettier) for formatting.
It also uses [cspell](https://github.com/streetsidesoftware/cspell) to ensure spelling

Commands:

- `format`: runs prettier with automatic fixing
- `format:check`: runs prettier without automatic fixing (used in CI)
- `lint`: runs eslint with automatic fixing
- `lint:check`: runs eslint without automatic fixing (used in CI)
- `spell:check`: runs spellchecking

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

Commands:

- `cz`: interactive CLI that helps you generate a proper git commit message, using [commitizen](https://github.com/commitizen/cz-cli)
- `semantic-release`: triggers a release (used in CI)
