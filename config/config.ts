import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'l-design',
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
      path: 'https://github.com/umijs/dumi',
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

          // 'components/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          // {
          //   title: '按钮',
          //   path: '/components/Button',
          // },
          // {
          //   title: '输入框',
          //   path: '/components/Input',
          // },
        ],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
