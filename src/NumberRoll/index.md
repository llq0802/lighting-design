---
title: LNumberRoll
toc: content
nav:
  path: /components
---

# LNumberRoll

数值加载或者时间计时

## 代码演示

### 基础用法

<code src="./demos/base.tsx"></code>

### 时间类型

<code src="./demos/date.tsx"></code>

### 改变样式

<code src="./demos/style.tsx"></code>

### 动态数字

<code src="./demos/dynamic.tsx"></code>

### 金额分隔符

<code src="./demos/decimal.tsx"></code>

### 改变大小

<code src="./demos/size.tsx"></code>

## API

:::warning{title=注意}

- 如果要设置高度 请通过 `height` 以保证滚动的计算

- 如果要改变字体样式 请通过 `style` 或者 `className`
  :::

```ts
import { LNumberRoll } from 'lighting-design';
```

|   参数    |                说明                |                类型                |   默认值   |
| :-------: | :--------------------------------: | :--------------------------------: | :--------: |
|   type    |                类型                |         `'date'\|'number'`         | `'number'` |
|  height   |              组件高度              |          `string\|number`          |    `45`    |
|   value   |                 值                 |          `string\|number`          |    `1`     |
| minLength |        最小位数（个位数起）        |              `number`              |    `-`     |
|   scale   |              缩放大小              |              `number`              |    `1`     |
|   speed   |              速度 ms               |              `number`              |  `500ms`   |
|    dot    |            保留几位小数            |              `number`              |    `0`     |
|  symbol   | 分割符号（禁用 "."） 1,000,000,000 |              `string`              |    `-`     |
| className |              容器类名              |              `string`              |    `-`     |
|   style   |              容器样式              |          `CSSProperties`           |    `-`     |
| onFinish  |           动画结束的回调           | `(value:string \| number) => void` |    `- `    |
