---
title: 解析 Excel 数据成 JSON
toc: content
nav:
---

# 解析 Excel 数据成 JSON

通过 `excel2Json` 方法配合`LTable`或者`Table`即可实现 excel 数据转成 json 格式并显示在表格

通过 `getExcelData` 方法获取 excel 头数据与内容数据

## 代码演示

### 基础用法

<code src='./demos/Demo1.tsx' background="#f5f5f5"></code>

## API

```ts
import { excel2Json } from 'lighting-design';

 // 用于直接将excel导入到表格中
const res:Record<string,any>[] = await excel2Json(options:Excel2JsonOptions)

// 用于解析excel数据 开发中拿到数据后自行处理业务逻辑
const info: { header: string[]; body: Record<string, any>[] }    = await getExcelData (file:Blob)

```

### Excel2JsonOptions

```ts
export type Excel2JsonOptions = {
  /** 原始文件或者 Blob */
  file: Blob;
  /** 自定义节点 title、dataIndex 的字段  配合 columns 使用*/
  fieldNames?: FieldNames;
  /** 表格的列 */
  columns: Columns[];
};

type Columns = {
  title: string;
  dataIndex: string;
};

type FieldNames = {
  title: string;
  dataIndex: string;
};
```
