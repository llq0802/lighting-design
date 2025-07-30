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

<code src='./demos/demo.tsx'></code>

## API

```ts
import { LFormItemAutoComplete } from 'lighting-design';
```

包含 [LFormItemSelect](/components/form-item-select#api) 的 `request` `requestOptions` `spin` `actionRef` `options` `fieldNames` `placeholder` `disabled` `variant` `size`

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数              | 说明                     | 类型                                                                    | 默认值 |
| ----------------- | ------------------------ | ----------------------------------------------------------------------- | ------ |
| options           | 数据                     | `AutoCompleteProps['options']`                                          | `-`    |
| autoCompleteProps | `antd`自动补全组件 Props | [AutoCompleteProps](https://ant.design/components/auto-complete-cn#api) | `-`    |
