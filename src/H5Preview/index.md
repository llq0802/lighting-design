---
title: LH5Preview
toc: content
---

# LH5Preview

用于在 PC 端预览手机内容 , 目前仅支持 `iPhone6` 的尺寸 `375 x 667`

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 等比例缩放

<code src='./demos/Demo2.tsx'></code>

### 嵌套 iframe

<code src='./demos/Demo3.tsx'></code>

## API

```ts
import { LH5Preview } from 'lighting-design';
```

|    参数     |        说明        |             类型              |  默认值   |
| :---------: | :----------------: | :---------------------------: | :-------: |
| deviceColor |     手机壳颜色     | `'gold' \| 'gray' \| 'white'` | `'white'` |
|    scale    | 手机等比例缩放大小 |      `number \| string`       |    `1`    |
|  className  |   组件根标签类名   |           `string`            |    `-`    |
|    style    |   组件根标签样式   |        `CSSProperties`        |    `-`    |
|  children   |        子项        |          `ReactNode`          |    `-`    |
