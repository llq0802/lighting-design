---
title: LFormItemRadio
toc: content
nav:
  path: /components
---

## LFormItemRadio

单选框

**特点**

- 支持请求数据获得 `options`
- 支持配置`全部`选项

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 异步请求

<code src='./demos/Demo2.tsx'></code>

### 依赖项自动请求

<!-- <code src='./demos/Demo3.tsx'></code> -->

## API

:::warning{title=注意}

- `request`与`options`同时配置时 `options`优先级更高

:::

```ts
import { LFormItemRadio } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数           | 说明                                    | 类型                                                                                      | 默认值  |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| options        | 数据源                                  | `SelectProps['options'] \| Record<string, any>[]`                                         | `[]`    |
| request        | 请求数据源的异步函数                    | `(...depends: any[]) => Promise<SelectProps['options']         \| Record<string, any>[]>` | `-`     |
| requestOptions | ahook 的 request 的配置项               | `-`                                                                                       | `-`     |
| spin           | 自定义 loading 效果                     | [SpinProps](https://ant.design/components/spin-cn/#api)                                   | `-`     |
| all            | 是否需要全部选项                        | `boolean `                                                                                | `false` |
| allLabel       | 全部选项的名称                          | `string `                                                                                 | `全部`  |
| allValue       | 全部选项的值                            | `string`                                                                                  | `'all'` |
| optionType     | 用于设置 Radio options 类型             | `RadioGroupProps['optionType']`                                                           | `-`     |
| buttonStyle    | RadioButton 的风格样式                  | `RadioGroupProps['buttonStyle']`                                                          | `-`     |
| fieldNames     | 自定义字段名                            | `SelectProps['fieldNames']`                                                               | `-`     |
| actionRef      | 配置 request 时 useRequest 的全部返回值 | `LFormItemActionRef`                                                                      | `-`     |
| radioProps     | 单选组 Props                            | [RadioGroupProps](https://ant.design/components/radio-cn/#api)                            | `-`     |
