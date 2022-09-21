import { defineConfig } from 'father';
import { readdirSync } from 'fs';
import { join } from 'path';

const tailPkgs = readdirSync(join(__dirname, 'packages'))
  .filter((pkg) => pkg.charAt(0) !== '.')
  .map((path) => `packages/${path}/src`);

console.log('tailPkgs', tailPkgs);

export default defineConfig({
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: {
    input: 'packages/l-design/src',
    // output: 'dist/es',
    output: 'packages/l-design/es',
    transformer: 'babel',
    ignores: [],
  },
  cjs: {
    input: 'packages/l-design/src',
    // output: 'dist/es',
    output: 'packages/l-design/lib',
    transformer: 'babel',
    ignores: [],
  },
  // extraBabelPlugins: [
  //   ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  // ],
});
