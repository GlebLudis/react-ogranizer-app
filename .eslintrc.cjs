module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "max-len": ["error", { "ignoreComments": true }],
    "@typescript-eslint/no-unused-vars": "error"
  },
};
