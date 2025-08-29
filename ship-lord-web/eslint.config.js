import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    globals: { window: true, document: true },
    parser: tsParser,
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    prettier: prettierPlugin,
    'react-hooks': reactHooks,
  },
  rules: {
    ...(configPrettier.rules ?? {}),
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
  },
});
