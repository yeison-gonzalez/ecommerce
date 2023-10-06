module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: "es2020",
    tsconfigRootDir: __dirname,
    project: `./tsconfig.json`,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};