---
title: LFormItemInput
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemInput

输入框

**特点**

- 可配置过滤空格
- 当有 `type` 值时：
  - 失焦校验
  - 自动过滤空格、 `phone` 类型只能输入数字 11 位 、`idCard`类型 18 位

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| inputProps | `Input`的属性 | [InputProps](https://4x.ant.design/components/input-cn/#API) | `-` |
| disabledWhiteSpace | 是否禁用输入空格 | `boolean` | `true` |
| type | `内置输入框类型` | `InputProps['type'] \| 'bankCard' \| 'idCard' \| 'phone'` | `text` |
