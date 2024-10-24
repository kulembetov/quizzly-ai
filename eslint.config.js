import tsParser from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.{ts,tsx}'],  // Apply to TypeScript files
		languageOptions: {
			parser: tsParser,  // Use TypeScript parser
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				React: 'readonly',
			},
		},
		plugins: {
			react: eslintPluginReact,
			'@typescript-eslint': tsEslintPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/no-empty-interface': 'off',
			'react/react-in-jsx-scope': 'off',  // Disable the React in scope rule for React 17+
		},
	},
];
