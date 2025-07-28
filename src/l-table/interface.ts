import type { PaginationResult } from 'ahooks/lib/usePagination/types';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { CardProps, FormInstance, PaginationProps, Table, TableProps, TooltipProps } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import type { LQueryFormProps } from 'lighting-design/l-query-form/interface';
import type { CSSProperties, Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';

export type LTableActionRef = {
  /** 根据条件，当前页，当前分页数量、刷新数据 */
  onReload: (extraParams?: Record<string, any>) => void;
  /** 根据传入的 current pageSize 当前表单数据查询表格数据 */
  onCustom: (current: number, pageSize: number, extraParams?: Record<string, any>) => void;
  /** 重置数据，从第一页以及默认的分页数量开始显示、查询数据 */
  onReset: (extraParams?: Record<string, any>) => void;
  /** 根据条件，从第一页以及当前的分页数量开始显示、查询数据 */
  onSearch: (extraParams?: Record<string, any>) => void;
  // /** 表格根标签 div */
  // rootRef: RefObject<HTMLDivElement>;

  /** request 的参数 */
  params: [LTableRequestParams, LTableRequestType] | [];
  /** 表格数据 */
  tableData: Record<string, any>[];
  /**
   * 类似 React.setState 直接修改当前表格的数据
   *
   * 推荐使用函数的形式修改
   *
   * 每次更新需要 `list` 引用地址不一样才能更新界面
   * - 仅在使用`request`获取数据有效
   */
  setTableData: Dispatch<SetStateAction<{ list: Record<string, any>[]; total: number }>>;
  /** 页码信息以及方法 */
  pagination: PaginationResult<any, any>['pagination'];
};

export type LTableRequestType = 'init' | 'search' | 'reload' | 'reset' | 'custom' | 'pagination';

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

export type LTableRequest<T = Record<string, any>> = (
  /** 请求参数 */
  params: LTableRequestParams,
  /** 请求类型 */
  requestType: LTableRequestType,
  ...args: any[]
) => Promise<{ list: T[]; total: number }>;

export type LTableProps<T = any> = TableProps<T> & {
  ref?: Parameters<typeof Table>[0]['ref'];
  /**
   * 列配置, 扩展了部分字段
   * - `toolTip` 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)`
   * - `exportRender` 字段配合`json2Excel`方法自定义导出列数据的 `excel`
   */
  columns?: (ColumnGroupType<T> | ColumnType<T>) &
    {
      /** 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)` */
      toolTip?: boolean | TooltipProps;
      /** 配合`json2Excel`方法自定义导出列数据的 `excel` */
      exportRender?: (val: any, row: T, i: number) => string | number;
    }[];

  /**
   * 表格数据
   *  - 绝大多数情况下建议使用 `request` 返回的表格数据
   *  - 配置了此属性意味着你需要自己维护数据并管理分页, loading 等 用法与antd.Table完全一致
   *  - 一旦配置此属性（即便为空数组）, `request` 及其相关的属性方法均无效
   *  - 内部的表单查询, 表格分页查询 以及`tableRef`的实例方法均无效
   *  - 你依然可以使用内置部分布局属性，自定义渲染等
   */
  dataSource?: T[];
  /**
   * 是否需要排序序号及宽度，自定义渲染排序等
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  sortColumn?:
    | boolean
    | (ColumnType<T> & {
        render?: (pageCount: number, current: number, pageSize: number, index: number) => ReactNode;
      });
  gap?: string | number;
  /**
   * 是否展示带斑马纹的表格，可以更容易区分出不同行的数据。
   *   - string 可设置自定义颜色
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  rowStripe?: boolean | string;
  /**
   * 无边框表格
   */
  borderless?: boolean;
  /**
   * 鼠标移入每一行是否有hover效果
   *  - string 可设置自定义颜色
   * */
  rowHover?: boolean | string;
  /**
   * 是否在第一次渲染时自动请求 `request`
   */
  autoRequest?: boolean;
  /**
   *  `request`第一次请求的额外参数
   * - 仅在`第一次` `自动请求`时会传入到 `request` 参数中
   */
  defaultRequestParams?: Record<string, any>;
  /**
   * `ahooks` 的 `useRequest` 的配置项
   * - 使用其配置项可以很简单的使用其高级请求的功能
   * - 部分参数内置无法配置
   */
  requestOptions?: Options<any, any>;

  /**
   * 异步请求函数用于获取表格数据
   *  - 不能与 `dataSource` 同时配置, 一旦配置（dataSource即便为空数组）`request`及其相关属性方法将不生效
   *  - 绝大部分情况下推荐使用 `request` 来获取数据而不是`dataSource`
   *  - 你仍可以使用 `dataSource` , 用法与 antd Table 完全一致
   *  - 返回值必须是 `{ success: boolean, data: Record<string, any>[], total: number }`
   *  - 你可在`request`或者在`requestBefore`格式化后端请求的参数格式
   *  - 第一个参数为当前的`页码`和`分页数量`, 如果配置了表单`formItems`则还有表单的值`formValues`
   *  - 第二个参数表示当前请求的类型
   *    - autoRequest 为 true 时的组件初始化的请求为`onInit`
   *    - 表单查询按钮请求为`onSearch`
   *    - 表格分页查询与内置工具栏的刷新为`onReload`
   *    - 表单重置按钮为`onReset`
   *    - 使用 onCustom 方法为`onCustom`
   */
  request?: LTableRequest;
  /**
   * 配置后开启表格缓存 (会缓存 分页信息 与 表单信息)
   *  - 在`第一次` `自动请求`时会自动设置为缓存的分页信息与表单信息
   */
  requestCacheKey?: string;
  /**
   * 配置了 requestCacheKey 后，是否缓存请求的params参数
   */
  requestCacheParams?: boolean;
  /**
   * 查询表单的实例
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  form?: FormInstance<any>;
  /**
   * 表格的实例
   * - 包含一些`方法` `属性数据`
   */
  actionRef?: MutableRefObject<LTableActionRef | undefined>;
  /**
   * antd 跟 div 类名
   */
  rootClassName?: string;
  /**
   *  antd 的 div 类名
   */
  tableClassName?: string;
  /**
   *  antd 的 style
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
   * 表格上部区域
   */
  toolbar?: ReactNode;
  /**
   * 表单查询框数组
   * - 必须包含 Form.Item 或 LFormItem 或 LFormItemXXX 组件
   * - 特殊布局情况下也可含有其他元素
   */
  formItems?: LQueryFormProps['items'];
  /**
   * 查询表单的初始值
   * - 只在组件初始化时生效
   * - 只在有 formItems 时生效
   */
  formInitialValues?: Record<string, any>;
  /**
   * 高级查询表单的 props
   * - 可使用 `LQueryForm` 组件的所有配置项
   * - 配合此组件的自定义渲染组合表单可定制等多高级功能
   * - 具体参数配置请看`LQueryForm`
   */
  queryFormProps?: LQueryFormProps;
  /**
   * 在数据为空的情况下, 重新渲染空数据的组件
   */
  renderEmpty?: () => ReactNode;
  renderLTable?: (
    doms: {
      formDom: ReactNode;
      toolbarDom: ReactNode;
      tableDom: ReactNode;
      paginationDom: ReactNode;
    },
    props: LTableProps,
  ) => ReactNode;
  pagination: false | PaginationProps;
};
