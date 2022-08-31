module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'semi': ['error', 'always'],
		'comma-dangle': [
			'error',
			{
				'arrays': 'never',
				'objects': 'never',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never'
			}
		],
		'arrow-spacing': 'error',
		'no-var': 'error',
		'prefer-const': 'warn',
		'no-template-curly-in-string': 'warn',
		'default-case': 'error',
		'eqeqeq': 'error',
		'no-magic-numbers': 'warn',
		'no-multi-spaces': 'error',
		'no-self-compare': 'warn',
		'no-use-before-define': 'warn',
		'no-unused-vars': 'warn',
		'no-extra-semi': 'error',
		'no-unreachable': 'error',
		'keyword-spacing': 'error',
		'object-curly-spacing': ['warn', 'always'],
		'newline-before-return': 'error',
		'indent': ['error', 'tab'],
		'space-infix-ops': ['error', { 'int32Hint': false }],
		'camelcase': [2, { 'properties': 'always' }],
		'curly': [2, 'all'],
		'block-spacing': [2, 'always'],
		'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
		'comma-spacing': [2, { 'before': false, 'after': true }],
		'eol-last': 'warn',
		'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1 }],
		'no-mixed-spaces-and-tabs': [2],
		'no-trailing-spaces': [2, { 'skipBlankLines': true }],
		'quotes': [2, 'single'],
		'space-unary-ops': [0, { 'words': true, 'nonwords': true }]
	}
};
