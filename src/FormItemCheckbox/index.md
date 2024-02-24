---
title: LFormItemCheckbox
toc: content
nav:
  path: /components
---

## LFormItemCheckbox

多选框

<!-- **特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值
- 支持配置添加`beforeAll`自定义全选 -->

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

```ts
import { LFormItemCheckbox } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

除了以下参数， 还包含 [LFormItemSelect](/components/form-item-select#api) 的 `autoRequest` `request` `requestOptions` `refreshDeps` `spin` `actionRef` `options` `fieldNames`
用法与 [LFormItemSelect](/components/form-item-select#api) 一致

| 参数          | 说明             | 类型                                                            | 默认值 |
| ------------- | ---------------- | --------------------------------------------------------------- | ------ |
| beforeAll     | 自定义全选       | `LCheckboxBeforeAllProps \| boolean `                           | `-`    |
| checkboxProps | 多选框组件 Props | [CheckboxProps](https://ant.design/components/checkbox-cn/#api) | `-`    |

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
