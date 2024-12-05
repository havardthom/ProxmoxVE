import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from 'eslint-plugin-prettier';

export default [
    {
      files: ['src/**/*.{ts,tsx}'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: './tsconfig.json',
        },
      },
      plugins: {
        '@typescript-eslint': typescriptEslint,
        prettier,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ];