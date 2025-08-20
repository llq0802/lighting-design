import type { PaginationResult } from 'ahooks/lib/usePagination/types';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { CardProps, FormInstance, PaginationProps, Table, TableProps, TooltipProps } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { LQueryFormProps } from 'lighting-design/l-query-form/interface';
import type { CSSProperties, Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

/**
 * LTable 组件操作引用类型
 * 提供了操作表格的各种方法和属性
 * @template T 表格数据的类型
 */
export type LTableActionRef<T = any> = {
  /**
   * 根据`extraParams` `当前表单数据`，`当前页`，`当前分页数量`查询表格数据
   * @param extraParams 额外的查询参数
   */
  onReload: (extraParams?: Record<string, any>) => void;

  /**
   * 根据传入的 `current` `pageSize` `当前表单数据` `extraParams`查询表格数据
   * @param params 查询参数
   * @param params.current 当前页码
   * @param params.pageSize 每页条数
   * @param params.extraParams 额外参数
   * @param params.isResetFormValues 是否需要重置表单
   */
  onCustom: (params: {
    current: number;
    pageSize: number;
    extraParams?: Record<string, any>;
    /**是否需要重置表单 */
    isResetFormValues?: boolean;
  }) => void;

  /**
   * 根据 `extraParams` `表单初始值` [requestInitialParams](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L144-L144) 默认`(绝大数为第一页)`页, `默认的分页数量`查询数据
   * @param extraParams 额外的查询参数
   */
  onReset: (extraParams?: Record<string, any>) => void;

  /**
   * 根据`extraParams` `当前表单数据`，默认`(绝大数为第一页)`页以及 `当前的分页数量` 查询数据
   * @param extraParams 额外的查询参数
   */
  onSearch: (extraParams?: Record<string, any>) => void;

  /**
   * request 异步函数的参数
   */
  params: [LTableRequestParams, LTableRequestType] | [];

  /**
   * 表格数据与总数
   */
  tableData: {
    /** 表格数据列表 */
    list: T[];
    /** 数据总数 */
    total: number;
  };

  /**
   * 直接修改表格的数据与总数
   * - 仅在使用[request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)获取数据有效
   * @param value 新的表格数据
   */
  setTableData: Dispatch<SetStateAction<{ list: T[]; total: number }>>;

  /**
   * 页码信息以及方法
   */
  pagination: PaginationResult<any, any>['pagination'];

  /**
   * 加载状态
   */
  loading: boolean;

  /**
   * 初始化加载状态
   */
  initLoading: boolean;

  /**
   * 不是初始化加载的状态
   */
  noInitLoading: boolean;
};

/**
 * 表格请求类型
 * 表示表格当前的请求来源
 */
export type LTableRequestType =
  /** 初始化请求 */
  | 'init'
  /** 搜索请求 */
  | 'search'
  /** 重新加载请求 */
  | 'reload'
  /** 重置请求 */
  | 'reset'
  /** 自定义请求 */
  | 'custom'
  /** 分页请求 */
  | 'pagination';

/**
 * 表格请求参数类型
 * 包含了请求表格数据时所需的各种参数
 */
export type LTableRequestParams = {
  /** 当前页 */
  current: number;
  /** 分页数量 */
  pageSize: number;
  /** 表单数据 */
  formValues?: Record<string, any>;
  /** 其他参数 */
  [key: string]: any;
};

/**
 * 表格请求函数类型
 * 用于获取表格数据的异步函数
 * @template T 表格数据类型
 * @param params 请求参数
 * @param requestType 请求类型
 * @param args 其他参数
 * @returns 包含数据列表和总数的Promise
 */
export type LTableRequest<T = Record<string, any>> = (
  /** 请求参数 */
  params: LTableRequestParams,
  /**
   * 请求类型
   * @example
   *  "init" | "search" | "reload" | "reset" | "custom" | "pagination"
   *
   */
  requestType: LTableRequestType,
  ...args: any[]
) => Promise<{ list: T[]; total: number }>;

/**
 * LTable 组件属性接口
 * 继承自 Ant Design 的 TableProps，但排除了 rowHoverable 和 pagination 属性
 * @template T 表格数据类型
 */
export interface LTableProps<T = any> extends Omit<TableProps<T>, 'rowHoverable' | 'pagination'> {
  /** 表格引用 */
  ref?: Parameters<typeof Table>[0]['ref'];

  /**
   * 列配置, 扩展了部分字段
   * - `toolTip` 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)`
   * - `exportRender` 字段配合[json2Excel](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Table\utils.ts#L51-L201)方法自定义导出列数据的 [excel](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\FileViewer\demos\Demo2.tsx#L29-L33)
   */
  columns?: TableProps<T>['columns'] &
    {
      /** 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)` */
      toolTip?: boolean | TooltipProps;
      /** 配合[json2Excel](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\Table\utils.ts#L51-L201)方法自定义导出列数据的 [excel](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\FileViewer\demos\Demo2.tsx#L29-L33) */
      exportRender?: (val: any, row: T, i: number) => string | number;
    }[];

  /**
   * 表格数据
   *  - #### 一旦配置此属性（ 即便为空数组 ）, [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 及其相关的属性方法均无效
   *  - 绝大多数情况下建议使用 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 返回的表格数据
   *  - 配置了此属性意味着你需要自己维护数据并管理分页, loading 等 用法与antd.Table完全一致
   *  - 内部的表单查询, 表格分页查询 以及[tableRef](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\EditTable\index.tsx#L45-L45)的实例方法均无效
   *  - 你依然可以使用内置部分布局属性，自定义渲染等
   */
  dataSource?: T[];

  /**
   * 是否需要排序序号及宽度，自定义渲染排序等
   */
  sortColumn?:
    | boolean
    | (ColumnType<T> & {
        /** 自定义序号渲染函数 */
        render?: (pageCount: number, current: number, pageSize: number, index: number) => ReactNode;
      });

  /**
   * 配置了表单项后, 查询表单与表格的间距
   */
  gap?: string | number;

  /**
   * 是否展示带斑马纹的表格，可以更容易区分出不同行的数据。
   *   - string 可设置自定义颜色
   * */
  rowStripe?: boolean | string;

  /**
   * 无边框表格
   * - 需要同时将`bordered`设置为`false`
   */
  borderless?: boolean;

  /**
   * 鼠标移入每一行是否有 hover 效果
   *  - string 可设置自定义颜色
   * */
  rowHoverable?: string | boolean;

  /**
   * 是否在第一次渲染时自动请求 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)
   */
  requestAuto?: boolean;

  /**
   * [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)是否只执行一次
   *  - 一般使用在不需要分页请求，直接一次性请求所有数据
   */
  requestOnce?: boolean;

  /**
   *  [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)初始请求的额外参数
   * - 仅在`第一次自动请求`以及`重置`时会传入到 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 参数中
   */
  requestInitialParams?: Record<string, any>;

  /**
   * [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)的额外参数
   *  - `每次请求`都会传入到 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 的第一个参数中
   */
  requestExtraParams?: Record<string, any>;

  /**
   * `ahooks` 的 `useRequest` 的配置项
   * - `onInitRequest` 配置项会在第一次请求时出发
   * - 使用其配置项可以很简单的使用其高级请求的功能
   * - 部分参数内置无法配置
   */
  requestOptions?: Options<any, any>;

  /**
   * 异步请求函数用于获取表格数据
   *  - 不能与 [dataSource](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L103-L103) 同时配置, 一旦配置（ dataSource 即便为空数组 ）[request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)及其相关属性方法将不生效
   *  - 绝大部分情况下推荐使用 [request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174) 来获取数据而不是[dataSource](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L103-L103)
   *  - 你仍可以使用 [dataSource](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L103-L103) , 用法与 antd Table 完全一致
   *  - 返回值必须是 `{ list: T[], total: number }`
   *  - 你可在[request](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L174-L174)中的 **处理请求之前的参数** 以及 **格式化接口的数据**
   *  - 第一个参数为当前的`页码`和`分页数量`, 如果配置了表单[formItems](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L228-L228)则还有表单的值[formValues](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\demos\app20.tsx#L13-L13)
   *  - 第二个参数表示当前请求的类型
   *    - requestAuto 为 true 时的组件初始化的请求为`init`
   *    - 表单查询按钮请求为`search`
   *    - 表格分页查询为[pagination](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\interface.ts#L267-L267)
   *    - 表单重置按钮为[reset](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-steps-form\index.tsx#L99-L103)
   *    - 使用 onCustom 方法为`custom`
   *    - 使用 onReload 方法为[reload](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-skeleton\demos\demo1.tsx#L6-L11)
   */
  request?: LTableRequest<T>;

  /**
   * 配置后开启表格缓存 (会缓存 分页信息 与 表单信息)
   *  - 在`第一次` `自动请求`时会自动设置为缓存数据
   *  -  isRequestCacheParams 设置为 true 会自动缓存请求的参数
   */
  requestCacheKey?: string;

  /**
   * 配置了 requestCacheKey 后，是否缓存请求的 params 参数
   * - 包括表单数据与分页信息以及初始化的参数
   */
  isRequestCacheParams?: boolean;

  /**
   * 查询表单的实例
   */
  form?: FormInstance<any>;

  /**
   * 表格的实例
   * - 包含一些`方法` `属性数据`
   */
  actionRef?: MutableRefObject<LTableActionRef<T> | undefined>;

  /**
   *  antd Table 的 类名
   */
  tableClassName?: string;

  /**
   *  antd Table 的 style
   */
  tableStyle?: CSSProperties;

  /**
   * 整个 toolbar 容器的样式
   */
  toolbarStyle?: CSSProperties;

  /**
   * 整个 toolbar 容器的类名
   */
  toolbarClassName?: string;

  /**
   * 查询表单外层的 CardProps
   */
  formCardProps?: CardProps;

  /**
   *  表格外层的 CardProps
   */
  tableCardProps?: CardProps;

  /**
   * 表格上部内容， 查询表单之下。
   */
  toolbar?: ReactNode;

  /**
   * 查询表单项数组
   *  - 用法与 [LQueryForm](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L66-L169) 一致
   */
  formItems?: LQueryFormProps['items'];

  /**
   * 查询表单的初始值
   * - 只在组件初始化时生效，不支持不动态
   * - 只在有 formItems 时生效
   */
  formInitialValues?: Record<string, any>;

  /**
   * 高级查询表单的 props
   * - 可使用 [LQueryForm](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L66-L169) 组件的所有配置项
   * - 配合此组件的自定义渲染组合表单可定制等多高级功能
   * - 具体参数配置请看[LQueryForm](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\QueryForm\index.tsx#L66-L169)
   */
  queryFormProps?: Omit<LQueryFormProps, 'form' | 'items'>;

  /**
   * 在数据为空的情况下, 重新渲染空数据的组件
   */
  renderEmpty?: () => ReactNode;

  /**
   * 重新渲染整个 [LTable](file://d:\MyWeb\KaiYuan\lighting-design-v2\src\l-table\index.tsx#L25-L443)
   * - doms 中所有的元素不会有 Card 等内置包
   * @param doms 包含各种DOM元素的对象
   * @param state 表格状态信息
   * @param props 表格属性
   */
  renderLTable?: (
    doms: {
      /** 表单DOM元素 */
      formDom: ReactNode;
      /** 工具栏DOM元素 */
      toolbarDom: ReactNode;
      /** 表格DOM元素 */
      tableDom: ReactNode;
      /** 分页DOM元素 */
      paginationDom: ReactNode;
    },
    state: Pick<LTableActionRef, 'tableData' | 'params' | 'pagination' | 'loading' | 'initLoading' | 'noInitLoading'>,
    props: LTableProps,
  ) => ReactNode;

  /**
   * 分页配置
   * - 与 antd.Table 内置分页不同
   * - 传入配置可覆盖内置分页配置
   * - 一般情况不要传入 current 和 pageSize 请使用 defaultCurrent 和 defaultPageSize
   * - 更多配置项请查看 [PaginationProps](https://ant.design/components/pagination-cn/#Pagination)
   */
  pagination?: false | PaginationProps;

  /**
   * 卡片表格上部的额外内容
   * - 如果有表单, 则在表单下面, 卡片表格上面
   */
  tableExtra?: ReactNode;

  /**
   * 组件最外层的样式类
   * - antd.Table 的 className 请使用 tableClassName 或 rootClassName
   */
  className?: string;

  /**
   * 组件最外层的样式
   * - antd.Table 的 style 请使用 tableStyle
   */
  style?: CSSProperties;
}
