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
添加子包间依赖，@cube/components依赖@cube/util
yarn workspace @cubee/components add @cubee/utils@1.0.0
>必须添加版本号 不然会报错（lerna添加不会）
