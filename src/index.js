import importPlugin from 'eslint-plugin-import';

import bestPractices from './jsRules/best-practices.js';
import errors from './jsRules/errors.js';
import es6 from './jsRules/es6.js';
import imports from './jsRules/imports.js';
import node from './jsRules/node.js';
import strict from './jsRules/strict.js';
import style from './jsRules/style.js';
import variables from './jsRules/variables.js';
import tsRules from './tsRules/index.js';

// noinspection JSUnusedGlobalSymbols
export const config = {
  js: {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      ...bestPractices,
      ...errors,
      ...es6,
      ...imports,
      ...node,
      ...strict,
      ...style,
      ...variables,
    },
  },
  ts: {
    rules: {
      ...tsRules
    },
  }
};

// noinspection JSUnusedGlobalSymbols
export default {
  config,
};
