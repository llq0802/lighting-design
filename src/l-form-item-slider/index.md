---
title: LFormItemSlider
toc: content
nav:
  path: /components
---

# LFormItemSlider

滑动条

## 代码演示

### 基础用法

<code src='./demos/demo.tsx' ></code>

## API

```ts
import { LFormItemSlider } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

|    参数     |      说明       |          类型          | 默认值 |
| :---------: | :-------------: | :--------------------: | :----: |
|  disabled   |      禁用       |       `boolean`        |  `-`   |
|     min     |     最小值      |        `number`        |  `0`   |
|     max     |     最大值      |        `number`        | `100`  |
|    step     | Slider 的 step  | `SliderProps['step']`  |  `1`   |
|    marks    | Slider 的 marks | `SliderProps['marks']` |  `-`   |
| sliderProps | antd 滑块的属性 |     `SliderProps`      |  `-`   |
