---
title: LFormItemTreeSelect
toc: content
nav:
  path: /components
---

# LFormItemTreeSelect

下拉树形选择器

**特点**

- 支持请求数据获得 `treeData`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值
- 支持异步加载数据

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 通过 `loadData` 每次异步请求

<code src='./demos/Demo3.tsx'></code>

### 通过 `request` 一次性全部请求

<code src='./demos/Demo4.tsx'></code>

### 依赖更新自动请求

<code src='./demos/Demo2.tsx'></code>

## API

:::warning{title=注意}

- `request`与`treeData`同时配置时 `treeData`优先级更高

- `request` 的参数集合`depends` 为 `LFormItem` 组件 `dependencies` 属性依赖项字段的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除或者禁用选择

- 通过 `loadData` 异步请求的数据中必须包含 `isLeaf ( 是否是最终的子节点 )` 字段 , 这样内部渲染时才会知道还有没有子项可渲染 , 避免没有子项可渲染时又显示展开图标
  :::

```ts
import { LFormItemTreeSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数               | 说明                                                                                                                                  | 类型                                                                 | 默认值  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| treeData           | 数据化配置选项内容, 类型与 `treeDataSimpleMode`配置有关                                                                               | `LTreeSelectOption[]`                                                | `[]`    |
| request            | 请求数据函数                                                                                                                          | `(...depends: any[]) => Promise<LTreeSelectOption[]>`                | `-`     |
| requestOptions     | ahook 的 request 的配置项                                                                                                             | `-`                                                                  | `-`     |
| debounceTime       | 当依赖项发生变化时重新请求的防抖时间                                                                                                  | `number`                                                             | `-`     |
| treeDataSimpleMode | 使用简单格式的 treeData， (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， pId 是父节点的 id) | `TreeSelectProps['treeDataSimpleMode'] `                             | `false` |
| treeCheckable      | 显示 Checkbox                                                                                                                         | `boolean `                                                           | `false` |
| loadData           | 异步加载数据                                                                                                                          | `function(node)`                                                     | `-`     |
| spin               | 自定义 loading 效果                                                                                                                   | [SpinProps](https://ant.design/components/spin-cn/#api)              | `-`     |
| treeSelectProps    | `antd`树选择组件的 Props                                                                                                              | [TreeSelectProps](https://ant.design/components/tree-select-cn/#api) | `-`     |
| actionRef          | 配置 request 时 useRequest 的全部返回值                                                                                               | `LFormItemActionRef`                                                 | `-`     |

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
