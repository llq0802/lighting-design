---
title: LFormItemCheckbox
order: 2
nav:
  order: 2
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

<code src='./demos/Demo1.tsx'>

### 全选

<code src='./demos/Demo2.tsx'>

### 禁用

<code src='./demos/Demo3.tsx'>

### 异步请求

<code src='./demos/Demo4.tsx'>

### 依赖更新自动请求

<code src='./demos/Demo5.tsx'>

## API

```ts
import { LFormItemCheckbox } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

<mark>`depends` 为 LFormItem 组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除<mark/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 指定可选项 | `string[]` `number[]` `Option[]` | `-` |
| request | 请求数据函数 | `(...depends: any[]) => Promise<Options[]>` | `-` |
| debounceTime | 当依赖项发生变化时重新请求的防抖时间 | `number` | `-` |
| beforeAll | 自定义全选 | `BeforeAllProps ` |
| spin | 自定义 loading 效果 | [SpinProps](https://4x.ant.design/components/spin-cn/#API) | `-` |
| notDependRender | 依赖项的值为空时展示的内容 | `() => ReactNode` | `() => <span>请先选择依赖项</span>` |
| checkboxProps | `antd`多选框组件 Props | [CheckboxProps](https://4x.ant.design/components/checkbox-cn/#API) | `-` |

#### Option

```ts
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

#### BeforeAllProps

```ts
interface BeforeAllProps {
  label?: React.ReactNode;
  value?: string | number | boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxValueType[]) => void;
}
```
