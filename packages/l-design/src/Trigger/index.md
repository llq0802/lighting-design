---
title: LTrigger
order: 2
nav:
  order: 2
  path: /components
---

# LTrigger

选择弹出框、弹出任意内容、用于复杂的选择组件。

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx' />

### 在 LForm 中使用

<code src='./demos/Demo2.tsx' />

## API

```ts
import { LTrigger } from 'lighting-design';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 组件宽度 | `number\|string` | `250` |
| fieldNames | 配置字段 label 为展示名称的字段 ,value.value 为字段的值 | `{ label: string; value: string; }` | `{ label: 'label' ,value: 'value' } ` |
| children | children 会接受到 `open`,`setOpen`,`value`,`onChange` | `ReactElement` | `-` |
| size | 选择框大小 | `'small' \| 'middle'\|'large'` | `'middle'` |
| allowClear | 支持清除 | `boolean` | `true` |
| placement | 选择框弹出的位置 | `'bottomLef't 'bottomRight' 'topLeft' 'topRight'` | `'bottomLeft'` |
| disabled | 禁用 | `boolean` | `false` |
| placeholder | placeholder | `string` | `'请选择'` |
| popupClassName | 弹出层类名 | `string` | `-` |
| dropdownWidth | 弹出层宽度 | `number` | `500` |
| dropdownStyle | 弹出层样式 | `CSSProperties` | `-` |
| className | 组件类名 | `string` | `-` |
| style | 组件样式 | `CSSProperties` | `-` |
| open | 是否展开下拉菜单 | `boolean` | `-` |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上 | `function(triggerNode)` | `() => document.body ` |
| suffixIcon | 自定义的选择框后缀图标 | `ReactNode` | `-` |
| value | 值 | `{ label: string; value: string\| string[]; }` | `-` |
| onDropdownOpenChange | 展开下拉菜单的回调 | `function(open) ` | `-` |
| onChange | value 变化时，调用此函数 | `function(value) ` | `-` |
| selectProps | `antd`选择器组件 Props | [SelectProps](https://4x.ant.design/components/select-cn/#API) | `-` |
