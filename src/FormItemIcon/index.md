---
title: LFormItemIcon
toc: content
nav:
  path: /components
---

# LFormItemIcon

图标选择器

**特点**

- 基于 Ant Design 图标
- 可自定义配置图标

## 代码演示

### 基础用法

<code src='./demos/Demo.tsx'></code>

### 自定义图标

<code src='./demos/Demo1.tsx'></code>

### 受控组件

<code src='./demos/Demo2.tsx'></code>

## API

```ts
import { LFormItemNumber } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。
| 参数 | 说明 | 类型 | 默认值 |
| ------------ | ------------------ | ------------------------------------------------------------- | ------ |
| showIcon | 选择图标后是否展示 `(只支持 antd 内置图标，如果自定义图标请设置 inputProps 的 prefix 属性)` | `boolean` | `true` |
| iconStyle | 选择图标后的图标样式 在`showIcon`为`true`生效 | `React.CSSProperties` | `-` |
| options | 图标 tabs 相关配置 | `FormItemIconOptions` | `{}` |
| extendRender | 自定义图标 | `extendRender` | `-` |
| inputProps | `InputProps`的属性 | [InputProps](https://ant.design/components/input-cn#api) | `-` |
| modalProps | `ModalProps`的属性 | [ModalProps](https://ant.design/components/modal-cn#api) | `-` |
| tabsProps | `TabsProps`的属性 | [tabsProps](https://ant.design/components/tabs-cn#api) | `-` |
| itemRender | 自定义渲染每一项的图标 | `(item: string, node: React.ReactNode) => React.ReactNode` | `-` |

### FormItemIconOptions

```ts
interface IconTabsOptions extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  children?:
    | React.ReactNode
    | ((list: string[], node: React.ReactNode) => React.ReactNode);
}
export interface FormItemIconOptions<T = IconTabsOptions> {
  Outlined?: T; // 线性风格
  Filled?: T; // 实底风格
  TwoTone?: T; //双色风格
}
```

> `IconFont`，自定义图标详细请参考 [ant-design/icons](<[/components/form-item#api](https://ant.design/components/icon-cn#api)>)

### extendRender

```ts
interface FormItemIconTabsExtendOptions
  extends Omit<TabPaneProps, 'tab' | 'children'> {
  label: React.ReactNode;
  key: string;
  data: string[];
  children?:
    | React.ReactNode
    | ((list: string[], node: React.ReactNode) => React.ReactNode);
}
type extendRender = {
  IconFont: React.ReactNode; // IconFont，自定义图标详细请参考 ant-design/icons
  options: FormItemIconTabsExtendOptions[];
};
```
