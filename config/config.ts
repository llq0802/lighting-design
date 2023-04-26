import { defineConfig } from 'dumi';
import menus from './menus';

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const version = 'v1';
const publicPath = isDev ? '/' : `/lighting-design/${version}/`;
// const outputPath = `docs-dist/${version}`;
const outputPath = version;

const logo = `${publicPath}lighting-design.png`;
const favicon = logo;

const configs = defineConfig({
  outputPath,
  targets: isDev
    ? undefined
    : {
        ie: 11,
      },
  webpack5: {},
  hash: true,
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    // type: isDev ? 'none' : 'all',
    type: 'none',
    exclude: ['typeit-react', 'typeit'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
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
  ],
  metas: [
    {
      name: 'keywords',
      content: 'Lighting-Design, lighting-design, lightd, antd, react组件库',
    },
    {
      name: 'description',
      content: '🍙 让中后台开发更简单',
    },
  ],
  base: publicPath,
  history: {
    type: 'hash',
  },
  title: 'Lighting Design',
  favicon,
  logo,
  mode: 'site',
  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/llq0802/lighting-design',
    },
  ],
  menus,
  // more config: https://d.umijs.org/config
});

if (!isDev) {
  configs.chunks = ['vendors', 'umi'];
  configs.chainWebpack = function (config, { webpack }) {
    config.merge({
      plugin: {
        MomentLocalesPlugin: {
          plugin: MomentLocalesPlugin,
          args: [{ localesToKeep: ['zh-cn'] }],
        },
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  };
}
// if (!isDev) {
//   configs.chunks = ['vendors', 'umi'];
//   configs.chainWebpack = function (config: any, { webpack }) {
//     config.merge({
//       optimization: {
//         minimize: true,
//         splitChunks: {
//           cacheGroups: {
//             vendor: {
//               test: /node_modules/,
//               chunks: 'all',
//               name: 'vendors',
//               priority: -10,
//               enforce: true,
//             },
//           },
//         },
//       },
//     });
//   };
// }

export default configs;
