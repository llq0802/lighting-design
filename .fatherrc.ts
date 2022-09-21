import { defineConfig } from 'father';

export default defineConfig({
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: {
    input: 'packages/l-design/src',
    output: 'dist/es',
    // output: 'packages/l-design/dist/es',
    ignores: ['/demo'],
  },
  // extraBabelPlugins: [
  //   ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  // ],
});
