import { theme } from 'antd';
import { defineConfig } from 'dumi';

const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

const isDev = process.env.NODE_ENV === 'development';

const logo = isDev ? '/logo.png' : '/lighting-design/logo.png';
const targets = isDev ? void 0 : { ie: 11, chrome: 80 };

export default defineConfig({
  themeConfig: {
    name: 'Lighting Design',
    logo,
    footer: 'Open-source MIT Licensed | Copyright © 2021',
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
          children: [
            {
              title: '组件总览',
              link: '/components',
            },
          ],
        },
        {
          title: '基础组件',
          children: [
            {
              title: 'LCaptchaButton-按钮倒计时',
              link: '/components/captcha-button',
            },
            {
              title: 'LFileViewer-文件预览器',
              link: '/components/file-viewer',
            },
            {
              title: 'LNumberRoll-数值加载器',
              link: '/components/number-roll',
            },
            {
              title: 'LTrigger-弹出选择',
              link: '/components/Trigger',
            },
            {
              title: 'LColorPick-颜色选择',
              link: '/components/Color-Pick',
            },
            {
              title: 'LCardGroup-卡片选择',
              link: '/components/card-group',
            },
            {
              title: 'LTagGroup-标签选择',
              link: '/components/tag-group',
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
          ],
        },
        {
          title: '数据展示',
          children: [
            {
              title: 'LTable - 高级表格',
              link: '/components/table',
            },
            {
              title: 'LCollapseCard-折叠卡片',
              link: '/components/collapse-card',
            },
          ],
        },
      ],
    },
  },

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
  lessLoader: {
    modifyVars: mapToken,
  },
  targets,
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  outputPath: 'docs-dist',
  favicons: isDev ? ['/logo.png'] : ['/lighting-design/logo.png'],

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
