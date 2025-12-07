import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  // Vue recommended rules (includes parser setup)
  ...pluginVue.configs['flat/recommended'],

  // TypeScript support for Vue
  ...vueTsEslintConfig(),

  // Prettier integration
  prettierConfig,

  // Custom rules for all files
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // Unused imports cleanup
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Console/debugger warnings in production
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },

  // Vue-specific customizations
  {
    files: ['**/*.vue'],
    rules: {
      // Allow multiple template roots (Vue 3 feature)
      'vue/no-multiple-template-root': 'off',

      // Template formatting
      'vue/html-indent': ['warn', 2, { attribute: 1, baseIndent: 1 }],
      'vue/max-attributes-per-line': [
        'warn',
        { singleline: 3, multiline: { max: 1 } },
      ],
      'vue/html-self-closing': [
        'warn',
        {
          html: { void: 'any', normal: 'always', component: 'always' },
          svg: 'any',
          math: 'any',
        },
      ],

      // Prefer Composition API style
      'vue/component-api-style': ['warn', ['script-setup', 'composition']],

      // Enforce component naming conventions
      'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
    },
  },

  // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Handled by unused-imports
      '@typescript-eslint/explicit-function-return-type': 'off', // Too strict for Vue templates
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'dev-dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
    ],
  },
]
