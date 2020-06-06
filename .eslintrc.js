module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-tabs": 0,
    "skipBlankLines": 0,
    "ignoreComments": 0,
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-extra-semi": 0, 
  }
}
