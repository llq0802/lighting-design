---
title: LFormItemAddress
toc: content
nav:
  path: /components
---

# LFormItemAddress

地址 (银行卡) 等级联选择与输入

**特点**

- 支持响应式

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

## API

> 地址选择和输入框，该表单项由 2 个表单项组合而成，所以不要配置 `name`，但必须配置 `names`

```ts
import { LFormItemAddress } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数              | 说明                            | 类型                                                             | 默认值                                 |
| ----------------- | ------------------------------- | ---------------------------------------------------------------- | -------------------------------------- |
| names             | 同`Form.Itme`的`name`           | `[string , string]`                                              | `-`                                    |
| options           | 左侧级联组件数据源              | [LCascaderOption](/components/form-item-address#lcascaderoption) | `-`                                    |
| placeholder       | 组件的 placeholder              | `[string , string]`                                              | `['请选择省/市/区', '请输入详细地址']` |
| cascaderProps     | `antd`级联组件 Props            | [CascaderProps](https://ant.design/components/cascader-cn#api)   | `-`                                    |
| inputProps        | `antd`输入框组件 Props          | [InputProps](https://ant.design/components/input-cn#api)         | `-`                                    |
| cascaderFormProps | 级联组件外层`Form.Itme的 Props` | [Form.Itme](https://ant.design/components/input-cn#api)          | `-`                                    |
| inputFormProps    | 输入框外层`Form.Itme的 Props`   | [Form.Itme](https://ant.design/components/input-cn#api)          | `-`                                    |
| cascaderColProps  | 输入框外层`Col 组件的 Props`    | [ColProps](https://ant.design/components/grid-cn#col)            | `{ xs: 24, md: 12, lg: 6, xxl: 8, }`   |
| inputColProps     | 输入框外层`Col 组件的 Props`    | [ColProps](https://ant.design/components/grid-cn#col)            | `{ xs: 24, md: 12, lg: 18, xxl: 16, }` |

### LCascaderOption

```ts
interface LCascaderOption {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```
