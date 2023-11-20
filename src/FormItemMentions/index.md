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

## API

:::warning{title=注意}

- `'bankCard' | 'idCard' | 'phone' | 'url' | 'email' | 'chinese'`类型的输入框会自动校验输入的值 , `required`只充当是否展示必填的(`*`)星号

  :::

```ts
import { LFormItemMentions } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item#api) 一样。

| 参数           | 说明                                                                            | 类型                | 默认值  |
| -------------- | ------------------------------------------------------------------------------- | ------------------- | ------- |
| options        | 数据源                                                                          | `{}[]`              | `-`     |
| request        | 异步请求数据的函数                                                              | `()=>Promise<{}[]>` | `-`     |
| requestOptions | 配置 request 时 的其他配置项                                                    | `boolean`           | `false` |
| refreshDeps    | 配置 request 时 request 请求的依赖项数组 如果依赖项发生变化则会自动执行 request | `any[]`             | `[]`    |
| spin           | 配置 request 时自定义 loading 效果                                              | `SpinProps`         | `-`     |
| actionRef      | 配置 request 时 useRequest 的全部返回值                                         | `any`               | `-`     |
