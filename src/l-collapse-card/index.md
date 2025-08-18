---
title: LCollapseCard
toc: content
---

# LCollapseCard

折叠卡片

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 折叠触发位置为 header

<code src='./demos/Demo3.tsx'></code>

### 受控

<code src='./demos/Demo2.tsx'></code>

## API

:::warning{title=注意}

- 自 `2.1.29` 起使用此组件时, antd 的版本应 `>=5.6.0`

  :::

```ts
import { LCollapseCard } from 'lighting-design';
```

### 基础属性

| 属性名           | 描述                        | 类型                                                                                                                                                                  | 默认值 |
| ---------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| defaultCollapsed | 初始化是否展开              | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49)       | -      |
| collapsed        | 受控是否展开                | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49)       | -      |
| onCollapsed      | 受控展开时的回调            | `(bool: boolean) => void`                                                                                                                                             | -      |
| forceRender      | 初始是否渲染折叠的 DOM 结构 | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49)       | -      |
| title            | 标题                        | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495)       | -      |
| extra            | 右上角额外内容              | [ReactNode](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L484-L495)       | -      |
| contentClassName | 内容类名                    | [string](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts#L407-L407)          | -      |
| contentStyle     | 内容样式                    | [CSSProperties](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L2591-L2600) | -      |

### 内容属性

| 属性名       | 描述                               | 类型                                                                     | 默认值 |
| ------------ | ---------------------------------- | ------------------------------------------------------------------------ | ------ |
| contentProps | antd 折叠卡片的 items 每一项的属性 | `Omit<NonNullable<CollapseProps['items']>[number], 'children' \| 'key'>` | -      |

### Ant Design Collapse 属性

LCollapseCard 继承了 Ant Design Collapse 的大部分属性，但排除了以下属性：

- [items](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L510-L510)
- `activeKey`
- `defaultActiveKey`
- [onChange](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/@types+react@18.3.20/node_modules/@types/react/index.d.ts#L2421-L2421)
- `accordion`

可用的 Ant Design Collapse 属性包括：

| 属性名               | 描述                                     | 类型                                                                                                                                                            | 默认值     |
| -------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| bordered             | 是否有边框                               | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `true`     |
| ghost                | 是否为透明无边框背景                     | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `false`    |
| size                 | Collapse 的尺寸                          | `'large' \| 'middle' \| 'small'`                                                                                                                                | `'middle'` |
| expandIcon           | 自定义切换图标                           | `(panelProps) => ReactNode`                                                                                                                                     | -          |
| expandIconPosition   | 设置图标位置                             | `'start' \| 'end'`                                                                                                                                              | `'start'`  |
| collapsible          | 所有子面板是否可折叠或指定可折叠触发区域 | `'header' \| 'icon' \| 'disabled'`                                                                                                                              | -          |
| destroyInactivePanel | 销毁折叠隐藏的面板                       | [boolean](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/node_modules/.pnpm/better-mock@0.3.7/node_modules/better-mock/typings/index.d.ts#L49-L49) | `false`    |
