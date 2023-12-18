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

### 金额分隔符

<code src="./demos/decimal.tsx"></code>

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

|     参数      |                              说明                              |                类型                |   默认值   |
| :-----------: | :------------------------------------------------------------: | :--------------------------------: | :--------: |
|     type      |                              类型                              |         `'date'\|'number'`         | `'number'` |
|   fontSize    |                         组件的字体大小                         |          `string\|number`          |    `36`    |
|    height     |                           组件的高度                           |          `string\|number`          |    `36`    |
|     value     |                               值                               |          `string\|number`          |    `0`     |
|   minLength   |                      最小位数（个位数起）                      |              `number`              |    `-`     |
|     scale     |                            缩放大小                            |              `number`              |    `1`     |
|     speed     |                        移动速度 单位 ms                        |              `number`              |   `600`    |
|      dot      |                          保留几位小数                          |              `number`              |    `0`     |
|    symbol     |             分割符号`（ 不能使用"." 建议使用","）`             |              `string`              |    `-`     |
|   className   |                            容器类名                            |              `string`              |    `-`     |
|     style     |                            容器样式                            |          `CSSProperties`           |    `-`     |
| itemNumStyle  |                    每一项数值类型滚动的样式                    |          `CSSProperties`           |    `-`     |
| itemCharStyle | 每一项不是数值类型滚动的样式 比如 value 中包函 '.' ':' '-' '/' |          `CSSProperties`           |    `-`     |
|  symbolStyle  |                         分隔符的的样式                         |          `CSSProperties`           |    `-`     |
|   onFinish    |                         动画结束的回调                         | `(value:string \| number) => void` |    `- `    |
