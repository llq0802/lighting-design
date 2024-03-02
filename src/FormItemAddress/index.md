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

<!-- <code src='./demos/Demo1.tsx'></code> -->

<code src='./demos/Demo2.tsx'></code>

## API

>

:::warning{title=注意}

- 该组件项由 2 个表单项组合而成，所以不要配置 `name`，但必须配置 `names`

- 不仅可以当成地址选择组件, 根据业务情况可当成 `公司 银行地址`等, 或者说数据的录入方式为左边符合下拉选择数据 右边符合输入框输入数据的场景

:::

```ts
import { LFormItemAddress } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数              | 说明                            | 类型                                                           | 默认值                                 |
| ----------------- | ------------------------------- | -------------------------------------------------------------- | -------------------------------------- |
| names             | 同`Form.Itme`的`name`           | `[string , string]`                                            | `-`                                    |
| options           | 左侧级联组件数据源              | `CascaderProps['options'] `                                    | `-`                                    |
| placeholder       | 组件的 placeholder              | `[string , string]`                                            | `['请选择省/市/区', '请输入详细地址']` |
| cascaderProps     | `antd`级联组件 Props            | [CascaderProps](https://ant.design/components/cascader-cn#api) | `-`                                    |
| variant           | `CascaderProps['variant']`      | `CascaderProps['variant']`                                     | `-`                                    |
| inputProps        | `antd`输入框组件 Props          | [InputProps](https://ant.design/components/input-cn#api)       | `-`                                    |
| cascaderFormProps | 级联组件外层`Form.Itme的 Props` | [Form.Itme](https://ant.design/components/input-cn#api)        | `-`                                    |
| inputFormProps    | 输入框外层`Form.Itme的 Props`   | [Form.Itme](https://ant.design/components/input-cn#api)        | `-`                                    |
| cascaderColProps  | 级联组件外层`Col 组件的 Props`  | [ColProps](https://ant.design/components/grid-cn#col)          | `{ xs: 24, md: 12, lg: 6, xxl: 8, }`   |
| inputColProps     | 输入框外层`Col 组件的 Props`    | [ColProps](https://ant.design/components/grid-cn#col)          | `{ xs: 24, md: 12, lg: 18, xxl: 16, }` |
