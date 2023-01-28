---
title: LFormItemTreeSelect
order: 2
nav:
  order: 2
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

<code src='./demos/Demo1.tsx'>

### 异步请求

<code src='./demos/Demo3.tsx'>

### 依赖更新自动请求

<code src='./demos/Demo2.tsx'>

## API

```ts
import { LFormItemTreeSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

<mark>`depends` 为 LFormItem 组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除或者禁用选择<mark/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 数据化配置选项内容 | `LTreeSelectOption[]` | `[]` |
| request | 请求数据函数 | `(...depends: any[]) => Promise<LTreeSelectOption[]>` | `-` |
| debounceTime | 当依赖项发生变化时重新请求的防抖时间 | `number` | `-` |
| treeCheckable | 显示 Checkbox | `boolean ` | `false` |
| loadData | 异步加载数据 | `function(node)` | `-` |
| spin | 自定义 loading 效果 | [SpinProps](https://4x.ant.design/components/spin-cn/#API) | `-` |
| treeSelectProps | `antd`树选择组件的 Props | [TreeSelectProps](https://4x.ant.design/components/tree-select-cn/#API) | `-` |

### LTreeSelectOption

```ts
export type LTreeSelectOption = {
  value: string;
  title: string;
  placeholder: string;
  children: LTreeSelectOption[];
  disabled: boolean;
  disableCheckbox: boolean;
  selectable: boolean;
  checkable: boolean;
  /** 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标 */
  isLeaf: boolean;
};
```
