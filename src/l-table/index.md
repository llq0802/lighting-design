---
title: LTable
toc: content
nav:
  path: /components
---

# LTable

高级表格组件

**特点**

- [x] 渐进式配置高级 `Table`
- [x] 完美向下兼容原 `Table`
- [x] 支持请求数据并缓存
- [x] 自动捕获请求错误
- [x] 自动管理`loading`分页
- [x] 内置实用表格工具栏
- [x] 内置实用高级表单查询
- [x] 简化 Table 样式配置
- [x] 高灵或可定制性各种配置
- [x] 默认优化原 `Table` 性能

## 代码演示

### 基础用法

<code src='./demos/app.tsx' background="#f5f5f5"></code>

### 无边框表格与排序

<code src='./demos/app1.tsx' background="#f5f5f5"></code>

### 斑马纹与行高亮

<code src='./demos/app2.tsx' background="#f5f5f5"></code>

### 小型表格 无分页

<code src='./demos/app3.tsx' background="#f5f5f5"></code>

### 自定义空数据渲染

<code src='./demos/app4.tsx' background="#f5f5f5"></code>

### 表单查询

<code src='./demos/app5.tsx' background="#f5f5f5"></code>

### 工具栏

<code src='./demos/app6.tsx' background="#f5f5f5"></code>

### 查询表单折叠/收起

<code src='./demos/app7.tsx' background="#f5f5f5"></code>

### 查询表单其他配置

<code src='./demos/app8.tsx' background="#f5f5f5"></code>

### 表单初始值 默认参数 额外参数

<code src='./demos/app9.tsx' background="#f5f5f5"></code>

### 缓存表格

<code src='./demos/app10.tsx' background="#f5f5f5"></code>

### actionRef 与 form 实例

<code src='./demos/app11.tsx' background="#f5f5f5"></code>

### request 只执行一次, 获取所有数据

使用在不需要分页请求，直接一次性请求所有数据

<code src='./demos/app12.tsx' background="#f5f5f5"></code>

### 通过 Token 修改样式

<code src='./demos/app13.tsx' background="#f5f5f5"></code>

### tableExtra title footer summary

<code src='./demos/app14.tsx' background="#f5f5f5"></code>

### 与弹窗 抽屉集成 1

<code src='./demos/app15.tsx' background="#f5f5f5"></code>

### 与弹窗 抽屉集成 2

<code src='./demos/app16.tsx' background="#f5f5f5"></code>

### 自定义渲染

<code src='./demos/app17.tsx' background="#f5f5f5"></code>

### 与骨架屏结合

<code src='./demos/app19.tsx' background="#f5f5f5"></code>

### 动态列 columns

<code src='./demos/app18.tsx' background="#f5f5f5"></code>

### 表格选中功能

<code src='./demos/app30.tsx' background="#f5f5f5"></code>

### 树形表格与展开

<code src='./demos/app21.tsx' background="#f5f5f5"></code>

### 使用 dataSource

<code src='./demos/app20.tsx' background="#f5f5f5"></code>

### 无边框表格与排序

### Excel 导入与导出

[表格的导出 - json2Excel ](/scene/table-Export) <br>
[表格的导入 - excel2Json 或 getExcelData ](/scene/excel-Import)

### 编辑表格

