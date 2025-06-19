---
title: LFormItemAddress
toc: content
nav:
  path: /components
---

# LFormItemAddress

地址 (银行卡) 等选择与输入

## 代码演示

### 基础用法

<!-- <code src='./demos/Demo1.tsx'></code>

### 改用 Select 组件与 InputNumer 组件

<code src='./demos/Demo2.tsx'></code> -->

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

| 参数        | 说明                             | 类型                        | 默认值                 |
| ----------- | -------------------------------- | --------------------------- | ---------------------- |
| variant     | `CascaderProps['variant']`       | `CascaderProps['variant']`  | `-`                    |
| block       | 是否占满父容器                   | `boolean`                   | `true`                 |
| leftWidth   | 左侧组件的宽度                   | `number \| string`          | `50%`                  |
| options     | 左侧组件数据源                   | `CascaderProps['options'] ` | `-`                    |
| placeholder | 组件的 placeholder               | `[string , string]`         | `['请选择', '请输入']` |
| leftProps   | `Select`或`Cascader`组件 Props   | `LeftProps`                 | `-`                    |
| rightProps  | `Input`或`InputNumber`组件 Props | `RightProps`                | `-`                    |

### LeftProps

```ts
type LeftProps =
  | (CascaderProps & {
      isSelect: boolean;
    })
  | (SelectProps & {
      isSelect: boolean;
    });
```

### RightProps

```ts
type RightProps =
  rightProps?:
    | (InputProps & {
        isInputNumber: boolean;
      })
    | (InputNumberProps & {
        isInputNumber: boolean;
      });
```
