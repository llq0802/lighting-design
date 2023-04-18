---
title: LQueryForm
toc: content
nav:
  path: /components
---

# LQueryForm

基于 LForm 扩展的高级查询表单。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 修改响应式

<code src='./demos/Demo5.tsx'></code>

### 水平紧凑模式

<code src='./demos/Demo2.tsx'></code>

### 展开收起

<code src='./demos/Demo3.tsx'></code>

### 表单垂直布局

<code src='./demos/Demo4.tsx'></code>

## API

> `LQueryForm` 的`查询丶重置` 通过 `LForm` 的`submitter`属性配置

```ts
import { LQueryForm } from 'lighting-design';
```

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数           | 说明                                                                                         | 类型                                                   | 默认值                                             |
| -------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| isSpace        | 是否水平紧凑模式                                                                             | `boolean`                                              | `false`                                            |
| itemColProps   | 每个控件外层`Col组件`的栅格配置，`isSpace`为`false`时生效                                    | [ColProps](https://ant.design/components/grid-cn/#col) | `{ xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }` |
| isCollapsed    | 默认状态下是否折叠超出的表单项                                                               | `boolean`                                              | `true`                                             |
| showColsNumber | `isCollapsed`为`true`时生效，显示的表单控件数量，不能超过控件的总数量，为`0`时不显示全部控件 | `number`                                               | `-`                                                |

## 支持响应式

`isSpace` 为 `false` 时 下的 `itemColProps` 默认为 `{ xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }`，可以通过 `itemColProps` 修改。
