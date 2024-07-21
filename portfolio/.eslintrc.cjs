module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // For TypeScript support, if applicable
    'plugin:prettier/recommended', // Integrate with Prettier
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: [
    'react-refresh',
    'import', // For import/export error checking
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unused-vars': 'warn', // Warns about unused variables
    'no-console': 'warn', // Warns about console.log statements
    'no-debugger': 'error', // Errors on debugger statements
    'import/no-unresolved': 'error', // Errors on unresolved imports
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ], // Ensures a consistent import order
    'prettier/prettier': 'warn', // Enforces Prettier formatting
    'react/prop-types': 'off', // Disables prop-types as we might use TypeScript for type checking
    'react/no-array-index-key': 'warn', // Warns about using array index as key
    'react/jsx-key': 'error', // Errors if key is missing in lists
    'react/jsx-no-duplicate-props': 'error', // Errors on duplicate props
    'react/jsx-no-undef': 'error', // Errors on undefined components
  },
}
