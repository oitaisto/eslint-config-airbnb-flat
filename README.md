# eslint-config-airbnb-flat

Enhances Airbnb's ESLint config with TypeScript support

This package is an attempt to adapt the JS and TS rules from [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) and [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript) for the new flat config of ESLint.

## Setup

### 1) Install dependencies (and peer dependencies)

```shell
npm install eslint-config-airbnb-flat @typescript-eslint --save-dev
```

### 2) Configure ESLint

Within your `eslint.config.js` file:

```javascript
import tsEslint from 'typescript-eslint';
import airBnBRules from '@oitaisto/eslint-config-airbnb-flat';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      ...airBnBRules.config.js.rules,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslint.parser,
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin
    },
    rules: {
      ...airBnBRules.config.js.rules,
      ...airBnBRules.config.ts.rules,
    },
  },
];
```

### 3) Run ESLint

Open a terminal to the root of your project, and run the following command:

```shell
npx eslint . --ext .js,.jsx,.ts,.tsx
```

ESLint will lint all .js, .jsx, .ts, and .tsx files within the current folder, and output results to your terminal.

You can also get results in realtime inside most IDEs via a plugin.

## License

Open source licensed as MIT
