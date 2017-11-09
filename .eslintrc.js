module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'standard',
    rules: {
    	'indent': 0,
    	'no-tabs': 0,
    	'eol-last': 0,
        'arrow-parens': 0,
        'no-trailing-spaces': 0,
        'generator-star-spacing': 0,
        'space-before-function-paren': 0,
        'import/extensions': ['error', 'always', {
            'js': 'never',
        }],
        
    }
}