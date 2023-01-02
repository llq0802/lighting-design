---
title: LFormItemTimePicker
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemTimePicker

时间选择与时间范围选择

**特点**

- 支持`字符串 Moment`格式的日期输入
- 输出时自动转换为字符串格式

**校验顺序**

- 必填为空时提示：`请输入${label}`

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rangePicker | 是否是范围时间选择 | `boolean` | `false` |
| format | 同`antd`时间组件的格式 | `-` | `HH:mm:ss` |
| timePickerProps | `antd`时间组件的 Props | [TimePickerProps](https://4x.ant.design/components/time-picker-cn/#API) | `-` |
