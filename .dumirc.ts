import { defineConfig } from 'dumi';
import sidebar from './sidebar';

// const { defaultAlgorithm, defaultSeed } = theme;
// const mapToken = defaultAlgorithm(defaultSeed);

// https://llq0802.github.io
const isDev = process.env.NODE_ENV === 'development';
const version = 'latest';
export const publicPath = !isDev ? `/lighting-design/${version}/` : '/';
const logo = `${publicPath}logo.png`;
const favicons = [`${publicPath}logo.png`];
// const outputPath = `docs-dist/${version}`;
const outputPath = version;

export default defineConfig({
  publicPath,
  base: publicPath,
  themeConfig: {
    name: 'Lighting Design',
    logo,
    footer:
      'Open-source MIT Licensed | Copyright © 2020-present Powered by llq0802',
    socialLinks: {
      github: 'https://github.com/llq0802/lighting-design/tree/v2',
    },
    rtl: true,
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
      { title: 'v1', link: 'https://llq0802.github.io/lighting-design/v1/' },
      {
        title: 'GitHub',
        link: 'https://github.com/llq0802/lighting-design/tree/v2',
      },
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
  // lessLoader: {
  //   modifyVars: mapToken,
  // },
  outputPath,
  favicons,

  styles: [
    `
    .dumi-default-sidebar {
      min-width: 260px;
    }
    .dumi-default-previewer-demo {
      min-height: 60px;
      display: flex;
      overflow: auto;
      flex-direction: column;
      justify-content: center;
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
