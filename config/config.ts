import { defineConfig } from 'dumi';
import menus from './menus';
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const configs = defineConfig({
  // ssr: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
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
      content: 'Lighting-Design, lighting-design',
    },
    {
      name: 'description',
      content: '🍙 让中后台开发更简单',
    },
  ],
  dynamicImport: {},
  hash: true,
  publicPath: isDev ? '/' : '/lighting-design/',
  base: isDev ? '/' : '/lighting-design/',
  title: 'Lighting-Design',
  favicon: 'https://llq0802.github.io/180x180.png',
  logo: 'https://llq0802.github.io/android-chrome-192x192.png',
  outputPath: 'docs-dist',
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

  // mfsu: {},
  // webpack5: {},
});

configs.chunks = ['vendors', 'umi'];
configs.chainWebpack = function (config: any, { env, webpack, createCSSRule }: any) {
  // console.log('config ', config);
  // console.log('env ', env);
  // console.log('webpack ', webpack);
  // console.log('createCSSRule ', createCSSRule);
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
            test({ resource }: any) {
              return /[\\/]node_modules[\\/]/.test(resource);
            },
            priority: 10,
          },
        },
      },
    },
  });
};
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
