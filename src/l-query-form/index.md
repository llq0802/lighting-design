---
title: LQueryForm
toc: content
nav:
  path: /components
---

# LQueryForm

基于 `LForm` 扩展的高级查询表单。

## 代码演示

### 基础用法

响应式模式

<code src='./demos/Demo1.tsx'></code>

### 依次排列模式

<code src='./demos/Demo2.tsx'></code>

### 列数

<code src='./demos/Demo6.tsx'></code>

### 修改响应式

<code src='./demos/Demo5.tsx'></code>

### 表单垂直布局

<code src='./demos/Demo4.tsx'></code>

### 展开收起

<code src='./demos/Demo3.tsx'></code>

### 自定义组合

<code src='./demos/demo7.tsx'></code>

## API

:::warning{title=注意}

- `LQueryForm` 的`查询丶重置` 通过 `LForm` 的`submitter`属性配置

- 可通过`itemColProps`配置响应式 , 通过`isSpace`配置水平进紧凑模式

- 通过` LFormItemXXX` 的 `itemColSpan`属性配置单独这一项占额外的数份

:::

```ts
import { LQueryForm } from 'lighting-design';
```

除了以下参数，其余和 [LForm](/components/form#api) 一样。

| 参数                  | 说明                                                                                         | 类型                               | 默认值  |
| --------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------- | ------- |
| isSpace               | 是否水平紧凑模式 (`类似行盒元素依次排列，不足宽则会换行`)                                    | `boolean`                          | `false` |
| isApproachLastItem    | `重置 查询`按钮组是否紧挨着最后的表单项                                                      | `boolean`                          | `false` |
| gap                   | 配置每一项的间隔                                                                             | `RowProps['gutter']`               | `16`    |
| justify               | justify                                                                                      | `RowProps['justify']`              | `-`     |
| isCollapsed           | 默认状态下是否折叠超出的表单项 (不支持动态设置)                                              | `boolean`                          | `true`  |
| rowProps              | rowProps                                                                                     | `RowProps`                         | `-`     |
| showColsNumber        | 显示的表单控件数量，`配置后且不超过控件的总数量就会显示展开/收起按钮`，为`0`时不显示全部控件 | `number`                           | `-`     |
| submitterWrapperStyle | 重置提交按钮的外层容器的样式                                                                 | `CSSProperties`                    | `-`     |
| onCollapsedChange     | 展开/收起的回调                                                                              | `(v:boolean)=>void`                | `-`     |
| column                | 列数, 也可以设置`ColProps`来设置响应式                                                       | `number               \| ColProps` | `4`     |
| items                 | 表单项组成的数组                                                                             | `(v:boolean)=>void`                | `-`     |
