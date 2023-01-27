---
title: LFormItemSwitch
order: 2
nav:
  order: 2
  path: /components
---

# FormItemSwitch

需要表示开关状态/两种状态之间的切换时

**特点**

- 支持背景颜色的设置

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

## API

```ts
import { FormItemSwitch } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| checkedBg | 打开时的背景颜色 | `string` | `-` |
| unCheckedBg | 关闭时的背景颜色 | `string` | `-` |
| switchProps | antd 开关的属性 | [SwitchProps](https://4x.ant.design/components/switch-cn/#API) | `-` |
