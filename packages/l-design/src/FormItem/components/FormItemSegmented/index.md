---
title: LFormItemSegmented
order: 2
nav:
  order: 2
  path: /components
---

## LFormItemSegmented

分段控制器

**特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'>

### 异步请求

<code src='./demos/Demo2.tsx'>

### 依赖项改变自定异步请求

<code src='./demos/Demo4.tsx'>

### 自定义渲染

<code src='./demos/Demo3.tsx'>

### API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 数据化配置选项内容 | ` string[] \| number[] \| Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }>` | `[]` |
| request | 请求数据函数 | `(...depends: any[]) => Promise<Options[]>` | `-` |
| debounceTime | 当依赖项发生变化时重新请求的防抖时间 | `number` | `-` |
| spin | 自定义 loading 效果 | [spinProps](https://4x.ant.design/components/spin-cn/#API) | `-` |
| notDependRender | 依赖项的值为空时展示的内容 | `() => ReactNode` | `() => <span>请先选择依赖项</span>` |
| segmentedProps | `antd`分段组件 Props | [SegmentedProps](https://4x.ant.design/components/segmented-cn/#API) | `-` |

<mark>
`depends`为`dependencies`依赖项的值, 如果依赖项发生变化则会自动请求数据 如果依赖项的值为`假值或者空数组`则本身数据也会清除
<mark/>
