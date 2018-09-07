// https://eslint.org/docs/user-guide/configuring
module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
    env: {
        browser: true,
        es6: true,
        node: true
	},
	settings: {
		"import/resolve": {
			webpack: {
				config: "build/webpack.base.conf.js"
			}
		}
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: [
		'ecollect-base',
		'plugin:vue/recommended',
	],
	rules: {
		"vue/html-indent": ["error", 'tab', {
			"attribute": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/script-indent": ["error", 'tab', {
			"baseIndent": 1,
			"switchCase": 0,
			"ignores": []
		}],
	},
	overrides: [
		{
			files: ['*.vue'],
		  	rules: {
				indent: 'off'
		  	}
		}
	]
}
