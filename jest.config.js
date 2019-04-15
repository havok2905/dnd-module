module.exports = {
    verbose: true,
    testMatch: ["**/tests/**/*.test.ts", "**/tests/**/*.test.tsx"],
    collectCoverageFrom: [
        "./src/services/**/*.js",
        "./src/services/**/*.ts",
        "./src/components/**/*.js",
        "./src/components/**/*.jsx",
        "./src/components/**/*.ts",
        "./src/components/**/*.tsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
};
