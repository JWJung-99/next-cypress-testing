import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig({
	overrides: [
		{
			files: ['**/*.{js,mjs,cjs,jsx}'],
			plugins: {
				js,
				prettier: 'prettier', // prettier 플러그인 추가
			},
			extends: ['next/core-web-vitals'],
			rules: {
				// 선언되지 않은 변수 또는 임포트 구문 정리 규칙
				'no-undef': 'error',

				// 프리티어 설정
				'prettier/prettier': [
					'error',
					{
						singleQuote: true,
						semi: true,
						tabWidth: 2,
						trailingComma: 'all',
						printWidth: 80,
						bracketSpacing: true,
						arrowParens: 'avoid',
						useTabs: true,
					},
				],

				// cypress 설정
				'cypress/no-unnecessary-waiting': 'off',
			},
		},
		{
			files: ['**/*.{js,mjs,cjs,jsx}'],
			languageOptions: {
				globals: globals.browser,
			},
		},
		eslintPluginPrettier.configs.recommended,
		pluginReact.configs.flat.recommended,
		pluginCypress.configs.recommended,
	],
});
