module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "require-jsdoc": "off",
    "react/react-in-jsx-scope": "off",
    "new-cap": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
