import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'AirBnBRules',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['eslint-plugin-import', 'confusing-browser-globals'],
      output: {
        globals: {
          importPlugin: 'eslint-plugin-import',
          confusingBrowserGlobals: 'confusing-browser-globals'
        },
      },
    },
  },
  plugins: [
    terser(),
  ]
});
