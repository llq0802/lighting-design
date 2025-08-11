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

| 参数           | 说明                                              | 类型                                           | 默认值    |
| :------------- | :------------------------------------------------ | :--------------------------------------------- | :-------- |
| className      | 容器类名                                          | `string`                                       | `-`       |
| style          | 容器样式                                          | `CSSProperties`                                | `-`       |
| count          | 行或列的重复的数量                                | `number`                                       | `4`       |
| active         | 是否需要动画                                      | `boolean`                                      | `true`    |
| vertical       | 是否垂直方向                                      | `boolean`                                      | `true`    |
| loading        | 是否正在 loading                                  | `boolean`                                      | `true`    |
| shape          | 形状                                              | `'default' \| 'circle' \| 'round' \| 'square'` | `default` |
| size           | 预设每一项高度大小, 可用 `itemHeight` 代替        | `'small\|default\|large'`                      | `default` |
| itemHeight     | 每一项的高度                                      | `'number\|string' `                            | `-`       |
| itemStyle      | 每一项的样式                                      | `CSSProperties`                                | `-`       |
| firstItemStyle | 第一项的样式                                      | `CSSProperties`                                | `-`       |
| lastItemStyle  | 最后一项的样式                                    | `CSSProperties`                                | `-`       |
| children       | loading 为 true 展示 LSkeleton, 否则展示 children | `ReactNode`                                    | `-`       |
