module.exports = {
    verbose: true,
    testMatch: [
        '**/tests/**/*.test.js'
    ],
    collectCoverageFrom: [
        './services/**/*.js',
        './components/**/*.js',
        './components/**/*.jsx'
    ],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest'
    }
};