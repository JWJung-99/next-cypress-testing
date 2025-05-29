import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig({
	overrides: [
		{
			files: ['**/*.{js,mjs,cjs,jsx}'],
			plugins: {
				js,
				prettier: 'prettier', // prettier 플러그인 추가
			},
			extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
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
			},
		},
		{
			files: ['**/*.{js,mjs,cjs,jsx}'],
			languageOptions: {
				globals: globals.browser,
			},
		},
		pluginReact.configs.flat.recommended,
	],
});
