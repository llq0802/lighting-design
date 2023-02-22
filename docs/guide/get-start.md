---
title: 快速开始
order: 2
group:
  path: /
  order: 1
nav:
  title: 指南
  order: 1
  path: /guide
---

## 安装

> 项目中安装 `antd` 的版本 `>=4.23.0`，`v1` 版本暂不支持`antd5.0`，计划 `v2` 版本支持。

```shell
npm i lighting-design

#or

yarn add lighting-design

#or

pnpm add lighting-design

```

### 设置淘宝镜像源

```shell
npm config set registry https://registry.npmmirror.com/

yarn config set registry https://registry.npmmirror.com/

pnpm config set registry https://registry.npmmirror.com/
```

## 使用

```ts
import { LColor } from 'lighting-design';

ReactDOM.render(<LColor />, mountNode);
```

### 按需加载

`lighting-design 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 import { LColor } from 'lighting-design' 就会有按需加载的效果`
