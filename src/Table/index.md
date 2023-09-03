---
title: LTable
toc: content
nav:
  path: /components
---

# LTable

高级表格组件

**特点**

- 完美兼容原 Table
- 支持请求数据并缓存
- 自动捕获请求错误
- 自动管理 loading 分页
- 支持卡片形式的表格
- 内置表格工具，内置排序
- 内置表单查询各种功能
- 可自定义各种配置，样式等

## 代码演示

### 查询框

<code src='./demos/Demo5.tsx' background="#f5f5f5"></code>

### 操作栏

<code src='./demos/Demo1.tsx' background="#f5f5f5"></code>

### 手动控制 loading

<code src='./demos/Demo11.tsx' background="#f5f5f5"></code>

### 增加序号列

<code src='./demos/Demo10.tsx' background="#f5f5f5"></code>

### 重新排序内置工具栏

<code src='./demos/Demo8.tsx' background="#f5f5f5"></code>

### 隐藏部分内置工具栏

<code src='./demos/Demo9.tsx' background="#f5f5f5"></code>

### 隐藏分页栏

<code src='./demos/Demo2.tsx' background="#f5f5f5"></code>

### 表格额外信息

<code src='./demos/Demo3.tsx' background="#f5f5f5"></code>

### 卡片形式

<code src='./demos/Demo6.tsx' background="#f5f5f5"></code>

### 异步表单初始值

<code src='./demos/Demo4.tsx' background="#f5f5f5"></code>

### 手动设置查询表单

<code src='./demos/Demo7.tsx' background="#f5f5f5"></code>

### 填充视口剩余空间

不要在弹窗，抽屉，下拉等组件中使用

<code src='./demos/Demo12.tsx' background="#f5f5f5"  ></code>

### 通过 Less 修改样式

<code src='./demos/Demo13.tsx' background="#f5f5f5"  ></code>

### 通过 Token 修改样式

`antd` 的版本要大于等于 `5.7.0`

<code src='./demos/Demo15.tsx' background="#f5f5f5"  ></code>

### 自定义渲染组合表格

<code src='./demos/Demo14.tsx' background="#f5f5f5"></code>

### Skeleton 骨架屏 1

<code src='./demos/Demo16.tsx' background="#f5f5f5"></code>

### Skeleton 骨架屏 2

<code src='./demos/Demo17.tsx' background="#f5f5f5"></code>

### 编辑表格

