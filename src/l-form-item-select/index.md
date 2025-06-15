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

<code src='./demos/demo.tsx'></code>

<!-- <code src='./demos/Demo1.tsx'></code>

### 异步自动请求

<code src='./demos/Demo2.tsx'></code>

### 异步手动请求

<code src='./demos/Demo4.tsx'></code>

### 依赖项发生变化自动请求

<code src='./demos/Demo3.tsx'></code>

### antd.Select 组件的配置项

<code src='./demos/Demo5.tsx'></code> -->

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

| 参数           | 说明                                   | 类型                                                                       | 默认值                                     |
| -------------- | -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------ |
| mode           | 设置 Select 的模式为多选或标签         | `SelectProps['mode']`                                                      | `-`                                        |
| showSearch     | 配置是否可搜索                         | `SelectProps['showSearch']`                                                | `-`                                        |
| fieldNames     | 自定义数据源的字段名                   | `SelectProps['fieldNames']`                                                | `-`                                        |
| variant        | 形态变形 `(antd>5.1.13可用)`           | `SelectProps['variant']`                                                   | `-`                                        |
| options        | 数据源                                 | `SelectProps['options']`                                                   | `-`                                        |
| autoRequest    | \* 组件加载完后`request`是否自动请求   | `-`                                                                        | 配置了`options`始终为`false`, 反之为`true` |
| request        | \* 异步请求数据源的函数                | `(...args:any[])=>Promise<SelectProps['options'] \| Record<string,any>[]>` | `-`                                        |
| requestOptions | \* `ahooks`的`useRequest`的配置项      | `-`                                                                        | `-`                                        |
| refreshDeps    | \* `request`重新请求的依赖项数组       | `any[]`                                                                    | `-`                                        |
| actionRef      | \* 配置`request`时`useRequest`的返回值 | `LFormItemActionRef`                                                       | `-`                                        |
| spin           | \* 配置`request`时自定义`loading`效果  | [SpinProps]                                                                | `-`                                        |
| all            | 是否需要全部选项`(单选模式下生效)`     | `boolean `                                                                 | `false`                                    |
| allLabel       | 全部选项的名称                         | `string `                                                                  | `全部`                                     |
| allValue       | 全部选项的值                           | `string`                                                                   | `'all'`                                    |
| selectProps    | antd Select 组件 Props                 | [SelectProps]                                                              | `-`                                        |

### LFormItemActionRef

```ts
import type { Result } from 'ahooks/lib/useRequest/src/types';
export type LFormItemActionRef = Result<any, any[]> | undefined;
```

[SpinProps]: https://ant-design.antgroup.com/components/spin-cn#api
[SelectProps]: https://ant-design.antgroup.com/components/select-cn#api
