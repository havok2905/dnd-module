# DND Module

A library of React components for the purpose of building dnd modules

## Documentation

https://havok2905.github.io/dnd-module

## Dependencies

-   node >= 8.12.0
-   npm >= 6.4.1

## Setup

-   npm install
-   npm run storybook

## Commands

-   _npm run build_ Compiles the current library into a distributable package
-   _npm run eslint_ Will run eslint on the project
-   _npm test_ Runs all tests with aggregate test coverage
-   _npm run unit-test-coverage_ Runs all unit tests with coverage
-   _npm run enzyme-test-coverage_ Runs all enzyme tests with coverage
-   _npm run storybook_ Builds the storybook project and runs on localhost
-   _npm run build-storybook_ Builds the storybook and outputs it to a .out dir
-   _npm run deploy-storybook_ Deploys the result of _build-storybook_ to gh-pages
-   _npm run stylelint_ Runs stylelint

## Release

-   Run a dist build
-   Set a new versioned, tagged branch, using semantic versioning standards. https://semver.org/
-   Make a PR into master
-   Publish master to NPM
