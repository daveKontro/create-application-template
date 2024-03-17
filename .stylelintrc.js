module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: [],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'comment-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
  },
}
