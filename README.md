# Lighting-Design

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father`,

```bash
$ npm run build
```

<!-- 添加子包间依赖，@cube/components 依赖@cube/util

> 必须添加版本号不然会报错（lerna 添加不会自动添加包的版本号）

```shell
yarn workspace @cubee/components add @cubee/utils@1.0.0
```

使用下面的命令，antd 会被添加到名为 "awesome-package"的包/工作空间中，作为开发依赖（你也可以使用-D 来代替-dev）：

```shell
yarn workspace awesome-package add antd --dev
```

为所有的包添加一个共同的依赖关系，进入项目的根目录并使用-W (或-ignore-workspace-root-check) 标志：

```shell
yarn add packageName -W -D
``` -->

---

title: 让开发更容易 order: 10 sidebar: false hero: title: Lighting-Design desc: 🏆 让中后台开发更简单 actions: - text: 快速上手 Hooks → link: /hooks/start - text: 快速上手 组件库 → link: /guide/get-start features:

- icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr title: 简单易用 desc: 在 Ant Design 上进行了自己的封装，更加易用
- icon: https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg title: Ant Design desc: 与 Ant Design 设计体系一脉相承，无缝对接 antd 项目
- icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/UKqDTIp55HYAAAAAAAAAAAAAFl94AQBr title: 国际化 desc: 提供完备的国际化，与 Ant Design 体系打通
- icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Y_NMQKxw7OgAAAAAAAAAAAAAFl94AQBr title: 预设样式 desc: 样式风格与 antd 一脉相承，无需魔改，浑然天成
- icon: https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr title: 预设行为 desc: 更少的代码，更少的 Bug
- icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg title: TypeScript desc: 使用 TypeScript 开发，提供完整的类型定义文件

## footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by [llq0802](https://github.com/llq0802)

## 🖥 浏览器兼容性

- 现代浏览器和 Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
- [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

### 提交规范

`(revert: )?(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)`

- feat: 添加了个功能
- fix: 修复了一些 bug
- docs: 更新了一下文档
- UI: 修改了一下样式
- build: 项目本地打包
- release: 发布版本
- refactor: 重构代码
- chore: 脚手架配置修改
- dep: 项目依赖包的变动
- workflow: 工作流
- tests: 测试
- types: ts-类型
- perf: 性能优化
- locale: 国际化
