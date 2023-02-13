---
title: LTable
order: 2
nav:
  order: 2
  path: /components
---

# LTable

高级表格组件

**特点**

- 支持请求获取数据
- 自动管理 loading
- 支持卡片形式的表格
- 内置表格工具
- 可自定义配置

## 代码演示

### 基础用法

 <code src='./demos/Demo5.tsx' background="#f5f5f5">

### 操作栏

 <code src='./demos/Demo1.tsx' background="#f5f5f5">

### 简易表格

 <code src='./demos/Demo2.tsx' background="#f5f5f5">

### 表格额外信息

 <code src='./demos/Demo3.tsx' background="#f5f5f5">

### 卡片形式

 <code src='./demos/Demo6.tsx' background="#f5f5f5">
 
 ### 异步表单初始值

 <code src='./demos/Demo4.tsx' background="#f5f5f5">

### 手动设置查询表单

 <code src='./demos/Demo7.tsx' background="#f5f5f5">

## API

```ts
import { LTable } from 'lighting-design';
```

> 手动设置查询表单不改变查询表单的 formInitialValues，而是通过 formRef 设置表单值，再进行查询，这样不影响查询表单的重置操作。比如通过 URL 带一些默认查询参数。
>
> 当表格全屏时无法显示 Modal 等组件? 全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal 等组件 的 getPopupContainer 设置为了 table 的区域

除了以下参数，其余和 [antd.Table](https://4x.ant.design/components/table-cn/#API) 一样。

<!-- | fillSpace | 表格外层 div 是否占满剩余空间 | `boolean` | `false` | -->

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| isSort | 表格是否需要排序序号 | `boolean` | `false` |
| isReady | 表格 表单是否准备好 false 时表格不会请求 表单不能提交查询 | `boolean` | `true` |
| fullScreenBgColor | 全屏时显示的背景颜色 | `string` | `#fff` |
| nowrap | 表格宽度超过 100%自动处理横向滚动条。 | `boolean` | `true` |
| requestParams | 异步请求函数额外参数 | `Record<string, any>` | `-` |
| request | 异步请求函数 | `LTableRequest` | `-` |
| autoRequest | 是否自动请求 | `boolean` | `true` |
| formRef | 查询表单的实例 | `MutableRefObject<FormInstance \| undefined> \| ((ref: FormInstance) => void)` | `-` |
| tableRef | 表格的实例 包含一些方法 | ` MutableRefObject<LTableInstance \| undefined>` | `-` |
| rootClassName | 表格最外层根 div 类名 | `string` | `-` |
| tableClassName | `antd 表格`额外类名 | `string` | `-` |
| tableStyle | `antd 表格`额外样式 | `CSSProperties` | `-` |
| rootStyle | `表格最外层根 div 样式 | `CSSProperties` | `-` |
| formCardProps | 查询表单外层的 `Card` 组件的 `CardProps` | [CardProps](https://4x.ant.design/components/card-cn/#API) | `{style:{ borderRadius: 0 },bodyStyle:{paddingBottom: 0, marginBottom: 16}}` |
| tableCardProps | 表格外层的 `Card` 组件的 `CardProps` | [CardProps](https://4x.ant.design/components/card-cn/#API) | `{style:{ borderRadius: 0 }}` |
| showToolbar | 是否显示整个 toolbar | `boolean` | `true` |
| toolbarActionConfig | 配置内置表格工具栏 与 Space 组件有相同属性 showToolbar 为 true 时生效 | `LToolbarActionProps` | `-` |
| toolbarRender | 重新渲染 toolBar 包括内置表格工具 | `(ToolbarActionDom: ReactNode) => ReactNode` | `-` |
| tableRender | 重新渲染整个表格 | `LTableRenderProps` | `-` |
| contentRender | 重新渲染表格内容 | `(data: Record<string, any>[]) => ReactNode` | `-` |
| toolbarLeft | 整个 toolBar 的左侧 | `ReactNode` | `-` |
| toolbarRight | 整个 toolBar 的右侧 在内置表格工具左侧 | `ReactNode` | `-` |
| tableExtra | 表格内容上部区域 | `ReactNode` | `-` |
| formItems | 表单查询框组 | `LFormItemXX[] \| Form.Item[]` | `-` |
| formInitialValues | 查询表单初始值 | `Record<string, any>` | `-` |
| queryFormProps | 查询表单`LQueryFormProps` | [LQueryFormProps](/components/form/query-form) | `-` |

### LTableRequest

```ts
export type LTableRequest = (
  /** 请求参数 */
  params: {
    current: number;
    pageSize: number;
    formValues?: Record<string, any>;
    [key: string]: any;
  },
  /** 请求类型 */
  requestType: RequestType,
) => Promise<{ success: boolean; data: Record<string, any>[]; total: number }>;
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
export type LTableRequestType = 'onSearch' | 'onReload' | 'onReset';
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
  /** 图标样式 */
  style?: CSSProperties; // 默认字体大小16px 字体颜色黑色
} & SpaceProps;
```
