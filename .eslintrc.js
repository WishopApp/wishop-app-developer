module.exports = {
  extends: 'react-tools',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // 'linebreak-style': ['error', 'windows'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
