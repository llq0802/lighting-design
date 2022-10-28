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
          ignores: [],
        },
        cjs: {
          input: 'packages/rc-use-hooks/src',
          output: 'packages/rc-use-hooks/lib',
          transformer: 'babel',
          ignores: [],
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
          transformer: 'babel',
          ignores: [],
        },
        cjs: {
          input: 'packages/l-design/src',
          output: 'packages/l-design/lib',
          transformer: 'babel',
          ignores: [],
        },
      });

export default config;
