import { defineConfig } from 'dumi';

const isDev = process.env.NODE_ENV === 'development';

const configs = defineConfig({
  dynamicImport: {},
  publicPath: isDev ? '/' : '/lighting-design/',
  base: isDev ? '/' : '/lighting-design/',
  title: 'lighting-design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
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

  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '组件总览',
        children: [
          'components.md',
          'Button/index.md',
          'Input/index.md',
          'Spin/index.md',
          // 'components/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
        ],
      },
    ],
    '/hooks': [
      {
        title: 'rc-use-hooks',
        children: ['hooks/start.md'],
      },
      {
        title: 'state',
        children: ['useCallbackState/index.md', 'useLatest/index.md', 'usePrevious/index.md'],
      },
      {
        title: 'effect',
        children: ['useUpdateEffect/index.md'],
      },
      {
        title: 'dom',
        children: ['useClientRect/index.md'],
      },
      {
        title: 'other',
        children: ['useDebounceFn/index.md'],
      },
    ],
  },
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
