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

## API

:::warning{title=注意}

- 数据优先级: `selectProps.options` > 组件本身的`options` > `request 返回值`

:::

```ts
import { LFormItemSelect } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数             | 说明                                   | 类型                                                                         | 默认值  |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| placeholder      | `SelectProps['placeholder']`           | `SelectProps['placeholder']`                                                 | `-`     |
| disabled         | `SelectProps['disabled']`              | `SelectProps['disabled']`                                                    | `-`     |
| variant          | `SelectProps['disabled']`              | `SelectProps['variant']`                                                     | `-`     |
| size             | `SelectProps['size']`                  | `SelectProps['size']`                                                        | `-`     |
| mode             | `SelectProps['mode']`                  | `SelectProps['mode']`                                                        | `-`     |
| optionFilterProp | `SelectProps['optionFilterProp']`      | `SelectProps['optionFilterProp']`                                            | `label` |
| filterOption     | `SelectProps['filterOption']`          | `SelectProps['filterOption']`                                                | `-`     |
| showSearch       | 配置是否可搜索                         | `SelectProps['showSearch']`                                                  | `-`     |
| fieldNames       | 自定义数据源的字段名                   | `SelectProps['fieldNames']`                                                  | `-`     |
| options          | 数据源                                 | `SelectProps['options']`                                                     | `-`     |
| request          | \* 异步请求数据源的函数                | `(...args:any[]) => Promise<SelectProps['options'] \| Record<string,any>[]>` | `-`     |
| requestOptions   | \* `ahooks`的`useRequest`的配置项      | `-`                                                                          | `-`     |
| actionRef        | \* 配置`request`时`useRequest`的返回值 | `LFormItemActionRef`                                                         | `-`     |
| spin             | \* 配置`request`时自定义`loading`效果  | [SpinProps]                                                                  | `-`     |
| selectProps      | 是否 Select 组件 Props                 | [SelectProps]                                                                | `-`     |

[SpinProps]: https://ant-design.antgroup.com/components/spin-cn#api
[SelectProps]: https://ant-design.antgroup.com/components/select-cn#api
