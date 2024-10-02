import bestPractices from './lib/jsRules/best-practices';
import errors from './lib/jsRules/errors';
import es6 from './lib/jsRules/es6';
import imports from './lib/jsRules/imports';
import node from './lib/jsRules/node';
import strict from './lib/jsRules/strict';
import style from './lib/jsRules/style';
import variables from './lib/jsRules/variables';
import tsRules from './lib/tsRules';

// noinspection JSUnusedGlobalSymbols
export const config = {
  js: {
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
