---
title: LFormItemTimePicker
toc: content
nav:
  path: /components
---

# LFormItemTimePicker

时间选择与时间范围选择

**特点**

- 支持`字符串` `Dayjs`格式的日期输入
- 输出时自动转换为字符串格式

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

## API

```ts
import { LFormItemTimePicker } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数               | 说明                                        | 类型                                                                 | 默认值       |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------------- | ------------ |
| timeValueType      | 表单获取到的值的类型                        | `'string'` \| `'dayjs'`                                              | `'string'`   |
| disabledHourBefore | 禁用当前时间之前的小时 (`0` 会包括当前小时) | `number`                                                             | `-`          |
| disabledHourAfter  | 禁用当前时间之后的小时 (`0` 会包括当前小时) | `number`                                                             | `-`          |
| rangePicker        | 是否是范围时间选择                          | `boolean`                                                            | `false`      |
| format             | 同`antd`时间组件的格式                      | `string`                                                             | `'HH:mm:ss'` |
| size               | size                                        | `PickerProps['size']`                                                | `-`          |
| disabled           | disabled                                    | `PickerProps['disabled']`                                            | `-`          |
| variant            | 形态变体                                    | `PickerProps['variant']`                                             | `-`          |
| placeholder        | placeholder                                 | `PickerProps['placeholder']`                                         | `-`          |
| disabledMinutes    | 禁用分钟的函数                              | `DisabledMinutes`                                                    | `-`          |
| DisabledSeconds    | 禁用秒的函数                                | `DisabledSeconds`                                                    | `-`          |
| timePickerProps    | `antd`时间组件的 Props                      | [TimePickerProps](https://ant.design/components/time-picker-cn/#api) | `-`          |

### DisabledMinutes

```ts
type DisabledMinutes = (
  selectedHour: number, // 当前选择的小时
  type?: 'start' | 'end', // 面板类型 为空值时为单个面板
) => number[];
```

### DisabledSeconds

```ts
type DisabledSeconds = (
  selectedHour: number, // 当前选择的小时
  selectedMinute: number, // 当前选择的分钟
  type?: 'start' | 'end', // 面板类型 为空值时为单个面板
) => number[];
```
