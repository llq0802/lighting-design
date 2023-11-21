---
title: LFormItemCheckbox
toc: content
nav:
  path: /components
---

## LFormItemCheckbox

多选框

**特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值
- 支持配置添加`beforeAll`自定义全选

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 全选

<code src='./demos/Demo2.tsx'></code>

### 禁用

<code src='./demos/Demo3.tsx'></code>

### 异步请求

<code src='./demos/Demo4.tsx'></code>

### 依赖更新自动请求

<code src='./demos/Demo5.tsx'></code>

## API

:::warning{title=注意}

- `request`与`options`同时配置时 `options`优先级更高

- `request` 的参数集合`depends` 为 `LFormItem` 组件 `dependencies` 属性依赖项字段的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除或者禁用选择

:::

```ts
import { LFormItemCheckbox } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数            | 说明                                    | 类型                                                            | 默认值                        |
| --------------- | --------------------------------------- | --------------------------------------------------------------- | ----------------------------- |
| options         | 数据源                                  | `LCheckboxOptions[]`                                            | `-`                           |
| request         | 请求数据源的异步函数                    | `(...depends: any[]) => Promise<LCheckboxOptions[]>`            | `-`                           |
| requestOptions  | ahook 的 request 的配置项               | `-`                                                             | `-`                           |
| debounceTime    | 当依赖项发生变化时重新请求的防抖时间    | `number`                                                        | `-`                           |
| beforeAll       | 自定义全选                              | `LCheckboxBeforeAllProps \| boolean `                           | `-`                           |
| spin            | 自定义 loading 效果                     | [SpinProps](https://ant.design/components/spin-cn/#api)         | `-`                           |
| notDependRender | 依赖项的值为空时展示的内容              | `ReactNode`                                                     | `<span>请先选择依赖项</span>` |
| checkboxProps   | 多选框组件 Props                        | [CheckboxProps](https://ant.design/components/checkbox-cn/#api) | `-`                           |
| actionRef       | 配置 request 时 useRequest 的全部返回值 | `LFormItemActionRef`                                            | `-`                           |

### LCheckboxOptions

```ts
interface LCheckboxOptions {
  label: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}
```

### LCheckboxBeforeAllProps

```ts
interface LCheckboxBeforeAllProps {
  label?: ReactNode;
  value?: string | number | boolean;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxValueType[]) => void;
}
```
