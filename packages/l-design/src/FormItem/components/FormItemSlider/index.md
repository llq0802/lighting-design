---
title: LFormItemSlider
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemSlider

**特点**

- 支持自定义样式

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

## 代码演示

<code src='./demos/Demo1.tsx' />

## API

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| min | 最小值 | `number` | `0` |
| max | 最大值 | `number` | `100` |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | `1` |
| handleStyle | 圆圈样式 | `CSSProperties` | `-` |
| trackStyle | 移动过的轨道样式 | `CSSProperties` | `-` |
| railStyle | 整个轨道样式 | `CSSProperties` | `-` |
| sliderStyle | Slider 组件根标签样式 | `CSSProperties` | `-` |
| SliderProps | antd 滑块的属性 | [SliderProps](https://4x.ant.design/components/slider-cn/#API) | `-` |
