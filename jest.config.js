module.exports = {
    verbose: true,
    testMatch: ["**/tests/**/*.test.js"],
    collectCoverageFrom: [
        "./src/services/**/*.js",
        "./src/components/**/*.js",
        "./src/components/**/*.jsx",
        "./src/components/**/*.js",
        "./src/components/**/*.tsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
