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
- [x] 支持卡片形式的表格
- [x] 内置实用表格工具栏
- [x] 内置实用高级表单查询
- [x] 简化 Table 样式配置
- [x] 高灵或可定制性各种配置
- [x] 默认优化原 `Table` 性能

## 代码演示

### 基础用法

<code src='./demos/demo.tsx' background="#f5f5f5"></code>

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

| 参数                 | 说明                                                                                                                                         | 类型                                                                              | 默认值                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- |
| isSort               | 表格是否需要排序序号以及宽度 标题 自定义渲染等                                                                                               | ` boolean \|  ColumnType & {render?: (pageCount: number) => ReactNode}`           | `false`                           |
| fillSpace            | 是否占满视口剩余空间的高度, **number 类型时控制距离底部视口还剩多少** <br>表格的分页会在视口底部显示, **不要在弹窗，抽屉，下拉等组件中配置** | `boolean \| number `                                                              | `false`                           |
| isReady              | 表格 表单是否准备好, **false 时表格自动不会请求, 表单不能提交查询**                                                                          | `boolean`                                                                         | `true`                            |
| showStripe           | 是否隔行展示表格的斑马纹, **true 时颜色为#fafafa, string 类型可自定义颜色**                                                                  | `boolean\|string`                                                                 | `false`                           |
| showHover            | 鼠标移入每一行是否有 hover 高亮效果, **true 时颜色为#fafafa , string 类型可自定义颜色**                                                      | `boolean\|string`                                                                 | `false`                           |
| showHorizontalBorder | 是否展示水平方向的边框, <br>**配合`antd.bordered = false`(bordered 默认为 false) 可做到真正无边框表格**                                      | `boolean`                                                                         | `true`                            |
| showToolbar          | 是否显示整个 `toolbar` <br>**为 `false` 时不会渲染`内置表格工具栏` `toolbarLeft` `toolbarRight`**                                            | `boolean`                                                                         | `true`                            |
| autoRequest          | 是否在第一次渲染时自动请求                                                                                                                   | `boolean`                                                                         | `true`                            |
| fullScreenBgColor    | 全屏时显示的背景颜色                                                                                                                         | `string`                                                                          | `#fff`                            |
| request              | 异步请求表格数据函数，不能与 `dataSource` 同时配置, <br>**一旦配置 dataSource（即便为空数组）`request`及其相关属性方法将不生效**             | [LTableRequest](/components/table#ltablerequest)                                  | `-`                               |
| defaultRequestParams | `request` 默认参数 **仅第一次组件加载完成且`autoRequest 为 true 请求时会生效 <br>会被注入到 request 的第一个参数对象中**                     | `Record<string, any>`                                                             | `-`                               |
| requestCacheKey      | 开启表格数据缓存 **会缓存分页信息与表单信息**                                                                                                | `string`                                                                          | `-`                               |
| requestBefore        | 调用`request`之前的回调, **如果有返回值会被注入到 request 的第一个参数对象中**                                                               | `(...args: any[]) => Partial<LTableRequestParams>     \| void 0`                  | `-`                               |
| requestSuccess       | `request`请求成功后的回调 **每次成功都会调用, 包括第一次**                                                                                   | `RequestSuccess`                                                                  | `-`                               |
| requestFirstSuccess  | 在`request`**第一次请求成功**后的回调                                                                                                        | `RequestSuccess`                                                                  | `-`                               |
| requestFinally       | `request`请求完成后的回调 **失败, 成功都会调用**                                                                                             | `RequestFinally`                                                                  | `-`                               |
| requestOptions       | `ahooks 的 useRequest 的 options 配置`, 可用于配置其他请求功能                                                                               | [useRequest](https://ahooks.js.org/zh-CN/hooks/use-request/basic#options)         | `-`                               |
| formRef              | 查询表单的实例                                                                                                                               | `MutableRefObject<FormInstance \| undefined> \| ((ref: FormInstance) => void)`    | `-`                               |
| tableRef             | 表格的实例, 包含请求方法和表格的数据等                                                                                                       | ` MutableRefObject<LTableInstance \| undefined>`                                  | `-`                               |
| rootClassName        | 根 div 类名                                                                                                                                  | `string`                                                                          | `-`                               |
| rootStyle            | 根 div 样式                                                                                                                                  | `CSSProperties`                                                                   | `-`                               |
| toolbarStyle         | 整个`toolbar`的样式, **showToolbar 为`true`时生效**                                                                                          | `CSSProperties`                                                                   | `{ marginBottom: 16}`             |
| headerRowStyle       | 自定义表格头部行的样式                                                                                                                       | `CSSProperties \| ((columns: Record<string, any>[], i: number) => CSSProperties)` | `-`                               |
| headerCellStyle      | 自定义表格头部行的单元格的样式                                                                                                               | `CSSProperties \| ((columns: Record<string, any>[]) => CSSProperties);`           | `-`                               |
| rowStyle             | 自定义表格内容行的样式                                                                                                                       | `CSSProperties \| ((record: Record<string, any>, i: number) => CSSProperties);`   | `-`                               |
| cellStyle            | 自定义表格内容行的单元格的样式                                                                                                               | `CSSProperties \| ((record: Record<string, any>, i: number) => CSSProperties);`   | `-`                               |
| formCardProps        | 查询表单外层的 `Card` 组件的 `CardProps`                                                                                                     | [CardProps](https://ant.design/components/card-cn/#api)                           | `{ style:{ marginBottom: 16} }  ` |
| tableCardProps       | 表格外层的 `Card` 组件的 `CardProps`                                                                                                         | [CardProps](https://ant.design/components/card-cn/#api)                           | `-`                               |
| toolbarActionConfig  | 配置内置表格工具栏, 与 Space 组件有相同属性, <br> **showToolbar 为 true 生效, toolbarActionConfig=false 不渲染内置表格工具**                 | [LToolbarActionProps](/components/table#ltoolbaractionprops) \| `false`           | `-`                               |
| toolbarLeft          | 整个 toolBar 的左侧                                                                                                                          | `ReactNode`                                                                       | `-`                               |
| toolbarRight         | 整个 toolBar 的右侧, <br>**如果有内置表格工具, 在内置表格工具左侧**                                                                          | `ReactNode`                                                                       | `-`                               |
| formItems            | 表单查询框组 **必须包含表单项**                                                                                                              | `LFormItemXXX[] \| Form.Item[] \| LFormItem[]`                                    | `-`                               |
| formInitialValues    | 查询表单初始值, 默认只在第一次组件渲染生效 **支持异步动态**                                                                                  | `Record<string, any>`                                                             | `-`                               |
| queryFormProps       | 用于配置查询表单 [LQueryForm] 的 `Props`                                                                                                     | [LQueryFormProps](/components/query-form)                                         | `-`                               |
| tableExtra           | 表格`Card`上部区域, **在表单的 Card 下面**                                                                                                   | `ReactNode`                                                                       | `-`                               |
| toolbarRender        | 重新渲染 `toolBar` 包括内置表格工具                                                                                                          | `(toolbarActionDom: ReactNode,toolbarDom: ReactNode) => ReactNode`                | `-`                               |
| contentRender        | 重新渲染表格内容, **一般用于卡片表格**                                                                                                       | `(data: Record<string, any>[]) => ReactNode`                                      | `-`                               |
| emptyRender          | 重新渲染空数据下的表格内容                                                                                                                   | `() => ReactNode`                                                                 | `-`                               |
| tableHeaderRender    | 重新渲染 antd 表格的头部列                                                                                                                   | `(columns: Record<string, any>[],data: Record<string, any>[]) => ReactNode`       | `-`                               |
| tableRender          | 重新渲染整个表格                                                                                                                             | [LTableRenderProps](/components/table#ltablerenderprops)                          | `-`                               |

### LTableRequest

```ts
export type LTableRequest = (
  /** 请求参数 */
  params: LTableRequestParams,
  /** 请求类型 */
  requestType: LTableRequestType,
  ...args: any[]
) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>; // 返回值必须包含 success data total
```

### LTableRequestParams

```ts
export type LTableRequestParams = {
  /** 当前页 */
  current: number;
  /** 一页多少条 */
  pageSize: number;
  /** 表单数据, 如果没有formItems则没有*/
  formValues?: Record<string, any>;
  /** 通过表格的 onReload  onReset  onSearch onCustomSearch 方法或者 defaultRequestParams 传递其他额外参数 */
  [key: string]: any;
};
```

### LTableRequestType

```ts
// autoRequest 为 true 时的组件初始化的请求为 'onInit';
// 表格查询按钮请求为 'onSearch'
// 表格分页查询为 'onReload'
// 表格重置按钮为 'onReset'
// 使用 onCustomSearch 方法为 'onCustomSearch'
export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset' | 'onCustomSearch';
```

### LTableRenderProps

```ts
export type LTableRenderProps = (
  doms: {
    /** 内部表单dom */
    searchFormDom: ReactNode;
    /** 内置工具栏dom */
    toolbarActionDom: ReactNode;
    /** 整个 toolbar dom, 包含 toolbarActionDom*/
    toolbarDom: ReactNode;
    /** 在 tableDom 上面, 在 searchFormDom下面的额外 dom ,如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /** 被Card包函的table主体dom,且外层没有Spin组件, 包含 toolbarDom  */
    tableCardDom: ReactNode;
    /** 被Card包函的table主体dom,且外层有Spin组件, 包含 toolbarDom  */
    tableDom: ReactNode;
    /** 整个高级表格dom 包含全部的dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactNode;
```

### LTableInstance

```ts
export type MutableRefObject<LTableInstance|undefined > = {
  // 根据条件，当前页，分页数量、刷新数据
  onReload: (extraParams?: Record<string, any>) => void;
  // 重置表单，从第一页以及默认的分页数量开始显示、查询数据
  onReset: (extraParams?: Record<string, any>) => void;
  // 根据条件，从第一页以及当前的分页数量开始显示、查询数据
  onSearch: (extraParams?: Record<string, any>) => void;
  // 根据传入的 current pageSize 参数，当前表单数据、查询数据
  onCustomSearch: (current: number, pageSize: number, extraParams?: Record<string, any>) => void;
  // 表格根标签div
  rootRef: RefObject<HTMLDivElement>;
  // request 请求的参数
  params:[LTableRequestParams,LTableRequestType]|[]
  // 表格数据
  tableData: Record<string, any>[];
  // 直接修改当前表格的数据 建议使用函数的形式
  // 用法与 React.setState 一致，支持 setTableData(newData) 和 setTableData((oldData) => newData) 两种写法。
  // 每次更新需要 list 引用地址不一样才能更新界面
  setTableData:  setTableData: Dispatch<
    SetStateAction<{
      list: Record<string, any>[];
      total: number;
    }>
  >
  // 页码信息及方法
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    totalPage: number;
    //(不建议外部使用) 以下方法会重新请求数据 , 会导致 request 的第一个参数不会有表单数据 并且第二个参数为 undefined
    onChange: (current: number, pageSize: number) => void;
    changeCurrent: (current: number) => void;
    changePageSize: (pageSize: number) => void;
  };
};




```

### LToolbarActionProps

```ts
export type LToolbarActionProps = {
  /** 是否显示刷新  默认显示*/
  showReload?: boolean;
  /** 是否显示列设置 默认显示*/
  showColumnSetting?: boolean;
  /** 是否显示表格密度 默认显示*/
  showDensity?: boolean;
  /** 是否显示全屏 默认显示*/
  showFullscreen?: boolean;
  /** 点击刷新图标的回调 */
  onReloadIconChange?: () => void;
  /** 点击列图标中每一项复选框改变后的回调 */
  onColumnIconChange?: (keys: string[]) => void;
  /** 全屏切换时的回调 */
  onFullscreenIconChange?: (isFullScreen: boolean) => void;
  /** 表格密度改变时的回调 */
  onDensityIconChange?: (size: 'middle' | 'small' | 'large') => void;
  /** 内置图标的排序 需从大于等于 1 开始设置*/
  orders?: {
    reload: number;
    density: number;
    fullscreen: number;
    columnSetting: number;
  };
  /** 所有内置图标的样式 */
  style?: CSSProperties; // 默认字体大小16px 字体颜色黑色
  /** 自定义渲染内置操作栏 */
  render?: (doms: ReactNode[]) => ReactNode;
} & SpaceProps;
```

### RequestSuccess

```ts
type RequestSuccess = (
  data: {
    list: Record<string, any>[];
    total: number;
  },
  params: [
    {
      [key: string]: any;
      current: number;
      pageSize: number;
      formValues?: Record<string, any> | undefined;
    },
    'onInit' | 'onSearch' | 'onReload' | 'onReset' | undefined,
  ],
) => void;
```

### RequestFinally

```ts
type RequestFinally =
  | ((
      params: [
        {
          [key: string]: any;
          current: number;
          pageSize: number;
          formValues?: Record<string, any> | undefined;
        },
        'onReset' | 'onInit' | 'onSearch' | 'onReload' | undefined,
      ],
      data: {
        list: Record<string, any>[];
        total: number;
      },
      e?: Error | undefined,
    ) => void)
  | undefined;
```

[LQueryForm]: /components/query-form
