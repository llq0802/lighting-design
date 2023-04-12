---
title: LCollapseCard
toc: content
---

# LCollapseCard

折叠卡片

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 受控

<code src='./demos/Demo2.tsx'></code>

## API

```ts
import { LCollapseCard } from 'lighting-design';
```

|       参数       |           说明            |                    类型                     |  默认值  |
| :--------------: | :-----------------------: | :-----------------------------------------: | :------: |
| defaultCollapsed |    初始化是否展开状态     |                  `boolean`                  | `false`  |
|    collapsed     |     受控是否展开状态      |                  `boolean`                  |   `-`    |
|   collapsible    |        是否能展开         |                  `boolean`                  |  `true`  |
|   forceRender    | 被隐藏时是否渲染 DOM 结构 |                  `boolean`                  | `false`  |
|      ghost       |    使面板透明且无边框     |                  `boolean`                  | `false`  |
|     bordered     |     带边框风格的面板      |                  `boolean`                  |  `true`  |
|  destroyContent  |    销毁折叠隐藏的面板     |                  `boolean`                  | `false`  |
| collapsePosition |       设置图标位置        |               `left \| right`               | `right`  |
|      title       |           标题            |                 `ReactNode`                 |   `-`    |
|      extra       |      右上角额外内容       |                 `ReactNode`                 |   `-`    |
|       size       |         组件大小          |         `large \| middle \| small`          | `middle` |
|    className     |         容器类名          |                  `string`                   |   `-`    |
|      style       |        组件根样式         |               `CSSProperties`               |   `-`    |
| contentClassName |     展开时的内容类名      |                  `string`                   |   `-`    |
|     children     |         内容组件          |                 `ReactNode`                 |   `-`    |
|    expandIcon    |      自定义切换图标       | `(props: Record<string, any>) => ReactNode` |   `- `   |
|   onCollapsed    |     受控展开时的回调      |          `(bool: boolean) => void`          |   `- `   |
