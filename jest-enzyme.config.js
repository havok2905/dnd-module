module.exports = {
    verbose: true,
    testMatch: ["**/tests/enzyme/**/*.test.tsx"],
    collectCoverageFrom: [
        "./src/services/**/*.js",
        "./src/components/**/*.js",
        "./src/components/**/*.jsx",
        "./src/components/**/*.ts",
        "./src/components/**/*.tsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
