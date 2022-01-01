module.exports = {
  extends: ['@zthun/eslint-config'],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
};
