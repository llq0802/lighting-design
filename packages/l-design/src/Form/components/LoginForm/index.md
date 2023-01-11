---
title: LLoginForm
order: 2
nav:
  order: 2
  path: /components
---

# LLoginForm-登录表单

基于 LForm 扩展的登录表单。

## 基本用法

<code src='./demos/Demo1.tsx'  >

## 左右布局

<code src='./demos/Demo2.tsx' >

## API

LoginForm 代表了登录表单比较常见的布局样式。

| 参数         | 说明                                                | 类型               | 默认值 |
| ------------ | --------------------------------------------------- | ------------------ | ------ |
| logo         | logo 的配置，支持 ReactNode 和 string               | `ReactNode \| url` | -      |
| title        | 标题，可以配置为空                                  | `ReactNode`        | -      |
| subTitle     | 二级标题，可以配置为空                              | `ReactNode`        | -      |
| actions      | 自定义额外的登录功能                                | `ReactNode`        |
| message      | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode`        |
| contentStyle | 表单内容样式对象                                    | `CSSProperties `   | -      |
| className    | 登录表单样式类                                      | `string `          | -      |
| style        | 登录表单样式对象                                    | `CSSProperties`    |
