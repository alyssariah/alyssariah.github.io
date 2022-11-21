module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['node_modules'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        quoteProps: 'consistent',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
