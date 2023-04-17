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

> `depends` 为 `LFormItem` 组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为假值或者空数组则本身数据也会清除

```ts
import { LFormItemCheckbox } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数            | 说明                                 | 类型                                                            | 默认值                              |
| --------------- | ------------------------------------ | --------------------------------------------------------------- | ----------------------------------- |
| options         | 数据源                               | `LCheckboxOptions[]`                                            | `-`                                 |
| request         | 请求数据源的异步函数                 | `(...depends: any[]) => Promise<LCheckboxOptions[]>`            | `-`                                 |
| debounceTime    | 当依赖项发生变化时重新请求的防抖时间 | `number`                                                        | `-`                                 |
| beforeAll       | 自定义全选                           | `LCheckboxBeforeAllProps \| boolean `                           | `-`                                 |
| spin            | 自定义 loading 效果                  | [SpinProps](https://ant.design/components/spin-cn/#api)         | `-`                                 |
| notDependRender | 依赖项的值为空时展示的内容           | `() => ReactNode`                                               | `() => <span>请先选择依赖项</span>` |
| checkboxProps   | 多选框组件 Props                     | [CheckboxProps](https://ant.design/components/checkbox-cn/#api) | `-`                                 |

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