import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  cjs: {
    output: 'dist/lib',
  },
  esm: {
    output: 'dist/es',
  },
});
