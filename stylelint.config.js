module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  "plugins": [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-vendor-prefix': null,
    'media-feature-name-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'function-url-no-scheme-relative': null,
    'number-leading-zero': 'never',
    'selector-list-comma-newline-after': 'always-multi-line',
    'max-nesting-depth': null,
    'selector-max-compound-selectors': null
  }
}