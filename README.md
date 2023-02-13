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

### 提交规范

```shell
(revert: )?(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)
```

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
