---
title: LFromItemTransfer
toc: content
---

# LFromItemTransfer

高级穿梭框

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx'></code>

### 异步请求

<code src='./demos/Demo3.tsx'></code>

### 搜索

<code src='./demos/Demo4.tsx'></code>

### 限制选择数量

只能选择 3 个

<code src='./demos/Demo5.tsx'></code>

### 表格穿梭

<code src='./demos/Demo2.tsx'></code>

### 树穿梭

<code src='./demos/Demo6.tsx'></code>

## API

:::warning{title=注意}
自 2.1.8 起新增此组件

- `options` 与 `request` 同时配置时 `options`的优先级更高

- `request` 的参数为 `{ current , pageSize }`, 可配合`pagination` `actionRef`属性做分页请求

- 在`树穿梭框`中使用 `limitMaxCount` 无效

- 配置了`limitMaxCount` 你不应该配置全选的功能

- 在不是`表格穿梭`以及`树穿梭`的情况下 `contentAfter`为`" "` , `contentInline`为`true` , 在`表格穿梭`以及`树穿梭`的情况下 `contentAfter`为`null` , `contentInline`为`false` , 两个属性的具体说明请看 [LFormItem](/components/form-item) 的 API

- `transferProps.listStyle` 可修改组件左右列表的样式 具体请看 `antd 穿梭框`文档

:::

```ts
import { LFromItemTransfer } from 'lighting-design';
```

除了以下参数，其余和 [LFormItem](/components/form-item) 一样。

| 参数           | 说明                                                                      | 类型                                                                                            | 默认值                              |
| -------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| options        | 数据源 , 每一项的字段名与 `fieldNames` 配置有关                           | `RecordType[]`                                                                                  | `-`                                 |
| request        | 请求数据函数                                                              | `( info: {current: number; pageSize: number }) => Promise<{ total: number; data:RecordType[]}>` | `-`                                 |
| requestOptions | `ahooks` usePagination 的配置项 配合 `request` 使用                       | `-`                                                                                             | `-`                                 |
| spin           | 自定义 loading 效果                                                       | [SpinProps](https://ant.design/components/spin-cn/#api)                                         | `-`                                 |
| limitMaxCount  | 可选的最大数量                                                            | `number`                                                                                        | `-`                                 |
| fieldNames     | 自定义配置字段名                                                          | `{ label: string;   value: string;}`                                                            | `{ label: 'title' ,  value: 'key'}` |
| pagination     | 分页配置 与 antd 穿梭框的分页配置一样                                     | `TransferProps['pagination']`                                                                   | `false`                             |
| titles         | 标题集合，顺序从左至右                                                    | `TransferProps['titles']`                                                                       | `-`                                 |
| showSearch     | 是否可搜索                                                                | `TransferProps['showSearch']`                                                                   | `false`                             |
| oneWay         | 是否单项方向                                                              | `TransferProps['oneWay']`                                                                       | `false`                             |
| actionRef      | 包含一些请求分页的方法与属性 配合 request pagination 用于外部控制分页请求 | `MutableRefObject<LFormItemTransferActionRef     \| undefined> `                                | `-`                                 |
| transferProps  | `antd`穿梭框组件的 Props                                                  | [TransferProps](https://ant-design.antgroup.com/components/transfer-cn#api)                     | `-`                                 |

### RecordType

```ts
interface RecordType {
  key?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}
```

### LFormItemTransferActionRef

```ts
export type LFormItemTransferActionRef = {
  /** 分页信息及方法 */
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    totalPage: number;
    onChange: (current: number, pageSize: number) => void;
    changeCurrent: (current: number) => void;
    changePageSize: (pageSize: number) => void;
  };
  // ...其他属性方法与ahook useRequest的返回值相同
};
```
