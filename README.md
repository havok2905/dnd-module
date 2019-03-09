# DND Module

A library of React components for the purpose of building dnd modules

## Dependencies

- node >= 8.12.0
- npm >= 6.4.1

## Setup

- npm install
- npm run storybook

## Commands

- *npm test* Runs all tests with aggregate test coverage
- *npm run unit-test-coverage* Runs all unit tests with coverage
- *npm run enzyme-test-coverage* Runs all enzyme tests with coverage
- *npm run lint* Will run eslint on the project
- *npm run storybook* Builds the storybook project and runs on localhost

## New Feature Development

- Create a new branch from master as such feature/<branch-name>
- Ensure all tests pass and are above 80%
- Ensure all linters pass
- Resolve all merge conflicts
- Create a PR to master

## Release

- Set a new versioned, tagged branch, using semantic versioning standards. https://semver.org/
- Make a PR into master
- Publish master to NPM