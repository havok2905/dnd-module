module.exports = {
    env: {
        browser: true,
        es6: true,
        "jest/globals": true,
        amd: true,
        node: true
    },
    extends: ["plugin:react/recommended", "eslint:recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react", "jest"],
    rules: {
        quotes: [2, "double"]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
