---
title: LFormItemRate
order: 2
nav:
  order: 2
  path: /components
---

# LFormItemRate

评分

## 基础使用

<code src='./demos/Demo1.tsx'>

## 禁用

<code src='./demos/Demo2.tsx'>

## 异步请求

<code src='./demos/Demo3.tsx'>

## 其他字符

<code src='./demos/Demo4.tsx'>

## 自定义字符

<code src='./demos/Demo5.tsx'>

## API

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spin | 自定义 loading 效果 | [spinProps](https://ant-design.gitee.io/components/spin-cn/#API) | `-` |
| rateProps | `antd`评分组件 Props | [rateProps](https://4x.ant.design/components/rate-cn/#API) | `-` |

<mark>
`depends` 为LFormItem组件 `dependencies` 属性依赖项的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为`假值或者空数组`则本身数据也会清除
<mark/>
