module.exports = {
    verbose: true,
    testMatch: [
        '**/tests/enzyme/**/*.test.js'
    ],
    collectCoverageFrom: [
        './src/services/**/*.js',
        './src/components/**/*.js',
        './src/components/**/*.jsx'
    ],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest'
    }
};