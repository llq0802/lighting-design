---
title: LFormItemSelect
toc: content
nav:
  path: /components
---

# LFormItemSelect

下拉选择器

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 异步自动请求

<code src='./demos/Demo2.tsx'></code>

### 异步手动请求

<code src='./demos/Demo4.tsx'></code>

### 依赖项发生变化自动请求

<code src='./demos/Demo3.tsx'></code>

### antd.Select 组件的配置项

## API

:::warning{title=注意}

- 数据优先级: `selectProps.options` > 组件本身的`options` > `request 返回值`

- `options` 与 `request`(request 有关的配置项, 带星号的描述) 不能同配置

- `all`只在单选生效, 如果想在多选也有`全部`选项 , 需要配置`selectProps.dropdownRender`自行执行处理

:::

```ts
import { LFormItemSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数           | 说明                                   | 类型                                                                       | 默认值  |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------- | ------- |
| mode           | 设置 Select 的模式为多选或标签         | `multiple \| tags`                                                         | `-`     |
| showSearch     | 配置是否可搜索                         | `boolean `                                                                 | `-`     |
| fieldNames     | 自定义数据源的字段名                   | `SelectProps['fieldNames']`                                                | `-`     |
| variant        | 形态变形 `(antd>5.1.13可用)`           | `SelectProps['variant']`                                                   | `-`     |
| options        | 数据源                                 | `SelectProps['options']`                                                   | `-`     |
| autoRequest    | \* 组件加载后是否自动请求              | `-`                                                                        | `-`     |
| request        | \* 异步请求数据源函数                  | `(...args:any[])=>Promise<SelectProps['options'] \| Record<string,any>[]>` | `-`     |
| requestOptions | \* `ahooks`的`useRequest`的配置项      | `-`                                                                        | `-`     |
| spin           | \* 配置`request`时自定义`loading`效果  | [SpinProps](https://ant.design/components/spin-cn/#api)                    | `-`     |
| actionRef      | \* 配置`request`时`useRequest`的返回值 | `LFormItemActionRef`                                                       | `-`     |
| all            | 是否需要全部选项`(单选模式下生效)`     | `boolean `                                                                 | `false` |
| allLabel       | 全部选项的名称                         | `string `                                                                  | `全部`  |
| allValue       | 全部选项的值                           | `string`                                                                   | `'all'` |
| selectProps    | antd Select 组件 Props                 | [SelectProps](https://ant.design/components/select-cn/#api)                | `-`     |

### LFormItemActionRef

```ts
import type { Result } from 'ahooks/lib/useRequest/src/types';
export type LFormItemActionRef = Result<any, any[]> | undefined;
```
