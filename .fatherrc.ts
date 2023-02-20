import { defineConfig } from 'father';
// more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md

// const tailPkgs = readdirSync(join(__dirname, 'packages'))
//   .filter((pkg) => pkg.charAt(0) !== '.')
//   .map((path) => `packages/${path}/src`);
// console.log('tailPkgs', tailPkgs);

const { BUILD_TYPE } = process.env;

const config =
  BUILD_TYPE === 'hooks'
    ? defineConfig({
        esm: {
          input: 'packages/rc-use-hooks/src',
          output: 'packages/rc-use-hooks/es',
          transformer: 'babel',
        },
        cjs: {
          input: 'packages/rc-use-hooks/src',
          output: 'packages/rc-use-hooks/lib',
          transformer: 'babel',
        },
      })
    : defineConfig({
        extraBabelPlugins: [
          [
            'babel-plugin-import',
            { libraryName: 'antd', libraryDirectory: 'es', style: true },
            'antd',
          ],
          [
            'babel-plugin-import',
            {
              libraryName: '@ant-design/icons',
              libraryDirectory: 'es/icons',
              camel2DashComponentName: false,
            },
            '@ant-design/icons',
          ],

          // [
          //   'babel-plugin-import',
          //   { libraryName: '@ant-design/icons', libraryDirectory: 'es', style: true },
          //   '@ant-design/icons',
          // ],
        ],

        esm: {
          input: 'packages/l-design/src',
          output: 'packages/l-design/es',
          platform: 'browser', // 默认构建为 Browser 环境的产物
          transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
        },
        cjs: {
          input: 'packages/l-design/src',
          output: 'packages/l-design/lib',
          platform: 'node', // 默认构建为 Node.js 环境的产物
          transformer: 'esbuild', // 默认使用 esbuild 以获得更快的构建速度
        },
      });

export default config;
