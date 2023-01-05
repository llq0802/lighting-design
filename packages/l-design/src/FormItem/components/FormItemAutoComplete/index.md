---
title: LFormItemAutoComplete
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemAutoComplete

自动联想输入框

**特点**

- 支持自定义输入组件。

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 数据化配置选项内容 | `{ label, value }[]` | `-` |
| renderInput | 自定义输入框 | `() => HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement<InputProps>` | `<Input />` |
| onSearch | 搜索补全项的时候调用 | `function(value)` | `-` |
| onSelect | 被选中时调用，参数为选中项的 value 值 | `function(value, option)` | `-` |
| autoCompleteProps | `antd`自动补全组件 Props | [AutoCompleteProps](https://4x.ant.design/components/auto-complete-cn/#API) | `-` |
