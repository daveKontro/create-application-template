module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  // NOTE remove customSyntax and use "npm stylelint:css"
  // if you wish to use .css (see README.md "styles")
  customSyntax: 'postcss-styled-components',
  ignoreFiles: [],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'comment-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
  },
}
