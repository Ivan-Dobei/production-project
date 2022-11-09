module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
      'jest': true,
   },
   'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
   ],
   'overrides': [
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module',
   },
   'plugins': [
      'react',
      '@typescript-eslint',
      'react-hooks',
   ],
   'rules': {
      'no-console': 'warn',
      'prefer-const': 'error',
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'indent': ['warn', 3],
      'react/jsx-indent': ['warn', 3],
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', {'code': 120, 'ignoreComments': true}],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['warn', 'always'],
      'no-undef': 'off',
      'react/display-name': 'warn',
      '@typescript-eslint/no-var-requires': 0,
      'no-use-before-define': ['error', { 'variables': false }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
   },
};