[编辑表格行](https://ant.design/components/table-cn#components-table-demo-edit-row)
[编辑表格单元格](https://ant.design/components/table-cn#components-table-demo-edit-cell)

### 拖拽表格

[拖拽排序](https://ant.design/components/table-cn#components-table-demo-drag-sorting)
[拖拽手柄](https://ant.design/components/table-cn#components-table-demo-drag-sorting-handler)

### 虚拟表格

[虚拟表格](https://ant.design/components/table-cn#components-table-demo-virtual-list)

## API

:::warning{title=注意}

- 大多数情况尽量使用`request`来返回表格的数据，而不是直接配置`dataSource`，这样内部会自动帮你管理`分页`，`loading` 等 ,特殊场景下你依然可以使用 `dataSource` , 比如: 外层`Skeleton` 骨架屏, 这时 `分页` `loading`都有你来控制

- `request`的第一个参数为当前的页码和分页数量 如果配置了表单则还有表单的值，

- `request`的第二个参数表示当前请求的类型， `autoRequest` 为 `true` 时的组件初始化的请求为 `'onInit'`， 表单查询按钮请求为 `'onSearch'`，表格分页查询与内置工具栏的刷新为 `'onReload'`，表单重置按钮为 `'onReset'`，如果没有配置 `formItems` 则为 `undefined`

- `requestOptions`可配置 `ahook` 的 `useRequest`更多高级的请求功能 具体请看 `useRequest`的文档

- 如果请求太快导致 `loading` 闪一下，建议配置`requestOptions={{ loadingDelay:300  }}`有效防止闪烁。 `200 ~ 300`即可。

- 手动设置查询表单不改变查询表单的默认值 `formInitialValues`，而是通过 `formRef.current.setFieldsValue()`设置表单值，再进行查询，这样不影响查询表单的重置操作。比如通过 `URL` 带一些默认或者接受路由参数查询。

- 当表格全屏时无法显示 `Modal` `下拉框`等组件? 全屏本质上是把你的表格区域 `fixed` 了，所以你需要把 `Modal` `下拉`等组件 的 `getPopupContainer` 设置为了 `LTable` 组件的根标签 的区域

:::

```ts
import { LTable } from 'lighting-design';
```

除了以下参数，其余和 [antd.Table](https://ant.design/components/table-cn/#api) 一样。

| 参数                 | 说明                                                                                                         | 类型                                                                           | 默认值                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| isSort               | 表格是否需要排序序号及宽度                                                                                   | ` boolean \| { width: number \| string }`                                      | `false`                                                       |
| fillSpace            | 是否占满视口剩余空间的高度 (为`number`类型时控制距离底部视口还剩多少 )`(不要在弹窗，抽屉，下拉等组件中配置)` | `boolean \| number `                                                           | `false`                                                       |
| isReady              | 表格 表单是否准备好 false 时表格不会请求 表单不能提交查询                                                    | `boolean`                                                                      | `true`                                                        |
| fullScreenBgColor    | 全屏时显示的背景颜色                                                                                         | `string`                                                                       | `#fff`                                                        |
| autoRequest          | 是否在第一次渲染时自动请求                                                                                   | `boolean`                                                                      | `true`                                                        |
| defaultRequestParams | request 额外参数(仅在第一次`autoRequest 为 true`请求时会携带 ) 会被注入到 request 的第一个参数对象中         | `Record<string, any>`                                                          | `-`                                                           |
| request              | 异步请求函数，用于获取表格数据                                                                               | [LTableRequest](/components/table#ltablerequest)                               | `-`                                                           |
| requestOptions       | `ahooks 的 useRequest 的 options 配置` 可用于配置其他请求功能                                                | [useRequest](https://ahooks.js.org/zh-CN/hooks/use-request/basic#options)      | `-`                                                           |
| formRef              | 查询表单的实例                                                                                               | `MutableRefObject<FormInstance \| undefined> \| ((ref: FormInstance) => void)` | `-`                                                           |
| tableRef             | 表格的实例 包含一些方法                                                                                      | ` MutableRefObject<LTableInstance \| undefined>`                               | `-`                                                           |
| rootClassName        | 表格最外层根 div 类名                                                                                        | `string`                                                                       | `-`                                                           |
| tableClassName       | `antd` 表格额外类名                                                                                          | `string`                                                                       | `-`                                                           |
| tableStyle           | `antd` 表格额外样式                                                                                          | `CSSProperties`                                                                | `-`                                                           |
| rootStyle            | 表格最外层根 div 样式                                                                                        | `CSSProperties`                                                                | `-`                                                           |
| toolbarStyle         | 整个`toolbar`的样式 `showToolbar` 为 `true` 时生效                                                           | `CSSProperties`                                                                | `{ marginBottom: 16}`                                         |
| formCardProps        | 查询表单外层的 `Card` 组件的 `CardProps`                                                                     | [CardProps](https://ant.design/components/card-cn/#api)                        | `{ style:{marginBottom: 16},bodyStyle:{paddingBottom: 0}}}  ` |
| tableCardProps       | 表格外层的 `Card` 组件的 `CardProps`                                                                         | [CardProps](https://ant.design/components/card-cn/#api)                        | `-`                                                           |
| showToolbar          | 是否显示整个 toolbar 为 `false` 时不会渲染 `toolbarLeft` 与 `toolbarRight`                                   | `boolean`                                                                      | `true`                                                        |
| toolbarActionConfig  | 配置内置表格工具栏 与 Space 组件有相同属性 `showToolbar 为 true` 时生效                                      | [LToolbarActionProps](/components/table#ltoolbaractionprops)                   | `-`                                                           |
| toolbarRender        | 重新渲染 `toolBar` 包括内置表格工具                                                                          | `(ToolbarActionDom: ReactNode) => ReactNode`                                   | `-`                                                           |
| tableRender          | 重新渲染整个表格                                                                                             | [LTableRenderProps](/components/table#ltablerenderprops)                       | `-`                                                           |
| contentRender        | 重新渲染表格内容                                                                                             | `(data: Record<string, any>[]) => ReactNode`                                   | `-`                                                           |
| toolbarLeft          | 整个 toolBar 的左侧                                                                                          | `ReactNode`                                                                    | `-`                                                           |
| toolbarRight         | 整个 toolBar 的右侧 在内置表格工具左侧                                                                       | `ReactNode`                                                                    | `-`                                                           |
| tableExtra           | 表格内容上部区域                                                                                             | `ReactNode`                                                                    | `-`                                                           |
| formItems            | 表单查询框组                                                                                                 | `LFormItemXXX[] \| Form.Item[]`                                                | `-`                                                           |
| formInitialValues    | 查询表单初始值只在第一次组件渲染生效                                                                         | `Record<string, any>`                                                          | `-`                                                           |
| queryFormProps       | 用于配置查询表单`LQueryFormProps`                                                                            | [LQueryFormProps](/components/query-form)                                      | `-`                                                           |

### LTableRequest

```ts
export type LTableRequest = (
  /** 请求参数 */
  params: LTableRequestParams,
  /** 请求类型 */
  requestType: LTableRequestType,
) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>; // 返回值必须包含 success data total
```

### LTableRequestParams

```ts
export type LTableRequestParams = {
  /** 当前页 */
  current: number;
  /** 一页多少条 */
  pageSize: number;
  /** 表单数据 */
  formValues?: Record<string, any>;
  /** 其他参数 */
  [key: string]: any;
};
```

### LTableRenderProps

```ts
export type LTableRenderProps = (
  doms: {
    /** 顶部表单dom */
    searchFormDom: ReactNode;
    /** 工具栏dom */
    toolbarDom: ReactNode;
    /**  table内容上面额外dom 如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /**  table主体dom 包含工具栏dom(如果showToolbar为false则不包含)  */
    tableDom: ReactNode;
    /** 整个表格dom 包含全部的dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactElement;
```

### LTableRequestType

```ts
// autoRequest 为 true 时的组件初始化的请求为 'onInit';
// 表格查询按钮请求为 'onSearch'
// 表格分页查询为 'onReload'
// 表格重置按钮为 'onReset'
export type LTableRequestType =
  | 'onInit'
  | 'onSearch'
  | 'onReload'
  | 'onReset'
  | undefined;
```

### LTableInstance

```ts
export type MutableRefObject<LTableInstance|undefined > = {
  // 根据条件，当前页、刷新数据
  onReload: () => void;
  // 重置数据，从第一页开始显示、查询数据
  onReset: () => void;
  // 根据条件，从第一页开始显示、查询数据
  onSearch: () => void;
  // 表格根标签div
  rootRef: RefObject<HTMLDivElement>;
  // 表格数据
  tableData: Record<string, any>[];
  // 直接修改当前表格的数据
  // 用法与 React.setState 一致，支持 setTableData(newData) 和 setTableData((oldData) => newData) 两种写法。
  setTableData: Dispatch<SetStateAction<Record<string,any>[]>;
  // 页码信息及方法
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    totalPage: number;
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
  /** 内置图标的排序 需从大于等于 1 开始设置*/
  orders?: {
    reload: number;
    density: number;
    fullscreen: number;
    columnSetting: number;
  };
  /** 所有内置图标的样式 */
  style?: CSSProperties; // 默认字体大小16px 字体颜色黑色
} & SpaceProps;
```
