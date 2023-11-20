---
title: LFormItemMentions
toc: content
nav:
  path: /components
---

# LFormItemMentions

提及输入框

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 依赖请求

<code src='./demos/Demo2.tsx'></code>

## API

:::warning{title=注意}

request 的参数集合 `depends` 为 `refreshDeps` 依赖数组展开后的值 , 如果依赖项发生变化则会自动请求数据 , 如果依赖项的值为假值或者空数组则本身数据也会清除或者禁用选择

:::

```ts
import { LFormItemMentions } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数           | 说明                                                                            | 类型                                              | 默认值  |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------- | ------- |
| options        | 数据源                                                                          | `LMentionsOptions[]`                              | `-`     |
| request        | 异步请求数据的函数                                                              | `(...depends:any[])=>Promise<LMentionsOptions[]>` | `-`     |
| requestOptions | 配置 request 时 的其他配置项                                                    | `boolean`                                         | `false` |
| refreshDeps    | 配置 request 时 request 请求的依赖项数组 如果依赖项发生变化则会自动执行 request | `any[]`                                           | `[]`    |
| spin           | 配置 request 时自定义 loading 效果                                              | `SpinProps`                                       | `-`     |
| actionRef      | 配置 request 时 useRequest 的全部返回值                                         | `LFormItemActionRef`                              | `-`     |
| mentionsProps  | antd.Mentions 的其他属性                                                        | `MentionProps`                                    | `-`     |
