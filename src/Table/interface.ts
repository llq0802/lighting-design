import type { PaginationOptions } from 'ahooks/lib/usePagination/types';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { CardProps, FormInstance, TableProps, TooltipProps } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import type { LQueryFormProps } from 'lighting-design/QueryForm/interface';
import type {
  CSSProperties,
  Dispatch,
  MutableRefObject,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';
import type { LToolbarActionProps } from './base/ToolBarAction';

export type { LToolbarActionProps };

export type LTableRenderProps = (
  doms: {
    /** 内部表单dom */
    searchFormDom: ReactNode;
    /** 内置工具栏dom , 包含 toolbarActionDom*/
    toolbarActionDom: ReactNode;
    /** 整个 toolbar dom */
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

export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset' | 'onCustomSearch';

export type LTableInstance = {
  /** 根据条件，当前页，当前分页数量、刷新数据 */
  onReload: (extraParams?: Record<string, any>) => void;
  /** 根据传入的 current pageSize 当前表单数据查询表格数据 */
  onCustomSearch: (current: number, pageSize: number, extraParams?: Record<string, any>) => void;
  /** 重置数据，从第一页以及默认的分页数量开始显示、查询数据 */
  onReset: (extraParams?: Record<string, any>) => void;
  /** 根据条件，从第一页以及当前的分页数量开始显示、查询数据 */
  onSearch: (extraParams?: Record<string, any>) => void;
  /** 表格根标签 div */
  rootRef: RefObject<HTMLDivElement>;
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
  setTableData: Dispatch<
    SetStateAction<{
      list: Record<string, any>[];
      total: number;
    }>
  >;
  /** 页码信息以及方法 */
  pagination: {
    /** 当前页 */
    current: number;
    // 一页多少条
    pageSize: number;
    /** 总的数量 */
    total: number;
    /** 总的页数 */
    totalPage: number;
    /** 会导致 request 的第一个参数不会有表单数据 并且第二个参数为 undefined */
    onChange: (current: number, pageSize: number) => void;
    /** 会导致 request 的第一个参数不会有表单数据 并且第二个参数为 undefined */
    changeCurrent: (current: number) => void;
    /** 会导致 request 的第一个参数不会有表单数据 并且第二个参数为 undefined */
    changePageSize: (pageSize: number) => void;
  };
};

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
) => Promise<{ success: boolean; data: T[]; total: number }>;

export type LTableProps<T = any> = TableProps<T> & {
  /**
   * 列配置, 扩展了部分字段
   * - 配置了 `contentRender` 则 `columns` 无效
   * - `toolTip` 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)`
   * - `exportRender` 字段配合`json2Excel`方法自定义导出列数据的 `excel`
   */
  columns?:
    | TableProps['columns']
    | (
        | {
            /** 字段自定义单元格省略提示 `( 内部使用`Tooltip`组件替代)` */
            toolTip?: boolean | TooltipProps;
            /** 配合`json2Excel`方法自定义导出列数据的 `excel` */
            exportRender?: (val: any, row: Record<string, any>, i: number) => string | number;
          }
        | ColumnGroupType<T>
        | ColumnType<T>
      )[];

  /**
   * 表格数据
   *  - 绝大多数情况下建议使用 `request` 返回的表格数据
   *  - 配置了此属性意味着你需要自己维护数据并管理分页, loading 等 用法与antd.Table完全一致
   *  - 一旦配置此属性（即便为空数组）, `request` 及其相关的属性方法均无效
   *  - 内部的表单查询, 表格分页查询 以及`tableRef`的实例方法均无效
   *  - 你依然可以使用内置部分布局属性，自定义渲染等
   */
  dataSource?: TableProps['dataSource'];
  /**
   * 是否需要排序序号及宽度，自定义渲染排序
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  isSort?:
    | boolean
    | {
        width?: number | string;
        render?: (pageCount: number) => ReactNode;
        fixed?: boolean | string;
      };
  /**
   * 是否展示带斑马纹的表格，可以更容易区分出不同行的数据。
   *   - string 可设置自定义颜色
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  showStripe?: boolean | string;
  /**
   * 鼠标移入每一行是否有hover效果
   *  - string 可设置自定义颜色
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  showHover?: boolean | string;
  /**
   * 是否展示水平方向的边框
   *  - 配合 `antd.bordered = false`(bordered默认为false) 可做到真正无边框表格
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  showHorizontalBorder?: boolean;
  /**
   * 表格 表单是否准备好
   * - false 时表格不会请求, 表单不能提交查询
   * - true 时会重置表单到初始值, 并发起请求
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  isReady?: boolean;
  /**
   * 是否显示 toolbar
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  showToolbar?: boolean;
  /**
   * 是否占满视口剩余空间的高度
   * - 根据实际情况设置number类型时表示距离视口底部还剩多少 px
   * - 配置过后如果表格有分页, 表格的分页会在视口底部显示
   * - 不要在弹窗，抽屉，下拉等组件中使用
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  fillSpace?: boolean | number;
  /**
   * 是否在第一次渲染时自动请求 `request`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  autoRequest?: boolean;
  /**
   * 全屏表格的背景颜色
   * - 仅在使用了内置表格操作栏中的全屏按钮时有效
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  fullScreenBgColor?: string;
  /**
   *  `request`第一次请求的额外参数
   * - 仅在`第一次` `自动请求`时会传入到 `request` 参数中
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  defaultRequestParams?: Record<string, any>;
  /**
   * `ahooks` 的 `useRequest` 的配置项
   * - 使用其配置项可以很简单的使用其高级请求的功能
   * - 部分参数内置无法配置
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * @see https://ahooks.js.org/zh-CN/hooks/use-request/basic#result
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
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  request?: LTableRequest;

  /**
   * 配置后开启表格缓存 (会缓存 分页信息 与 表单信息)
   *  - 在`第一次` `自动请求`时会自动设置为缓存的分页信息与表单信息
   */
  requestCacheKey?: string;
  /**
   * 调用`request`之前将参数格式化返回给 `request` 的第一个参数
   */
  requestBefore?: (...args: any[]) => Partial<LTableRequestParams> | void;
  /**
   * 查询表单的实例
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formRef?: MutableRefObject<FormInstance | undefined> | ((ref: FormInstance) => void);
  /**
   * 表格的实例
   * - 包含一些`方法` `属性数据`以及 `根div`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableRef?: MutableRefObject<LTableInstance | undefined>;
  /**
   * 组件根div类名
   *  - antd Table 的 rootClassName 无法配置, 请通过 className 设置
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rootClassName?: string;
  /**
   *  组件根div样式
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rootStyle?: CSSProperties;
  /**
   * 整个 toolbar 容器的样式
   * - showToolbar 为 true 时生效
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarStyle?: CSSProperties;
  /**
   * 查询表单外层的 CardProps
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formCardProps?: CardProps;
  /**
   *  表格外层的 CardProps
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableCardProps?: CardProps;
  /**
   * 内置表格工具栏的配置  继承 Space 组件的属性
   * - showToolbar 时生效
   * - `toolbarActionConfig` 为`false`时直接不渲染内置表格工具
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarActionConfig?: LToolbarActionProps | false;
  /**
   * 整个 toolBar 的左侧
   * - 一般配置 `新增` `编辑`等按钮
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarLeft?: ReactNode;
  /**
   * 整个 toolBar 的右侧
   * - 如果有内置表格工具就是在内置表格工具的左侧
   * - 一般配置 `新增` `编辑`等按钮
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarRight?: ReactNode;
  /**
   * 表格主体上部额外区域
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableExtra?: ReactNode;
  /**
   * 表单查询框数组
   * - 必须包含 Form.Item 或 LFormItem 或 LFormItemXXX 组件
   * - 特殊布局情况下也可含有其他元素
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formItems?: Exclude<ReactNode, string | number | boolean | null | undefined>[];
  /**
   * 查询表单的初始值
   * - 只在组件初始化时生效
   * - 只在有 formItems 时生效
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formInitialValues?: Record<string, any>;
  /**
   * 高级查询表单的 props
   * - 可使用 `LQueryForm` 组件的所有配置项
   * - 配合此组件的自定义渲染组合表单可定制等多高级功能
   * - 具体参数配置请看`LQueryForm`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  queryFormProps?: LQueryFormProps;
  /**
   * request 请求成功后的回调
   * - 只有在`成功`后才会触发
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  requestSuccess?: PaginationOptions<
    { list: Record<string, any>[]; total: number },
    [
      {
        current: number;
        pageSize: number;
        formValues?: Record<string, any>;
        [key: string]: any;
      },
      'onInit' | 'onSearch' | 'onReload' | 'onReset' | undefined,
    ]
  >['onSuccess'];
  /**
   * 只在 request **第一次请求成功**后的回调
   * - 包括第一次调用表格的实例方法, 例如 onSearch onReload
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  requestFirstSuccess?: PaginationOptions<
    { list: Record<string, any>[]; total: number },
    [
      {
        current: number;
        pageSize: number;
        formValues?: Record<string, any>;
        [key: string]: any;
      },
      'onInit' | 'onSearch' | 'onReload' | 'onReset' | undefined,
    ]
  >['onSuccess'];
  /**
   * request 请求完成后的回调
   * - 不管是`成功`还是`失败`都会触发
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  requestFinally?: PaginationOptions<
    { list: Record<string, any>[]; total: number },
    [
      {
        current: number;
        pageSize: number;
        formValues?: Record<string, any>;
        [key: string]: any;
      },
      'onInit' | 'onSearch' | 'onReload' | 'onReset' | undefined,
    ]
  >['onFinally'];
  /**
   * 重新渲染整个`toolBar`
   * @param toolbarActionDom 内置工具栏操作区域
   * @param toolbarDom 整个 toolBar ( 包含`toolbarLeft` `toolbarRight` 内置工具栏操作区域 )
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarRender?: (toolbarActionDom: ReactNode, toolbarDom: ReactNode) => ReactNode;
  /**
   * 重新渲染整个高级表格 LTable
   * @param optionsDom 整个高级表格dom对象
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableRender?: LTableRenderProps;
  /**
   * 重新渲染 antd 表格的内容主体
   * - 一般用于卡片风格的表格
   * -  `columns` 配置将无效
   * - 内置表格操作栏的 `列操作` 与 `表格密度`将无效
   *  - 配置后默认会设置 antd 的 showHeader 为 false
   * @param  tableData 表格数据
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  contentRender?: (tableData: Record<string, any>[]) => ReactNode;
  /**
   * 在数据为空的情况下, 重新渲染空数据的组件
   */
  emptyRender?: () => ReactNode;
  /**
   *  重新渲染 antd 表格的头部列
   *  - 会在 toolbar 下方, antd 表格的头部渲染
   *  - 配置后默认会设置 antd 的 showHeader 为 false,  可配置覆盖
   * @param columns antd 的列配置
   * @param  tableData 表格数据
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableHeaderRender?: (
    columns: Record<string, any>[],
    tableData: Record<string, any>[],
  ) => ReactNode;
  /**
   *自定义头部行的样式
   */
  headerRowStyle?: CSSProperties | ((columns: Record<string, any>[], i: number) => CSSProperties);
  /**
   *自定义内容行的样式
   */
  rowStyle?: CSSProperties | ((record: Record<string, any>, i: number) => CSSProperties);
  /**
   *自定义头部行的单元格的样式
   */
  headerCellStyle?: CSSProperties | ((columns: Record<string, any>[]) => CSSProperties);
  /**
   *自定义内容行的单元格的样式
   */
  cellStyle?: CSSProperties | ((record: Record<string, any>, i: number) => CSSProperties);
};
