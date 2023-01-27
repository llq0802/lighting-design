---
title: LFormItemAddress
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemAddress

地址选择与输入

**特点**

- 支持响应式

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

## API

```ts
import { LFormItemAddress } from 'lighting-design';
```

> 地址选择和输入框，该表单项由 2 个表单项组合而成，所以不要配置 name，但必须配置 names

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| names | 同`Form.Itme的name属性` | `[string,string]` | `-` |
| options | 左侧级联组件数据源 | `Option` | `[]` |
| placeholder | 组件的 placeholder | `[string,string]` | `['请选择省/市/区', '请输入详细地址']` |
| cascaderProps | `antd`级联组件 Props | [CascaderProps](https://4x.ant.design/components/cascader-cn/#API) | `-` |
| inputProps | `antd`输入框组件 Props | [InputProps](https://4x.ant.design/components/input-cn/#API) | `-` |
| cascaderFormProps | 级联组件外层`Form.Itme的 Props` | [Form.Itme](https://4x.ant.design/components/input-cn/#API) | `-` |
| inputFormProps | 输入框外层`Form.Itme的 Props` | [Form.Itme](https://4x.ant.design/components/input-cn/#API) | `-` |
| cascaderColProps | 输入框外层`Col组件的 Props` | [ColProps](https://4x.ant.design/components/grid-cn/#Col) | `{ xs: 24, md: 12, lg: 6, xxl: 8, }` |
| inputColProps | 输入框外层`Col 组件的 Props` | [ColProps](https://4x.ant.design/components/grid-cn/#Col) | `{ xs: 24, md: 12, lg: 18, xxl: 16, }` |

#### Option

```ts
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```
