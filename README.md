# eslint-config-ecollect-vue

This package provides eCollect's Vue.js .eslintrc as an extensible shared config.

The package combines [eCollect's base config](https://github.com/eCollect/eslint-config-ecollect-base) with [the official ESLint plugin for Vue.js](https://github.com/vuejs/eslint-plugin-vue) and applies some eCollect specific rules.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm install --save-dev eslint eslint-config-ecollect-vue
  ```

2. Add `"extends": "ecollect-vue` to your .eslintrc.

## License

Copyright (c) 2018 eCollect AG.
See the [LICENSE](LICENSE) file for license rights and limitations (MIT).