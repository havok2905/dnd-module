module.exports = {
    verbose: true,
    testMatch: [
        "**/tests/**/*.test.js"
    ],
    collectCoverageFrom: [
        './services/**/*.js',
        './components/**/*.js',
        './components/**/*.jsx'
    ],
};