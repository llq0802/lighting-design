import { defineConfig } from 'dumi';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  themeConfig: {
    name: 'lighting-design',
    logo: isDev
      ? '/lighting-design.png'
      : '/lighting-design/lighting-design-192x192.png',
    footer:
      'Open-source MIT Licensed | Copyright © 2023<br />Powered by [llq0802](https://github.com/llq0802)',
    socialLinks: {
      github: 'https://github.com/llq0802',
    },
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    sidebar: {
      '/components': [
        {
          title: '架构设计',
          children: [
            {
              title: 'Components - 组件设计',
              link: 'components',
            },
            {
              title: 'Schema - 通用配置',
              link: '/components/schema',
            },
          ],
        },
        {
          title: '布局',
          children: [
            {
              title: 'ProLayout - 高级布局',
              link: '/components/layout',
            },
            {
              title: 'PageContainer - 页容器',
              link: '/components/page-container',
            },
            {
              title: 'ProCard - 高级卡片',
              link: '/components/card',
            },
            {
              title: 'WaterMark - 水印组件',
              link: '/components/water-mark',
            },
            {
              title: 'StatisticCard - 指标卡',
              link: '/components/statistic-card',
            },
            {
              title: 'CheckCard - 多选卡片',
              link: '/components/check-card',
            },
          ],
        },
        {
          title: '数据录入',
          children: [
            {
              title: 'ProForm - 高级表单',
              link: '/components/form',
            },
            {
              title: 'ProFormFields - 表单项',
              link: '/components/field-set',
            },
            {
              title: 'ProFormList - 数据结构化',
              link: '/components/group',
            },
            {
              title: 'ProFormDependency - 数据联动',
              link: '/components/dependency',
            },
            {
              title: 'Schema Form - JSON 表单',
              link: '/components/schema-form',
            },
            {
              title: ' Query/LightFilter - 筛选表单',
              link: '/components/query-filter',
            },
            {
              title: 'StepsForm - 分步表单',
              link: '/components/steps-form',
            },
            {
              title: 'Modal/Drawer - 浮层表单',
              link: '/components/modal-form',
            },
            {
              title: 'LoginForm/Page - 登录表单',
              link: '/components/login-form',
            },
          ],
        },
        {
          title: '数据展示',
          children: [
            {
              title: 'ProTable - 高级表格',
              link: '/components/table',
            },
            {
              title: 'EditableProTable - 可编辑表格',
              link: '/components/editable-table',
            },
            {
              title: ' DragSortTable - 拖动排序表格',
              link: '/components/drag-sort-table',
            },
            {
              title: 'ProList - 高级列表',
              link: '/components/list',
            },
            {
              title: 'ProDescriptions - 定义列表',
              link: '/components/descriptions',
            },
          ],
        },
      ],
    },
  },

  outputPath: 'docs-dist',
  hash: true,
  ignoreMomentLocale: true,
  favicons: isDev
    ? ['/lighting-design.png']
    : ['/lighting-design/lighting-design.png'],

  styles: [
    `
    .dumi-default-sidebar {
      min-width: 260px;
    }
    .dumi-default-previewer-demo {
      min-height: 120px;
      display: flex;
      overflow: auto;
      flex-direction: column;
    }
    .dumi-default-content-tabs{
      margin: -24px -48px 48px !important;
    }
    
    .dumi-default-header:not([data-static]){
      border-bottom: 1px solid #ddd;
    }
    .dumi-default-header-left {
      min-width: 230px;
      margin-right: 32px;
    }
    .dumi-default-header-left .dumi-default-logo{
      color: #5581a6
    }

  `,
  ],
});
