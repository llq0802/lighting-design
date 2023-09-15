---
title: LH5Preview
toc: content
---

# LH5Preview

用于在 PC 端预览手机内容 , 目前支持 `iPhone6` 的尺寸 `375 x 667` 和
`iPhone14Pro` 的尺寸 `428 x 868`

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 等比例缩放

<code src='./demos/Demo2.tsx'></code>

### 嵌套 iframe

<code src='./demos/Demo3.tsx'></code>

### iPhone14Pro

<code src='./demos/Demo4.tsx'></code>

## API

```ts
import { LH5Preview } from 'lighting-design';
```

|    参数     |                 说明                 |             类型              |   默认值    |
| :---------: | :----------------------------------: | :---------------------------: | :---------: |
|    type     |               手机型号               | `'iPhone6' \| 'iPhone14pro'`  | `'iPhone6'` |
| deviceColor | 手机壳颜色 `只在 type='iPhone6'生效` | `'gold' \| 'gray' \| 'white'` |  `'white'`  |
|    scale    |          手机等比例缩放大小          |      `number \| string`       |     `1`     |
|  className  |            组件根标签类名            |           `string`            |     `-`     |
|    style    |            组件根标签样式            |        `CSSProperties`        |     `-`     |
|  children   |                 子项                 |          `ReactNode`          |     `-`     |
