## Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0-rc.6] - 2023-04-25
### Changed
- `@distributedlab/tools` - `EventEmitter` Make emit second parameter optional

## [0.2.0-rc.5] - 2023-04-24
### Fixed
- `@distributedlab/fetcher` - `clone` method
-
### Removed
- `@distributedlab/jac` - Dependency `@distributedlab/jsona`

## [0.2.0-rc.4] - 2023-04-24
### Added
- `@distributedlab/jac` - `deserialize` helper to deserialize JSON API structures
- `@distributedlab/w3p` - Examples and use-cases

### Removed
- `@distributedlab/jac` - Dependency `@distributedlab/jsona`

## [0.2.0-rc.3] - 2023-04-24
## Added
- `root`: Package `@distributedlab/w3p` - wrapper for web3 providers
  - `EVN based`:
    - `MetamaskProvider`
    - `CoinbaseProvider`
  - `Solana based`:
    - `PhantomProvider`
    - `SolflareProvider`
  - `Near based`:
    - `NearProvider`

## Removed
- `root` - Unused `tsconfig.eslint.json`

## [0.2.0-rc.2] - 2023-04-24
### Added
- `@distributedlab/jac` - Re-export `@distributedlab/fetcher` `HTTP_METHODS, HTTP_STATUS_CODES` enums

### Changed
- `all` - Migrate from `tsc` to `swc` to build packages
- `all` - Migrate from `ts-jest` to `swc-jest` to run tests

### Fixed
- `root` - CI prebuild packages to resolve `@distributedlab/fetcher` dependency in the `@distributedlab/jac` package
- `root` - Prevent typedoc from detecting every index file as a module
- `all` - Replace type imports with `import type` syntax according to the [SWC tsc migration guide]
- `all` - Set "browser": to "./dist/esm/index.js" to correctly resolve the package by the Webpack
- `all` - Moved exclude tests to the `tsconfig.build.json` file to make ESLint work in the tests

[SWC tsc migration guide]: https://swc.rs/docs/migrating-from-tsc

## [0.2.0-rc.1] - 2023-04-17
### Added
- `@distributedlab/jac` - `@distributedlab/fetcher` dependency

### Removed
- `@distributedlab/jac` - `axios` dependency

## [0.2.0-rc.0] - 2023-04-05
### Added
- `root` - "Using in the projects made by create-react-app" section in the `README.md`
- `root`: `apply-version` script to easier bump version
- `root`: Package `@distributedlab/fetcher`
- `@distributedlab/tools`: `BN` `sqrt` method

### Changed
- `all`: Drop support for node < 18 versions

## [0.1.7] - 2023-03-20
### Added
- `@distributedlab/jac` - Example if user use a refresh token functionality

## [0.1.7-rc.1] - 2023-03-17
### Changed
- `@distributedlab/jac` - migrate from `jsona` dependency to the `@distributedlab/jsona`

## [0.1.7-rc.0] - 2023-03-17
### Added
- `root`: Contributing guide in the `README.md` file
- `root`: Table of contents in the `README.md` file

### Changed
- `@distributedlab/jac` - `jsona` dependency moved to the `peerDependencies` and `devDependencies`

## [0.1.6] - 2023-03-11
### Added
- `@distributedlab/tools`: `BN` `isEqualTo` compare

### Changed
- `@distributedlab/tools`: `BN` comparing methods

### Fixed
- `@distributedlab/tools`: `BN` return formatted string for value getter instead toString method

## [0.1.5] - 2023-03-09
### Fixed
- `@distributedlab/tools`: `BN` drop unexpected decimal part during multiplication and division

## [0.1.4] - 2023-03-08
### Added
- `@distributedlab/tools`: `BN.clone()` method to safely clone `BN` instance

### Changed
- `@distributedlab/tools`: `BN.valueOf()` method refactored to `value` getter
- `@distributedlab/tools`: `BN.toString()` now return human-readable string
- `@distributedlab/tools`: `BN` types moved to the related directories

### Fixed
- `@distributedlab/tools`: `BN` the exponent value at which `BigNumber.js` returns exponential notation set to 256

## [0.1.3] - 2023-03-07
### Added
- `@distributedlab/tools`: `BN.WEI_DECIMALS` value

### Fixed
- `@distributedlab/tools`: `BN.MAX_UINT256` value

## [0.1.2] - 2023-03-07
### Added
- `@distributedlab/tools`: `isZero` getter to `BN` class

## [0.1.1] - 2023-03-07
### Fixed
- `root`: Links to the packages in the `README.md` file
- `@distributedlab/tools`: Export `BN` class

## [0.1.0] - 2023-03-06
### Added
- `CHANGELOG.md` file
- `root`: `package.json`, `.editorconfig`, `.gitattributes`, `.gitignore` initial files
- `root`: Yarn Berry
- `root`: Jest and configuration files
- `root`: Prettier, ESLint and configuration files
- `root`: Git hooks with Yorkie
- `root`: TypeScript and configuration files
- `root`: TypeDoc and configuration file
- `root`: `@distributedlab/tools` package particularly moved from the [old repo] `@distributedlab/utils` package
- `root`: `@distributedlab/jac` package moved from the [old repo] `@distributedlab/json-api-client` package
- `root`: GitHub Actions
- `all`: Build to CommonJS and ES modules
- `all`: `tsc-alias` package to use aliases in TypeScript
- `root`: `yarn rsc` Release Sanity Check script
- `root`: Rollup and configuration file to build packages for CDN
- `@distributedlab/tools`: Handling big numbers
- `@distributedlab/tools`: Add tests  for time.ts and duration.ts

### Changed****
- `root`: Updated `README.md`

[old repo]: https://github.com/distributed-lab/web-kit-old

[Unreleased]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.6...HEAD
[0.2.0-rc.6]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.5...0.2.0-rc.6
[0.2.0-rc.5]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.4...0.2.0-rc.5
[0.2.0-rc.4]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.3...0.2.0-rc.4
[0.2.0-rc.3]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.2...0.2.0-rc.3
[0.2.0-rc.2]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.1...0.2.0-rc.2
[0.2.0-rc.1]: https://github.com/distributed-lab/web-kit/compare/0.2.0-rc.0...0.2.0-rc.1
[0.2.0-rc.0]: https://github.com/distributed-lab/web-kit/compare/0.1.7...0.2.0-rc.0
[0.1.7]: https://github.com/distributed-lab/web-kit/compare/0.1.7-rc.1...0.1.7
[0.1.7-rc.1]: https://github.com/distributed-lab/web-kit/compare/0.1.7-rc.0...0.1.7-rc.1
[0.1.7-rc.0]: https://github.com/distributed-lab/web-kit/compare/0.1.6...0.1.7-rc.0
[0.1.6]: https://github.com/distributed-lab/web-kit/compare/0.1.5...0.1.6
[0.1.5]: https://github.com/distributed-lab/web-kit/compare/0.1.4...0.1.5
[0.1.4]: https://github.com/distributed-lab/web-kit/compare/0.1.3...0.1.4
[0.1.3]: https://github.com/distributed-lab/web-kit/compare/0.1.2...0.1.3
[0.1.2]: https://github.com/distributed-lab/web-kit/compare/0.1.1...0.1.2
[0.1.1]: https://github.com/distributed-lab/web-kit/compare/0.1.0...0.1.1
[0.1.0]: https://github.com/distributed-lab/web-kit/releases/tag/0.1.0
