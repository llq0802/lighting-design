---
title: LFormItemRadio
order: 2
nav:
  order: 2
  path: /components
---

## LFormItemRadio

下拉选择器

**特点**

- 支持请求数据获得 `options`
- 支持依赖项变化自动重新请求
- 支持请求防抖
- `request` 的参数为依赖项的值
- 支持配置`全部`选项

**校验顺序**

- 必填为空时提示：`请输入${label}`
- placeholder`请输入${label}`

## 代码演示

<code src='./demos/Demo1.tsx'>

## 异步请求

<code src='./demos/Demo2.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 数据化配置选项内容 | `SelectProps[options]` | `[]` |
| request | 请求数据函数 | `(...depends: any[]) => Promise<Options[]>` | `-` |
| debounceTime | 当依赖项发生变化时重新请求的防抖时间 | `number` | `-` |
| spin | 自定义 loading 效果 | [spinProps](https://ant-design.gitee.io/components/spin-cn/#API) | `-` |
| all | 是否需要全部选项 | `boolean ` | `false` |
| allLabel | 全部选项的名称 | `string ` | `全部` |
| allValue | 全部选项的值 | `string` | `''` |
| radioProps | `antd`单选组件 Props | [RadioProps](https://4x.ant.design/components/radio-cn/#API) | `-` |

<mark>
`depends` 为LFormItem组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除
<mark/>
