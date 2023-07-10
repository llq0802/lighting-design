---
title: LTreeTable
toc: content
---

# LTreeTable

树形表格

- 比起普通的树形组件更加的直观
- 支持复选框选择
- 兼容 antd Table

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx" ></code>

## API

> - `dataSource` 不再配置 请使用 `treeData`
>
> - `columns` 的部分字段内部重写无法覆盖 (`dataIndex` `render`)
>
> - `pagination` 属性默认为`false` `bordered` 属性默认为`true`

```ts
import { LTreeTable } from 'lighting-design';
```

除了以下属性 其余跟 [antd.Table](https://ant.design/components/table-cn#api) 属性方法一样

|       参数        |                       说明                        |                   类型                    | 默认值  |
| :---------------: | :-----------------------------------------------: | :---------------------------------------: | :-----: |
|   defaultValue    |                      默认值                       |                `string[]`                 |   `-`   |
|       value       |                  勾选的值 (受控)                  |                `string[]`                 |   `-`   |
|     treeData      |                      数据项                       |             `LTreeTableData`              |  `[]`   |
|    fieldNames     |                 自定义设置字段名                  |          `LTreeTableFieldNames`           |   `-`   |
|      columns      | antd Table 的 columns`(部分字段内部重写无法覆盖)` |          `TableProps['columns']`          |   `-`   |
| lastColumnMerged  |                 是否合并最后一列                  |                 `boolean`                 | `false` |
|   showCheckbox    |                  是否显示复选框                   |                 `boolean`                 | `true`  |
|   checkStrictly   |      父子节点选中状态是否不再关联 (各自独立)      |                 `boolean`                 | `false` |
|     fillEmpty     |           当该项为空值时填充展示的内容            |             `React.ReactNode`             |  `'-'`  |
| checkboxClassName |               为所有复选框设置类名                |                 `string`                  |   `-`   |
|   checkboxStyle   |               为所有复选框设置样式                |           `React.CSSProperties`           |   `-`   |
|     onChange      |                勾选后的回调 (受控)                |       `(vals: ValueType[]) => void`       |   `-`   |
|    labelRender    |               自定义复选框的 label                | `(subItem,record,index)=>React.ReactNode` |   `-`   |

## ValueType

```ts
export type ValueType = string | number;
```

## LTreeTableDataItem

```ts
export type LTreeTableDataItem = {
  label?: React.ReactNode;
  value?: ValueType;
  disabled?: boolean;
  children?: LTreeTableDataItem[];
  [key: string]: any;
};
```

## LTreeTableData

```ts
export type LTreeTableData = LTreeTableDataItem[];
```

## LTreeTableFieldNames

```ts
export type LTreeTableFieldNames = {
  label?: string;
  value?: string;
  children?: string;
};
```
