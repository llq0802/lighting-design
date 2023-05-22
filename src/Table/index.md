---
title: LTable
toc: content
nav:
  path: /components
---

# LTable

高级表格组件

**特点**

- 支持请求获取数据
- 自动捕获请求错误
- 自动管理 loading
- 支持卡片形式的表格
- 内置表格工具，内置排序
- 可自定义各种配置，样式等

## 代码演示

### 基础用法 111

<code src='./demos/Demo8.tsx' background="#f5f5f5"></code>

### 基础用法

<code src='./demos/Demo5.tsx' background="#f5f5f5"></code>

### 操作栏

<code src='./demos/Demo1.tsx' background="#f5f5f5"></code>

### 简易表格

<code src='./demos/Demo2.tsx' background="#f5f5f5"></code>

### 表格额外信息

<code src='./demos/Demo3.tsx' background="#f5f5f5"></code>

### 卡片形式

<code src='./demos/Demo6.tsx' background="#f5f5f5"></code>

### 异步表单初始值

<code src='./demos/Demo4.tsx' background="#f5f5f5"></code>

### 手动设置查询表单

 <code src='./demos/Demo7.tsx' background="#f5f5f5">

## API

```ts
import { LTable } from 'lighting-design';
```

> 手动设置查询表单不改变查询表单的 formInitialValues，而是通过 formRef 设置表单值，再进行查询，这样不影响查询表单的重置操作。比如通过 URL 带一些默认查询参数。
>
> 当表格全屏时无法显示 Modal 等组件? 全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal 等组件 的 getPopupContainer 设置为了 table 的区域

除了以下参数，其余和 [antd.Table](https://ant.design/components/table-cn/#api) 一样。

<!-- | fillSpace | 表格外层 div 是否占满剩余空间 | `boolean` | `false` | -->

| 参数                 | 说明                                                                     | 类型                                                                           | 默认值                                             |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| isSort               | 表格是否需要排序序号                                                     | `boolean`                                                                      | `false`                                            |
| isReady              | 表格 表单是否准备好 false 时表格不会请求 表单不能提交查询                | `boolean`                                                                      | `true`                                             |
| fullScreenBgColor    | 全屏时显示的背景颜色                                                     | `string`                                                                       | `#fff`                                             |
| nowrap               | 表格宽度超过 100%自动处理横向滚动条。                                    | `boolean`                                                                      | `true`                                             |
| autoRequest          | 是否自动请求                                                             | `boolean`                                                                      | `true`                                             |
| defaultRequestParams | 异步请求函数第一次额外参数(仅在第一次`autoRequest 为 true`请求时会携带 ) | `Record<string, any>`                                                          | `-`                                                |
| request              | 异步请求函数，用于获取表格数据                                           | `LTableRequest`                                                                | `-`                                                |
| requestOptions       | `useRequest`的配置 建议只配置`onError onSuccess回调` 其他不建议配置      | [useRequest](https://ahooks.js.org/zh-CN/hooks/use-request/basic#options)      | `-`                                                |
| formRef              | 查询表单的实例                                                           | `MutableRefObject<FormInstance \| undefined> \| ((ref: FormInstance) => void)` | `-`                                                |
| tableRef             | 表格的实例 包含一些方法                                                  | ` MutableRefObject<LTableInstance \| undefined>`                               | `-`                                                |
| rootClassName        | 表格最外层根 div 类名                                                    | `string`                                                                       | `-`                                                |
| tableClassName       | `antd` 表格额外类名                                                      | `string`                                                                       | `-`                                                |
| tableStyle           | `antd` 表格额外样式                                                      | `CSSProperties`                                                                | `-`                                                |
| rootStyle            | 表格最外层根 div 样式                                                    | `CSSProperties`                                                                | `-`                                                |
| toolbarStyle         | 整个`toolbar`的样式 `showToolbar` 为 `true` 时生效                       | `CSSProperties`                                                                | `{ marginBottom: 16}`                              |
| formCardProps        | 查询表单外层的 `Card` 组件的 `CardProps`                                 | [CardProps](https://ant.design/components/card-cn/#api)                        | `{bodyStyle:{paddingBottom: 0, marginBottom: 16}}` |
| tableCardProps       | 表格外层的 `Card` 组件的 `CardProps`                                     | [CardProps](https://ant.design/components/card-cn/#api)                        | `-`                                                |
| showToolbar          | 是否显示整个 toolbar                                                     | `boolean`                                                                      | `true`                                             |
| toolbarActionConfig  | 配置内置表格工具栏 与 Space 组件有相同属性 showToolbar 为 true 时生效    | `LToolbarActionProps`                                                          | `-`                                                |
| toolbarRender        | 重新渲染 toolBar 包括内置表格工具                                        | `(ToolbarActionDom: ReactNode) => ReactNode`                                   | `-`                                                |
| tableRender          | 重新渲染整个表格                                                         | `LTableRenderProps`                                                            | `-`                                                |
| contentRender        | 重新渲染表格内容                                                         | `(data: Record<string, any>[]) => ReactNode`                                   | `-`                                                |
| toolbarLeft          | 整个 toolBar 的左侧                                                      | `ReactNode`                                                                    | `-`                                                |
| toolbarRight         | 整个 toolBar 的右侧 在内置表格工具左侧                                   | `ReactNode`                                                                    | `-`                                                |
| tableExtra           | 表格内容上部区域                                                         | `ReactNode`                                                                    | `-`                                                |
| formItems            | 表单查询框组                                                             | `LFormItemXX[] \| Form.Item[]`                                                 | `-`                                                |
| formInitialValues    | 查询表单初始值                                                           | `Record<string, any>`                                                          | `-`                                                |
| queryFormProps       | 查询表单`LQueryFormProps`                                                | [LQueryFormProps](/components/form/query-form)                                 | `-`                                                |

### LTableRequest

```ts
export type LTableRequest = (
  /** 请求参数 */
  params: LTableRequestParams,
  /** 请求类型 */
  requestType: LTableRequestType,
) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>;
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
  optionsDom: {
    /** 表单dom */
    searchFormDom: ReactNode;
    /** 工具栏dom */
    toolbarDom: ReactNode;
    /**   table内容上面额外Dom 如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /**   table主体Dom 包含工具栏Dom  */
    tableDom: ReactNode;
    /** 整个表格Dom包含全部Dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactElement;
```

### LTableRequestType

```ts
// autoRequest 为 true 时才有 onInit;
// 查询按钮请求为 'onSearch'
// 表格分页查询为 'onReload'
export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset';
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
  // 页码信息
  pagination: {
    current: number;
    pageSize: number;
  };
};
```

### LToolbarActionProps

```ts
// 默认都显示
export type LToolbarActionProps = {
  /** 是否显示刷新 */
  showReload?: boolean;
  /** 是否显示列设置 */
  showColumnSetting?: boolean;
  /** 是否显示表格密度 */
  showDensity?: boolean;
  /** 是否显示全屏 */
  showFullscreen?: boolean;
  /** 点击刷新图标的回调 */
  onReloadIconChange?: () => void;
  /** 内置图标的排序 */
  orders?: {
    reload: number;
    density: number;
    fullscreen: number;
    columnSetting: number;
  };
  /** 图标样式 */
  style?: CSSProperties; // 默认字体大小16px 字体颜色黑色
} & SpaceProps;
```
