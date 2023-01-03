---
title: LFormTextArea
order: 2
nav:
  order: 2
  path: /components
---

# LFormTextArea

多行输入框

**特点**

- 支持输入框前后插入元素
- 支持禁用空格

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| textAreaProps | `Input.TextArea`或者`Input`的属性 | [InputProps \| InputTextAreaProps](https://4x.ant.design/components/input-cn/#Input.Password) | `-` |
| disabledWhiteSpace | 是否禁用输入空格 | `boolean` | `true` |
