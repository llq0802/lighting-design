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

### 异步请求

<code src='./demos/Demo3.tsx'></code>

### 依赖更新自动请求

<code src='./demos/Demo2.tsx'></code>

### API

```ts
import { LFormItemCascader } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

除了以下参数， 还包含 [LFormItemSelect](/components/form-item-select#api) 的 `autoRequest` `request` `requestOptions` `refreshDeps` `spin` `actionRef` `variant`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数           | 说明                                                           | 类型                                                            | 默认值 |
| -------------- | -------------------------------------------------------------- | --------------------------------------------------------------- | ------ |
| options        | 数据化配置选项内容                                             | `LCascaderOption[]`                                             | `[]`   |
| showSearch     | 在选择框中显示搜索框                                           | `boolean`                                                       | `-`    |
| multiple       | 支持多选节点                                                   | `boolean`                                                       | `-`    |
| fieldNames     | 自定义字段名                                                   | ` CascaderProps['fieldNames']`                                  | `-`    |
| displayRender  | 选择后展示的渲染函数                                           | ` CascaderProps['displayRender']`                               | `-`    |
| expandTrigger  | 次级菜单的展开方式，可选 'click' 和 'hover                     | ` CascaderProps['expandTrigger']`                               | `-`    |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化 | ` CascaderProps['changeOnSelect']`                              | `-`    |
| loadData       | 用于动态加载选项，无法与 showSearch 一起使用                   | ` CascaderProps['loadData']`                                    | `-`    |
| cascaderProps  | `antd`级联组件 Props                                           | [CascaderProps](https://ant.design/components/cascader-cn/#api) | `-`    |
