import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
	// @ts-expect-error: type error with customize()
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: false,
		jsx: false,
	}),
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	...svelte.configs['flat/recommended'],
	{
		files: [
			'ambient.d.ts',
			'non-ambient.d.ts',
			'./types/**/$types.d.ts',
			'../vite.config.js',
			'../vite.config.ts',
			'../src/**/*.js',
			'../src/**/*.ts',
			'../src/**/*.svelte',
			'../tests/**/*.js',
			'../tests/**/*.ts',
			'../tests/**/*.svelte',
		],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
)
