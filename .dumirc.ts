import { theme } from 'antd';
import { defineConfig } from 'dumi';
import sidebar from './sidebar';

const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

const isDev = process.env.NODE_ENV === 'development';

const logo = isDev ? '/logo.png' : '/lighting-design/logo.svg';
const targets = isDev ? void 0 : { ie: 11, chrome: 80 };

export default defineConfig({
  themeConfig: {
    name: 'Lighting Design',
    logo,
    footer:
      'Open-source MIT Licensed | Copyright © 2019-present \n Powered by self',
    socialLinks: {
      github: 'https://github.com/llq0802',
    },
    rtl: true,
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    sidebar,
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
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.ts',
  // },
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
    .dumi-default-header .dumi-default-header-content{
      max-width: initial;
      padding:0 100px;
    }

   #root .dumi-default-doc-layout > main{
      max-width: initial;
      padding:0 100px;
    }
  `,
  ],
});
