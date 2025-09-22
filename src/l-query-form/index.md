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

<code src='./demos/Demo7.tsx'></code>

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

### 基础属性

| 属性名                | 描述                                                                    | 类型                                                                                                                                                            | 默认值 |
| --------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| items                 | 表单项配置列表                                                          | [LQueryFormItem[]](#lqueryformitem-类型)                                                                                                                        | -      |
| isCollapsed           | 初始状态下是否折叠                                                      | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true` |
| showColsNumber        | 显示多少项，表单项的总数 > showColsNumber 时才会有`折叠/展开`按钮       | [number](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L45-L45)  | -      |
| column                | 列数，默认 4 列，必须是 24 的整数倍，也可以设置 `ColProps` 来设置响应式 | `number \| ColProps`                                                                                                                                            | `4`    |
| gap                   | 配置每一项的间隔                                                        | `RowProps['gutter']`                                                                                                                                            | `16`   |
| justify               | 水平排列方式                                                            | `RowProps['justify']`                                                                                                                                           | -      |
| rowProps              | Row 组件的属性                                                          | `RowProps`                                                                                                                                                      | -      |
| submitterWrapperStyle | 重置提交按钮的外层容器的样式                                            | `React.CSSProperties`                                                                                                                                           | -      |
| collapseClassName     | 展开/收起容器类名                                                       | [string](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts#L407-L407)    | -      |

### 事件回调

| 属性名            | 描述                | 类型                   | 默认值 |
| ----------------- | ------------------- | ---------------------- | ------ |
| onCollapsedChange | 展开/收起事件的回调 | `(v: boolean) => void` | -      |

### LQueryFormItem 类型

items 中每个表单项的配置：

```typescript
type LQueryFormItem =
  | {
      name?: string;
      colProps?: ColProps;
      content: React.ReactNode;
    }
  | React.ReactNode;
```

当使用对象形式配置时：

- [name](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L328-L328): 表单项名称
- `colProps`: Col 组件的属性，用于控制该表单项的列宽等属性
- [content](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L2935-L2935): 表单项内容

当直接传入 ReactNode 时，组件会直接渲染该节点。

### 提交按钮配置 (submitter)

LQueryForm 默认提供了查询表单常用的提交按钮配置，可以通过 `submitter` 属性进行自定义：

| 属性名       | 描述             | 类型                                                                                                                                                            | 默认值       |
| ------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| submitText   | 提交按钮文字     | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'查询'`     |
| resetText    | 重置按钮文字     | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495) | `'重置'`     |
| position     | 按钮排列位置     | `'flex-start' \| 'center' \| 'flex-end' \| number \| string`                                                                                                    | `'flex-end'` |
| gap          | 按钮之间的间距   | `number \| string`                                                                                                                                              | `8`          |
| showReset    | 是否显示重置按钮 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true`       |
| marginBottom | 按钮区域底部间距 | `number \| string`                                                                                                                                              | `24`         |

还可以使用 LForm 支持的所有 submitter 配置项。
