module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'],
      },
    ],
    'no-descending-specificity': null,
  },
}
