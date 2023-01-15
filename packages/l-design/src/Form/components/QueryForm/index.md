---
title: LQueryForm
order: 2
nav:
  order: 2
  path: /components
---

# LQueryForm

基于 LForm 扩展的查询表单。

## 代码演示

### 基础代码

<code src='./demos/Demo1.tsx'>

### 修改响应式

<code src='./demos/Demo5.tsx'>

### 水平紧凑模式

<code src='./demos/Demo2.tsx'>

### 展开收起

<code src='./demos/Demo3.tsx'>

### 表单垂直布局

<code src='./demos/Demo4.tsx'>

## API

```ts
import { LQueryForm } from 'lighting-design';
```

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isSpace | 是否水平紧凑模式 | `boolean` | `false` |
| itemColProps | 每个控件外层`Col组件`的栅格配置，`isSpace`为`false`时生效 | [ColProps](https://4x.ant.design/components/grid-cn/#Col) | `{ xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }` |
| submitText | 提交按钮文本 | `ReactNode` | `查询` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| isCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | `true` |
| showColsNumber | `isCollapsed`为`true`时生效，显示的表单控件数量，不能超过控件的总数量，为`0`时不显示全部控件 | `number` | - |

## 支持响应式

`isSpace` 为 `false` 时 下的 `itemColProps` 默认为 `{ xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }`，可以通过 `itemColProps` 修改。
