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

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldNames | 配置字段 label 为展示名称的字段 ,value.value 为字段的值 | `{ label: string; value: string; }` | `{ label: 'label' ,value: 'value' } ` |
| children | children 会接受到 mode open,setOpen,value,onChange | `ReactElement` | `-` |
| size | 选择框大小 | `'small' \| 'middle'\|'large'` | `'middle'` |
| allowClear | 支持清除 | `boolean` | `true` |
| placement | 选择框弹出的位置 | `bottomLeft bottomRight topLeft topRight` | `bottomLeft` |
| disabled | 禁用 | `boolean` | `false` |
| placeholder | placeholder | `string` | `请选择` |
| dropdownClassName | 弹出层类名 | `string` | `-` |
| dropdownWidth | 弹出层 宽度 | `number` | `500` |
| dropdownStyle | 弹出层 style | `CSSProperties` | `-` |
| width | 组件宽度 | `number` | `250` |
| style | 组件样式 | `CSSProperties` | `-` |
| open | 是否展开下拉菜单 | `boolean` | `-` |
| clearIcon | 自定义的多选框清空图标 | `ReactNode` | `-` |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上 | `function(triggerNode)` | `() => document.body ` |
| suffixIcon | 自定义的选择框后缀图标 | `ReactNode` | `-` |
| value | 值 | `{ label: string; value: string\| string[]; }` | `-` |
| mode | 设置模式为多选或单选 | `'checkbox' \| 'radio'` | `radio` |
| onDropdownVisibleChange | 展开下拉菜单的回调 | `function(open) ` | `-` |
| onChange | value 变化时，调用此函数 | `function(value) ` | `-` |
