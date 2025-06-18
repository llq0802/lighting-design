---
title: LFormItemAutoComplete
toc: content
nav:
  path: /components
---

# LFormItemAutoComplete

自动联想输入框

**特点**

- 支持自定义输入组件。

## 代码演示

<!-- <code src='./demos/Demo1.tsx'></code> -->

<code src='./demos/demo.tsx'></code>

## API

```ts
import { LFormItemAutoComplete } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数              | 说明                                  | 类型                                                                        | 默认值      |
| ----------------- | ------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| options           | 数据化配置选项内容                    | `AutoCompleteProps['options']`                                              | `-`         |
| inputRender       | 自定义输入框                          | `() => HTMLInputElement \| HTMLTextAreaElement \| ReactElement<InputProps>` | `<Input />` |
| onSearch          | 搜索补全项的时候调用                  | `function(value)`                                                           | `-`         |
| onSelect          | 被选中时调用，参数为选中项的 value 值 | `function(value, option)`                                                   | `-`         |
| autoCompleteProps | `antd`自动补全组件 Props              | [AutoCompleteProps](https://ant.design/components/auto-complete-cn#api)     | `-`         |
