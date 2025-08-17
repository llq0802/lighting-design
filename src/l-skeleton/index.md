---
title: LSkeleton
toc: content
---

# LSkeleton

基于 antd.Skeleton 二次封装的骨架屏组件

## 代码演示

### 基础用法

<code src="./demos/demo1.tsx" ></code>

### 横向方向

<code src="./demos/demo2.tsx" ></code>

## API

:::warning{title=注意}

- `itemStyle.backgroundImage` 可自定义动画背景颜色 例如 `backgroundImage: linear-gradient(60deg, rgba(0, 0, 0, 0.08) 20%, rgba(0, 0, 0, 0.18) 32%, rgba(0, 0, 0, 0.07) 60%)`
  :::

```ts
import { LSkeleton } from 'lighting-design';
```

## API

| 参数           | 说明                                       | 类型                                           | 默认值      | 版本 |
| -------------- | ------------------------------------------ | ---------------------------------------------- | ----------- | ---- |
| active         | 是否展示动画效果                           | `boolean`                                      | `true`      |      |
| className      | 容器类名                                   | `string`                                       | `-`         |      |
| count          | 骨架屏元素的数量                           | `number`                                       | `4`         |      |
| firstItemStyle | 第一个骨架屏元素的样式                     | `CSSProperties`                                | `-`         |      |
| gap            | 元素之间的间距                             | `string \| number`                             | `20`        |      |
| itemHeight     | 每个骨架屏元素的高度                       | `string \| number`                             | `-`         |      |
| itemStyle      | 每个骨架屏元素的通用样式                   | `CSSProperties`                                | `-`         |      |
| lastItemStyle  | 最后一个骨架屏元素的样式                   | `CSSProperties`                                | `-`         |      |
| loading        | 是否正在加载中，为 `false` 时展示 children | `boolean`                                      | `true`      |      |
| shape          | 骨架屏元素的形状                           | `'default' \| 'circle' \| 'round' \| 'square'` | `'default'` |      |
| size           | 骨架屏元素的预设大小                       | `'small' \| 'default' \| 'large'`              | `'default'` |      |
| style          | 容器样式                                   | `CSSProperties`                                | `-`         |      |
| vertical       | 是否垂直排列                               | `boolean`                                      | `true`      |      |
| children       | 加载完成后的实际内容                       | `ReactNode`                                    | `-`         |      |
