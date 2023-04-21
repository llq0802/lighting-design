---
title: LFormItemIcon
toc: content
nav:
  path: /components
---

# LFormItemNumber

图标选择器

**特点**

- 基于 antd ui 图标
- 可自定义配置图标

## 代码演示

### 基础用法

<code src='./demos/Demo2.tsx'></code>

## API

```ts
import { LFormItemNumber } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数          | 说明               | 类型                                                          | 默认值 |
| ------------- | ------------------ | ------------------------------------------------------------- | ------ |
| options       | 图标 tabs 相关配置 | `Options`                                                     | `{}`   |
| extendOptions | 自定义图标         | `ExtendOptions`                                               | `-`    |
| modalProps    | `modalProps`的属性 | [ModalPropsProps](https://ant.design/components/modal-cn#api) | `-`    |
| tabsProps     | `tabsProps`的属性  | [tabsPropsProps](https://ant.design/components/tabs-cn#api)   | `-`    |

### Options

```ts
type Options = {
  Outlined; // 线性风格
  Filled; // 实底风格
  TwoTone; //双色风格
};
```

### ExtendOptions

```ts
type ExtendOptions = {
  label: string;
  data: string[];
  scriptUrl: string;
};
```
