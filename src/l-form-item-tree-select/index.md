---
title: LFormItemTreeSelect
toc: content
nav:
  path: /components
---

# LFormItemTreeSelect

下拉树形选择器

## 代码演示

### 基础用法

<code src='./demos/demo.tsx'></code>

<code src='./demos/Demo1.tsx'></code>

### 通过 `loadData` 每次异步请求

<code src='./demos/Demo3.tsx'></code>

### 通过 `request` 一次性全部请求

<code src='./demos/Demo4.tsx'></code>

## API

:::warning{title=注意}

- 通过 `loadData` 异步请求的数据中必须包含 `isLeaf ( 是否是最终的子节点 )` 字段 , 这样内部渲染时才会知道还有没有子项可渲染 , 避免没有子项可渲染时又显示展开图标
  :::

```ts
import { LFormItemTreeSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

包含 [LFormItemSelect](/components/form-item-select#api) 的 `request` `requestOptions` `spin` `actionRef` `options` `fieldNames` `placeholder` `disabled` `variant` `size`

用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数               | 说明                                                                                                                                      | 类型                                                                 | 默认值  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| treeData           | 数据化配置选项内容, 类型与 `treeDataSimpleMode`配置有关                                                                                   | `TreeSelectProps['treeData']`                                        | `[]`    |
| options            | treeData 别名                                                                                                                             | `TreeSelectProps['treeData']`                                        | `[]`    |
| treeDataSimpleMode | 使用简单格式的 treeData，<br> (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id) | `TreeSelectProps['treeDataSimpleMode'] `                             | `false` |
| showSearch         | 是否可搜索 单选：false 多选：true                                                                                                         | `boolean `                                                           | `-`     |
| multiple           | 是否多选                                                                                                                                  | `boolean `                                                           | `false` |
| treeCheckable      | 显示 Checkbox                                                                                                                             | `boolean `                                                           | `false` |
| loadData           | 异步加载数据                                                                                                                              | `function(node)`                                                     | `-`     |
| fieldNames         | ` TreeSelectProps['fieldNames']`                                                                                                          | ` TreeSelectProps['fieldNames']`                                     | `-`     |
| treeIcon           | ` TreeSelectProps['treeIcon']` fieldNames                                                                                                 | ` TreeSelectProps['treeIcon']`                                       | `-`     |
| treeLine           | ` TreeSelectProps['treeLine']`                                                                                                            | ` TreeSelectProps['treeIcon']`                                       | `-`     |
| treeSelectProps    | `antd`树选择组件的 Props                                                                                                                  | [TreeSelectProps](https://ant.design/components/tree-select-cn/#api) | `-`     |

### LTreeSelectOption

```ts
export type LTreeSelectOption = {
  value: string;
  title: string;
  placeholder?: string;
  children?: LTreeSelectOption[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  selectable?: boolean;
  checkable?: boolean;
  /** 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标 */
  isLeaf?: boolean;
};
```
