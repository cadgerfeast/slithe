/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  extends: [
    'plugin:@stencil-community/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    '/devops',
    '/dist',
    '/node_modules',
    '/www',
    '/stencil.config.ts'
  ],
  rules: {
    '@stencil-community/ban-exported-const-enums': 'off'
  }
}
