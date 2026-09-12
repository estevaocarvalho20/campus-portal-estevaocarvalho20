import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: [ `**/*.js` ],
    languageOptions: { sourceType: `module` },
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.vitest },
    },
  },
  {
    rules: {
      semi: [ 2, `always` ],
      "array-bracket-spacing": [ 2, `always` ],
      "no-const-assign": 2,
      "no-var": 2,
      indent: [ 2, 2 ],
      quotes: [ 2, `backtick` ],
      "no-plusplus": 2,
      "global-require": 2,
    },
  },
];
