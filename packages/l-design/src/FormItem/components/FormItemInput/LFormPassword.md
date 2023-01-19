---
title: LFormItemPassword
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemPassword

密码输入框

**特点**

- 支持输入框前后插入元素
- 支持禁用粘贴复制操作
- 支持禁用空格
- 支持密码位数校验

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

## 代码演示

### 基础用法

<code src='./demos/Demo3.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| passwordProps | `Input.Password`或者`Input`的属性 | [InputProps \| InputPasswordProps](https://4x.ant.design/components/input-cn/#Input.Password) | `-` |
| disabledWhiteSpace | 是否禁用输入空格 | `boolean` | `true` |
| disabledPaste | 是否禁用粘贴 | `boolean` | `true` |
| disabledCopy | 是否禁用复制 | `boolean` | `true` |
| min | 密码最小位数 | `number` | `8` |
| max | 密码最大位数 | `number` | `16` |
