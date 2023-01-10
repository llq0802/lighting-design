---
title: LoginForm
order: 2
nav:
  order: 2
  path: /components
---

# LoginForm-登录表单

基于 LForm 扩展的登录表单。

## 代码演示

<code src='./demos/Demo1.tsx'>

## API

LoginForm 代表了比较常见的居中布局样式。

| 参数         | 说明                                                | 类型               | 默认值 |
| ------------ | --------------------------------------------------- | ------------------ | ------ |
| logo         | logo 的配置，支持 ReactNode 和 string               | `ReactNode \| url` | -      |
| title        | 标题，可以配置为空                                  | `ReactNode`        | -      |
| subTitle     | 二级标题，可以配置为空                              | `ReactNode`        | -      |
| actions      | 自定义额外的登录功能                                | `ReactNode`        |
| message      | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode`        |
| contentStyle | 内容样式                                            | `CSSProperties `   | -      |
