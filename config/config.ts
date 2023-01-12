import { defineConfig } from 'dumi';
import menus from './menus';

const isDev = process.env.NODE_ENV === 'development';

const configs = defineConfig({
  // ssr: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  dynamicImport: {},
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
});

if (!isDev) {
  configs.chunks = ['vendors', 'umi'];
  configs.chainWebpack = function (config: any, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default configs;
