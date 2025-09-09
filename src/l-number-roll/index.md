---
title: LNumberRoll
toc: content
nav:
  path: /components
---

# LNumberRoll

数值滚动加载或者时间滚动计时

## 代码演示

### 基础用法

<code src="./demos/base.tsx"></code>

### 时间类型

<code src="./demos/date.tsx"></code>

### 改变样式

<code src="./demos/style.tsx"></code>

### 动态数字

<code src="./demos/dynamic.tsx"></code>

### 改变大小

<code src="./demos/size.tsx"></code>

## API

:::warning{title=注意}

- 如果要设置组件的高度请通过 `height` 以保证滚动的计算

- 字体大小必须`小于等于 height`

- 如果要设置字体的其余样式 请通过`className`或`style`或`itemNumStyle`

  :::

```ts
import { LNumberRoll } from 'lighting-design';
```

| 属性          | 说明                                    | 类型                                | 默认值      | 版本 |
| ------------- | --------------------------------------- | ----------------------------------- | ----------- | ---- |
| value         | 数字值或日期字符串                      | `number \| string`                  | `0`         |      |
| type          | 组件类型                                | `'number' \| 'date'`                | `'number'`  |      |
| fontSize      | 字体大小，控制数字的高度                | `number \| string`                  | `36`        |      |
| gap           | 每个数字之间的间隔                      | `number \| string`                  | `0`         |      |
| speed         | 动画速度（单位：毫秒）                  | `number`                            | `500`       |      |
| scale         | 缩放大小                                | `number`                            | `1`         |      |
| rootClassName | 根元素的类名                            | `string`                            | `undefined` |      |
| rootStyle     | 根元素的样式                            | `CSSProperties`                     | `undefined` |      |
| className     | 内容区域的类名                          | `string`                            | `undefined` |      |
| style         | 内容区域的样式                          | `CSSProperties`                     | `undefined` |      |
| itemNumStyle  | 数字项的样式                            | `CSSProperties`                     | `undefined` |      |
| itemCharStyle | 非数字项的样式（如 '.', ':', '-', '/'） | `CSSProperties`                     | `undefined` |      |
| symolStyle    | 分隔符的样式                            | `CSSProperties`                     | `undefined` |      |
| onFinish      | 滚动动画结束的回调函数                  | `(value: number \| string) => void` | `undefined` |      |