[LEditTable - 高级编辑表格](/components/edit-table) <br>
[antd - 编辑表格行示例](https://ant.design/components/table-cn#components-table-demo-edit-row) <br>
[antd - 编辑表格单元格示例](https://ant.design/components/table-cn#components-table-demo-edit-cell) <br>

### 拖拽表格

[拖拽排序](https://ant.design/components/table-cn#components-table-demo-drag-sorting) <br>
[拖拽手柄](https://ant.design/components/table-cn#components-table-demo-drag-sorting-handler)

### 虚拟表格

`antd 版本 >= 5.9.0`时可通过 `virtual` 开启虚拟滚动，此时 `scroll.x` 与 `scroll.y` 必须设置且为 `number` 类型。
[虚拟表格](https://ant.design/components/table-cn#components-table-demo-virtual-list)

## API

:::warning{title=注意}

- 想要获取每个属性方法的类型可通过 `Parameters<typeof LTable>[0]['xxx']` 或 `LTableProps['xxx']` 以便获得更多类型提示

- 必须指定 `rowKey`属性 且必须是数据源的唯一标识的字段, 不能改变

- 绝大多数情况都使用`request`来返回表格的数据，而不是直接配置`dataSource`，这样内部会自动帮你管理`分页`，`loading` 等

- 特殊场景下你依然可以使用 `dataSource` 这时所有`tableRef`内部的方法数据均`无效`, `分页` `loading` 数据渲染都有你来控制

- **一旦配置了`dataSource（即便为空数组）`, `request` 及其相关的属性方法均无效, `tableRef` 的 `onSearch` `onReload` `onReset` `onCustomSearch` `setTableData`也不会生生效**

- `request`返回值必须是 `{ success:boolean , data: Record<string, any>[], total: number | string  }` 如果与接口返回的数据结构不一致, 请自行处理成符合的数据结构

- `request`的第一个参数为`当前的页码和分页数量`, 如果配置了表单`formItems 的长度大于 0`则还有表单的值 `formValues`

- `request`的第二个参数表示当前请求的类型， `autoRequest` 为 `true` 时的组件初始化的请求为 `'onInit'`， 表单查询按钮请求为 `'onSearch'`，表格分页查询与内置工具栏的刷新为 `'onReload'`，表单重置按钮为 `'onReset'`, 使用 `onCustomSearch` 方法为 `onCustomSearch`

- `tableRef.current.onSearch()` 意思为根据表单条件，从第一页以及当前的分页数量开始显示、查询数据

- `tableRef.current.onReload()` 意思为根据表单条件，当前页，当前的分页数量、刷新数据、查询数据

- `tableRef.current.onReset()` 意思为重置表单数据，从第一页以及默认的分页数量开始显示、查询数据

- `tableRef.current.onCustomSearch()` 意思为根据表单条件, 从`传入的页码和分页数量`开始显示、查询数据

- `tableRef.current.setTableData()` 突变表格数据时需要返回新的对象包含`list` `total`属性，并且每次更新时需要 `list` 引用地址不一样才能更新界面

- `requestOptions`可配置 `ahook` 的 `useRequest`更多高级的请求功能 具体请看 `useRequest`的文档

- 如果请求太快导致 `loading` 闪一下，建议配置`requestOptions={{ loadingDelay:300  }}`或`loading={{ delay:200 }}`有效防止闪烁。 `200 ~ 300`即可。

- 内置的表单查询本质是 [LQueryForm] 组件, 继承其所有的配置项

- 对于很`复杂的表单`作为`LTable`的查询参数时, 可通过自定义表单然后在`onFinish`事件中调用 `tableRef.current.onSearch()`等方法, 并在 `request` 中获取表单的值并整合分页参数后传值给接口函数

- 手动设置查询表单不改变查询表单的默认值 `formInitialValues`，而是通过 `formRef.current.setFieldsValue()`设置表单值，再进行查询，这样不影响查询表单的重置操作。比如通过 `URL` 带一些默认或者接受路由参数查询。

- 当表格全屏时无法显示 `Modal` `下拉框`等组件? 全屏本质上是把你的表格区域 `fixed` 了，所以你需要把 `Modal` `下拉`等组件 的 `getPopupContainer` 设置为了 `LTable` 组件的根标签 的区域

- 内部默认优化了数据多时性能特别差，滚动页面会特别卡顿问题, 鼠标移入每个单元格`tr`时不会再有 `ant-table-cell-hover`类名, 如果想回到原 Table 默认的类名 请查看 [示例](/components/table#antdtable-默认的-tr-元素属性), 如果需要 hover 效果推荐使用 `showHover`

- 无特殊情况，建议把 `columns` 与 `formItems` `toolbarActionConfig` `样式对象` 等引用类型都配置到函数组件的外部作用域。

- `columns`的每一项扩展了 `toolTip` `exportRender`属性, 前者用于`当前列的自定义省略单元格内容, 内部使用`Tooltip 组件`替代, 后者用于`当前列的自定义导出内容, 配合`json2Excel`方法自定义导出列数据的 `excel`

  :::

```ts
import { LTable } from 'lighting-design';
```

除了以下参数，其余和 [antd.Table](https://ant.design/components/table-cn/#api) 一样。

# LTable API 文档

## 基础属性

| 参数         | 说明                                                                                                                     | 类型                                                                                                                                   | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| columns      | 列配置，扩展了 `toolTip` 和 `exportRender` 字段                                                                          | `TableProps<T>['columns'] & { toolTip?: boolean \| TooltipProps; exportRender?: (val: any, row: T, i: number) => string \| number }[]` | -      |
| dataSource   | 表格数据，配置后 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 及相关属性失效 | `T[]`                                                                                                                                  | -      |
| sortColumn   | 是否需要排序序号及宽度，自定义渲染排序等                                                                                 | `boolean \| (ColumnType<T> & { render?: (pageCount: number, current: number, pageSize: number, index: number) => ReactNode })`         | -      |
| gap          | 配置了表单项后，查询表单与表格的间距                                                                                     | `string \| number`                                                                                                                     | -      |
| rowStripe    | 是否展示带斑马纹的表格，string 可设置自定义颜色                                                                          | `boolean \| string`                                                                                                                    | -      |
| borderless   | 无边框表格，需要同时将 `bordered` 设置为 `false`                                                                         | `boolean`                                                                                                                              | -      |
| rowHoverable | 鼠标移入每一行是否有 hover 效果，string 可设置自定义颜色                                                                 | `string \| boolean`                                                                                                                    | -      |

## 请求相关属性

| 参数                 | 说明                                                                                                                                        | 类型                  | 默认值  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| request              | 异步请求函数用于获取表格数据                                                                                                                | `LTableRequest<T>`    | -       |
| requestAuto          | 是否在第一次渲染时自动请求 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)                         | `boolean`             | `true`  |
| requestOnce          | [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 是否只执行一次，一般用于一次性请求所有数据         | `boolean`             | `false` |
| requestInitialParams | [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 初始请求的额外参数，仅在第一次自动请求和重置时传入 | `Record<string, any>` | -       |
| requestExtraParams   | [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 的额外参数，每次请求都会传入                       | `Record<string, any>` | -       |
| requestOptions       | `ahooks` 的 `useRequest` 配置项                                                                                                             | `Options<any, any>`   | -       |
| requestCacheKey      | 配置后开启表格缓存，会缓存分页信息与表单信息                                                                                                | `string`              | -       |
| isRequestCacheParams | 配置了 [requestCacheKey](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L180-L180) 后，是否缓存请求的 params 参数      | `boolean`             | `false` |

## 表单相关属性

| 参数              | 说明                                                                                                                                    | 类型                                       | 默认值 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------ |
| form              | 查询表单的实例                                                                                                                          | `FormInstance<any>`                        | -      |
| formItems         | 查询表单项数组，用法与 [LQueryForm](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L66-L169) 一致                   | `LQueryFormProps['items']`                 | -      |
| formInitialValues | 查询表单的初始值，只在组件初始化时生效                                                                                                  | `Record<string, any>`                      | -      |
| queryFormProps    | 高级查询表单的 props，可使用 [LQueryForm](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L66-L169) 组件的所有配置项 | `Omit<LQueryFormProps, 'form' \| 'items'>` | -      |
| formCardProps     | 查询表单外层的 CardProps                                                                                                                | `CardProps`                                | -      |

## 实例与引用

| 参数      | 说明                               | 类型                                                | 默认值 |
| --------- | ---------------------------------- | --------------------------------------------------- | ------ |
| actionRef | 表格的实例，包含一些方法和属性数据 | `MutableRefObject<LTableActionRef<T> \| undefined>` | -      |
| ref       | 表格引用                           | `Parameters<typeof Table>[0]['ref']`                | -      |

## 样式与布局

| 参数             | 说明                       | 类型            | 默认值 |
| ---------------- | -------------------------- | --------------- | ------ |
| tableClassName   | antd Table 的类名          | `string`        | -      |
| tableStyle       | antd Table 的样式          | `CSSProperties` | -      |
| toolbarStyle     | 整个 toolbar 容器的样式    | `CSSProperties` | -      |
| toolbarClassName | 整个 toolbar 宺器的类名    | `string`        | -      |
| tableCardProps   | 表格外层的 CardProps       | `CardProps`     | -      |
| toolbar          | 表格上部内容，查询表单之下 | `ReactNode`     | -      |
| tableExtra       | 卡片表格上部的额外内容     | `ReactNode`     | -      |
| className        | 组件最外层的样式类         | `string`        | -      |
| style            | 组件最外层的样式           | `CSSProperties` | -      |

## 渲染相关

| 参数         | 说明                                                                                             | 类型                                                                                                                                                                                                                                                            | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| renderEmpty  | 在数据为空的情况下，重新渲染空数据的组件                                                         | `() => ReactNode`                                                                                                                                                                                                                                               | -      |
| renderLTable | 重新渲染整个 [LTable](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\index.tsx#L25-L443) | `(doms: { formDom: ReactNode; toolbarDom: ReactNode; tableDom: ReactNode; paginationDom: ReactNode }, state: Pick<LTableActionRef, 'tableData' \| 'params' \| 'pagination' \| 'loading' \| 'initLoading' \| 'noInitLoading'>, props: LTableProps) => ReactNode` | -      |

## 分页相关

| 参数       | 说明                                 | 类型                       | 默认值 |
| ---------- | ------------------------------------ | -------------------------- | ------ |
| pagination | 分页配置，传入配置可覆盖内置分页配置 | `false \| PaginationProps` | -      |

## LTableActionRef 方法

| 方法         | 说明                                                                            | 参数                                                                                                    |
| ------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| onReload     | 根据 `extraParams` `当前表单数据`，`当前页`，`当前分页数量` 查询表格数据        | `extraParams?: Record<string, any>`                                                                     |
| onCustom     | 根据传入的 `current` `pageSize` `当前表单数据` `extraParams` 查询表格数据       | `{ current: number; pageSize: number; extraParams?: Record<string, any>; isResetFormValues?: boolean }` |
| onReset      | 根据 `extraParams` `表单初始值` `requestInitialParams` 默认页和分页数量查询数据 | `extraParams?: Record<string, any>`                                                                     |
| onSearch     | 根据 `extraParams` `当前表单数据`，默认页以及当前分页数量查询数据               | `extraParams?: Record<string, any>`                                                                     |
| setTableData | 直接修改表格的数据与总数（仅在使用 `request` 获取数据有效）                     | `Dispatch<SetStateAction<{ list: T[]; total: number }>>`                                                |

## 类型定义

### LTableRequestType

请求类型：

- `'init'`: 初始化请求
- `'search'`: 表单搜索请求
- `'reload'`: 重新加载请求
- `'reset'`: 重置请求
- `'custom'`: 自定义请求
- `'pagination'`: 分页请求

### LTableRequestParams

请求参数对象：

```typescript
{
  current: number;           // 当前页码
  pageSize: number;          // 分页大小
  formValues?: Record<string, any>; // 表单数据
  [key: string]: any;        // 其他参数
}
```
