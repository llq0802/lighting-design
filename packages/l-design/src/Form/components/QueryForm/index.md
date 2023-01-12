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

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isSpace | 是否水平紧凑模式 | `boolean` | `false` |
| itemColProps | 普通模式下的 Col 配置 | [ColProps](https://4x.ant.design/components/grid-cn/#Col) | `{ xs: 24, md: 12, lg: 8, xxl: 6 }` |
| submitText | 提交按钮文本 | `ReactNode` | `查询` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| isCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | `true` |
| showColsNumber | 显示的表单控件数量，不能超过控件的总数量，为`0`时不显示全部控件 | `number` | - |

#### 支持响应式

LQueryForm isSpace 为 false 时 下的 itemColProps 默认设置 `{ xs: 24, md: 12, lg: 8, xxl: 6 }` ，可以通过 `itemColProps` 重置。
