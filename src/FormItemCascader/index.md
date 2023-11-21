---
title: LFormItemCascader
toc: content
nav:
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

<code src='./demos/Demo1.tsx'></code>

### 异步请求

<code src='./demos/Demo3.tsx'></code>

### 依赖更新自动请求

<code src='./demos/Demo2.tsx'></code>

### API

:::warning{title=注意}

- `request` 与 `options` 同时配置时 `options` 优先级更高

- `request` 的参数集合`depends` 为 `LFormItem` 组件 `dependencies` 属性依赖项字段的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除或者禁用选择

:::

```ts
import { LFormItemCascader } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数           | 说明                                    | 类型                                                            | 默认值 |
| -------------- | --------------------------------------- | --------------------------------------------------------------- | ------ |
| options        | 数据化配置选项内容                      | `LCascaderOption[]`                                             | `[]`   |
| request        | 请求数据函数                            | `(...depends: any[]) => Promise<LCascaderOption[]>`             | `-`    |
| requestOptions | ahook 的 request 的配置项               | `-`                                                             | `-`    |
| debounceTime   | 当依赖项发生变化时重新请求的防抖时间    | `number`                                                        | `-`    |
| spin           | 自定义 loading 效果                     | [SpinProps](https://ant.design/components/spin-cn/#api)         | `-`    |
| cascaderProps  | `antd`级联组件 Props                    | [CascaderProps](https://ant.design/components/cascader-cn/#api) | `-`    |
| actionRef      | 配置 request 时 useRequest 的全部返回值 | `LFormItemActionRef`                                            | `-`    |

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
