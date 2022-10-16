# l-design

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

添加子包间依赖，@cube/components 依赖@cube/util yarn workspace @cubee/components add @cubee/utils@1.0.0

> 必须添加版本号 不然会报错（lerna 添加不会）

举个例子，使用下面的命令，react 会被添加到名为 "awesome-package "的包/工作空间中，作为开发依赖（你也可以使用-D 来代替-dev）： yarn workspace awesome-package add react --dev

如果你想为所有的包添加一个共同的依赖关系，进入项目的根目录并使用-W (或-ignore-workspace-root-check) 标志： yarn add some-package -W -D
