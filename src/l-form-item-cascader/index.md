---
title: LFormItemCascader
toc: content
nav:
  path: /components
---

# LFormItemCascader

级联选择框

**特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### API

```ts
import { LFormItemCascader } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

包含 [LFormItemSelect](/components/form-item-select#api) 的 `request` `requestOptions` `spin` `actionRef` `placeholder` `disabled` `variant` `size`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数           | 说明                                                           | 类型                               | 默认值 |
| -------------- | -------------------------------------------------------------- | ---------------------------------- | ------ |
| options        | 数据                                                           | `CascaderProps['options']`         | `-`    |
| showSearch     | 在选择框中显示搜索框                                           | `` CascaderProps['showSearch']` `  | `-`    |
| multiple       | 支持多选节点                                                   | `boolean`                          | `-`    |
| expandTrigger  | 次级菜单的展开方式，可选 'click' 和 'hover'                    | ` CascaderProps['expandTrigger']`  | `-`    |
| fieldNames     | 自定义字段名                                                   | ` CascaderProps['fieldNames']`     | `-`    |
| displayRender  | 选择后展示的渲染函数                                           | ` CascaderProps['displayRender']`  | `-`    |
| optionRender   | 自定义渲染下拉选项                                             | ` CascaderProps['optionRender']`   | `-`    |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化 | ` CascaderProps['changeOnSelect']` | `-`    |
| loadData       | 用于动态加载选项，无法与 showSearch 一起使用                   | ` CascaderProps['loadData']`       | `-`    |
| cascaderProps  | `antd`级联组件 Props                                           | [CascaderProps]                    | `-`    |

[CascaderProps]: https://ant.design/components/cascader-cn/#api
