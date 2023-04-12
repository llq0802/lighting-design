---
title: LFormItemCascader
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemCascader

级联选择框

**特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

### 异步请求

<code src='./demos/Demo3.tsx'>

### 依赖更新自动请求

<code src='./demos/Demo2.tsx'>

### API

```ts
import { LFormItemCascader } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

<mark>`depends` 为 LFormItem 组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除<mark/>

| 参数          | 说明                                 | 类型                                                               | 默认值 |
| ------------- | ------------------------------------ | ------------------------------------------------------------------ | ------ |
| options       | 数据化配置选项内容                   | `LCascaderOption[]`                                                | `[]`   |
| request       | 请求数据函数                         | `(...depends: any[]) => Promise<LCascaderOption[]>`                | `-`    |
| debounceTime  | 当依赖项发生变化时重新请求的防抖时间 | `number`                                                           | `-`    |
| spin          | 自定义 loading 效果                  | [SpinProps](https://4x.ant.design/components/spin-cn/#API)         | `-`    |
| cascaderProps | `antd`级联组件 Props                 | [CascaderProps](https://4x.ant.design/components/cascader-cn/#API) | `-`    |

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
