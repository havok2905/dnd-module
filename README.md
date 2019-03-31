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

-   _npm test_ Runs all tests with aggregate test coverage
-   _npm run unit-test-coverage_ Runs all unit tests with coverage
-   _npm run enzyme-test-coverage_ Runs all enzyme tests with coverage
-   _npm run lint_ Will run eslint on the project
-   _npm run storybook_ Builds the storybook project and runs on localhost

## New Feature Development

-   Create a new branch from master as such feature/<branch-name>
-   Ensure all tests pass and are above 80%
-   Ensure all linters pass
-   Resolve all merge conflicts
-   Create a PR to master

## Release

-   Run a dist build
-   Set a new versioned, tagged branch, using semantic versioning standards. https://semver.org/
-   Make a PR into master
-   Publish master to NPM
