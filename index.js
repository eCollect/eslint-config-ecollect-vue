// https://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    require.resolve("./rules/imports.js"),
    require.resolve("eslint-config-ecollect-base")
  ],
  plugins: ["vue"],
  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true
  },
  settings: {
    "import/resolve": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  rules: {
    "vue/html-indent": [
      "error",
      "tab",
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    "vue/script-indent": [
      "error",
      "tab",
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }
    ],
    "vue/require-default-prop": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off"
      }
    }
  ]
};
