---
title: LFormItemDatePicker
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemDatePicker

日期选择与日期范围选择

**特点**

- 支持自定格式输出输入 无需在转化 `(时间戳 字符串 Moment) `
- 动态快捷配置向前、后禁选范围
- 支持`字符串 时间戳 Moment`格式的日期输入
- 输出时自动转换为字符串格式

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

### 日期范围

<code src='./demos/Demo2.tsx'>

### 禁用

<code src='./demos/Demo3.tsx'>

### 时间戳的值类型

<code src='./demos/Demo4.tsx'>

### 限制范围

<code src='./demos/Demo5.tsx'>

## API

```ts
import { LFormItemDatePicker } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dateValueType | 表单获取到的日期格式 | `'string' \| 'number' \| 'moment'` | `'string'` |
| picker | 日期的类型 | `"date" \| "week" \| "month" \| "quarter" \| "year"` | `'date'` |
| format | 同`antd`日期组件的格式 | `配置参考antd日期组件` | `'YYYY-MM-DD'` |
| showTime | 是否展示时间 | `boolean` | `false` |
| rangePicker | 是否是范围日期选择 | `boolean` | `false` |
| disabledDateBefore | 禁用今天的前面的日期 , 为`0`时包括今天 | `number` | `-` |
| disabledDateAfter | 禁用今天的后面的日期 , 为`0`时包括今天 | `number` | `-` |
| pickerProps | `antd`日期组件的 Props | [PickerProps](https://4x.ant.design/components/date-picker-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API) | `-` |
