---
title: 表格数据的导出
toc: content
nav:
---

# 表格数据的导出

通过 `json2Excel` 方法即可实现

- 无需后端的配合，前端一行代码就搞定
- 与 LTable 和 antd.Table 完美配合
- 支持自定义导出的数据值
- 支持自定义导出表格的列
- 支持 Excel 自定义样式

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx' background="#f5f5f5"></code>

<code src='./demos/Demo1.tsx' background="#f5f5f5"></code>

### 含有文件名称

<code src='./demos/Demo2.tsx' background="#f5f5f5"></code>

### 隐藏表格表头

<code src='./demos/Demo3.tsx' background="#f5f5f5"></code>

### 最小列宽

<code src='./demos/Demo4.tsx' background="#f5f5f5"></code>

### 隐藏某一列

可通过 columns.hiddenInExcel=true 隐藏列。

<code src='./demos/Demo5.tsx' background="#f5f5f5"></code>

### 自定义导出列的数据

可通过 columns.exportRender 对数据处理。

<code src='./demos/Demo6.tsx' background="#f5f5f5"></code>

### 自定义导出 Excel 的样式

<code src='./demos/Demo7.tsx' background="#f5f5f5"></code>

## 自定义样式时函数返回的对象及单元格的样式属性

| 样式        | 子集样式       | 默认        | 选择值                                                                                          |
| :---------- | :------------- | :---------- | ----------------------------------------------------------------------------------------------- |
| `alignment` | `vertical`     | `bottom`    | `"top"` or `"center"` or `"bottom"`                                                             |
|             | `horizontal`   | `left`      | `"left"` or `"center"` or `"right"`                                                             |
|             | `wrapText`     | `false`     | `true` or `false`                                                                               |
|             | `textRotation` | `0`         | `0` to `180`, or `255` // `180` 向下旋转 180 度                                                 |
| `border`    | `top`          |             | `{ style: BORDER_STYLE, color: COLOR_STYLE }`                                                   |
|             | `bottom`       |             | `{ style: BORDER_STYLE, color: COLOR_STYLE }`                                                   |
|             | `left`         |             | `{ style: BORDER_STYLE, color: COLOR_STYLE }`                                                   |
|             | `right`        |             | `{ style: BORDER_STYLE, color: COLOR_STYLE }`                                                   |
|             | `diagonal`     |             | `{ style: BORDER_STYLE, color: COLOR_STYLE, diagonalUp: true/false, diagonalDown: true/false }` |
| `fill`      | `patternType`  | `"none"`    | `"solid"` or `"none"`                                                                           |
|             | `fgColor`      |             | 前景色 `COLOR_STYLE`                                                                            |
|             | `bgColor`      |             | 背景颜色                                                                                        |
| `font`      | `bold`         | `false`     | 字体粗体 `true` or `false`                                                                      |
|             | `color`        |             | 字体颜色                                                                                        |
|             | `italic`       | `false`     | 字体斜体 `true` or `false`                                                                      |
|             | `name`         | `"Calibri"` | 字体                                                                                            |
|             | `strike`       | `false`     | 字体删除线 `true` or `false`                                                                    |
|             | `sz`           | `"11"`      | 字体大小                                                                                        |
|             | `underline`    | `false`     | 字体下划线 `true` or `false`                                                                    |
|             | `vertAlign`    |             | `"superscript"` or `"subscript"`                                                                |

#### `BORDER_STYLE` 的值

边框样式属性是以下值之一:

- `dashDotDot`
- `dashDot`
- `dashed`
- `dotted`
- `hair`
- `mediumDashDotDot`
- `mediumDashDot`
- `mediumDashed`
- `medium`
- `slantDashDot`
- `thick`
- `thin`

## API

```ts
import { json2Excel } from 'lighting-design';

json2Excel(options:Json2ExcelOptions)

```

### Json2ExcelOptions

```ts
export type Json2ExcelOptions = {
  /** 文件名称 默认值为 '附件' */
  fileName?: string;
  /** excel中是否展示文件的名称及表格的标题 ( 会在excel最上方格 )  默认为 false*/
  hasFileName?: boolean;
  /** excel中是否展示表格标题 默认为 true*/
  hasColumnTitle?: boolean;
  /** 最小列宽 , 默认 8 两个汉字宽度 */
  minColWidth?: number;
  /** 表格数据 必填*/
  data: Record<string, any>[];
  /** 表格列 必填*/
  columns: Array<Columns>;
  /** 自定义节点 title、dataIndex 的字段  配合 columns 使用*/
  fieldNames?: FieldNames;
  /** 自定义表格标题内容样式 */
  renderFileNameStyle?: (cellValue: string) => Excel;
  /** 自定义表格表头内容样式 */
  renderColumnTitleStyle?: (
    // 当前单元格的值
    cellValue: string,
    // 当前列索引
    colIndex: number,
  ) => Excel;

  /** 自定义表格数据单元格内容样式 */
  renderCellStyle?: (
    // 当前单元格的值
    cellValue: string,
    // 当前行的索引
    rowIndex: number,
    // 当前列索引
    colIndex: number,
  ) => Excel;
};

type Excel = {
  [key: string]: any;
  v: string; // 单元格的值
  s: Record<string, any>; // 单元格的样式属性
};

type Columns = {
  title: string;
  dataIndex: string;
  /** 表格导出时隐藏是否隐藏该列 */
  hiddenInExcel?: boolean;
  /** 表格导出时自定义导出内容 */
  exportRender?: (val: any, row: Record<string, any>, i: number) => string | number;
  [k: string]: any;
};

type FieldNames = {
  title: string;
  dataIndex: string;
};
```
