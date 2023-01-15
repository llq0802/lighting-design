---
title: LFormItemNumber
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemNumber

数字输入框

**特点**

- 支持数字输入框前后插入元素
- 返回的值为类型数字
- 自动补零两位 可修改配置

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| numberProps | `InputNumber`的属性 | [InputNumberProps](https://4x.ant.design/components/input-number-cn/#API) | `-` |
