---
title: LFormItemComposition
toc: content
nav:
  path: /components
---

# LFormItemComposition

地址 (银行卡) 等选择与输入

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

## API

>

:::warning{title=注意}

- `leftProps.isSelect` 为`true`时，`Select`组件的`props` `leftProps.isSelect` 为`false`时，`Cascader`组件的`props`

- `rightProps.isInputNumber` 为`true`时，`Input`组件的`props` `rightProps.isInputNumber` 为`false`时，`InputNumber`组件的`props`

- 不仅可以当成地址选择组件, 根据业务情况可当成 `公司 银行地址`等, 或者说数据的录入方式为左边符合下拉选择数据 右边符合输入框输入数据的场景

:::

```ts
import { LFormItemAddress } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数                         | 说明                                        | 类型                        | 默认值 |
| ---------------------------- | ------------------------------------------- | --------------------------- | ------ |
| variant                      | `CascaderProps['variant']`                  | `CascaderProps['variant']`  | `-`    |
| size                         | `CascaderProps['size']`                     | `CascaderProps['size']`     | `-`    |
| disabled                     | `CascaderProps['disabled']`                 | `CascaderProps['disabled']` | `-`    |
| block                        | 是否占满父容器                              | `boolean`                   | `true` |
| leftWidth                    | 左侧组件的宽度                              | `number \| string`          | `50%`  |
| leftComponent                | 左侧收集数据组件                            | `ReactNode`                 | `-`    |
| rightComponent               | 右侧收集数据组件                            | `ReactNode`                 | `-`    |
| transformLeftOnChangeParams  | 转化左侧组件的 onChange 参数到 formState 中 | `(...args: any[]) => any`   | `-`    |
| transformRightOnChangeParams | 转化右侧组件的 onChange 参数到 formState 中 | `(...args: any[]) => any`   | `-`    |
