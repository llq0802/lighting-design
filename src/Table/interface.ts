import type { PaginationOptions } from 'ahooks/lib/usePagination/types';
import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { CardProps, FormInstance, TableProps } from 'antd';
import type { LQueryFormProps } from 'lighting-design/QueryForm/interface';
import type {
  CSSProperties,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';
import type { LToolbarActionProps } from './base/ToolBarAction';

export type { LToolbarActionProps };

export type LTableRenderProps = (
  optionsDom: {
    /** 表单dom */
    searchFormDom: ReactNode;
    /** 工具栏dom */
    toolbarDom: ReactNode;
    /** table上面额外Dom 如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /**   table主体Dom 包含工具栏Dom  */
    tableDom: ReactNode;
    /** 整个表格Dom包含全部Dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactElement | ReactNode;

export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset';

export type LTableInstance = {
  /** 根据条件，当前页，当前分页数量、刷新数据 */
  onReload: (extraParams?: Record<string, any>) => void;
  /** 重置数据，从第一页以及默认的分页数量开始显示、查询数据 */
  onReset: (extraParams?: Record<string, any>) => void;
  /** 根据条件，从第一页以及当前的分页数量开始显示、查询数据 */
  onSearch: (extraParams?: Record<string, any>) => void;
  /** 表格根标签 div */
  rootRef: RefObject<HTMLDivElement>;
  /** 表格数据 */
  tableData: Record<string, any>[];
  /**
   * 类似 React.setState 直接修改当前表格的数据
   *
   * 推荐使用函数的形式修改
   *
   * 每次更新需要 `list` 引用地址不一样才能更新界面
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
) => Promise<{
  success: boolean;
  data: T[];
  total: number | string;
}>;

export type LTableProps<T = any> = {
  /**
   * 是否需要排序序号及宽度，自定义渲染排序
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  isSort?: boolean | { width?: number | string; render?: (pageCount: number) => ReactNode };
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
   * 表格 表单是否准备好
   * - false 时表格不会请求, 表单不能提交查询
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
   * - 仅在第一次`自动请求`时会传入到 `request` 参数中
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
   *  - 不能与 dataSource 同时配置 否则 request 及其相关属性方法将不生效
   *  - 绝大部分情况下斗推荐使用 `request` 来获取数据
   *  - 返回值必须是 `{ success: boolean, data: Record<string, any>[], total: number }`
   *  - 第一个参数为当前的`页码`和`分页数量`, 如果配置了表单`formItems`则还有表单的值`formValues`
   *  - 第二个参数表示当前请求的类型
   *    - autoRequest 为 true 时的组件初始化的请求为`onInit，`
   *    - 表单查询按钮请求为`onSearch`，
   *    - 表格分页查询与内置工具栏的刷新为`onReload，`
   *    - 表单重置按钮为`onReset，`
   *    - 如果没有配置 formItems 则为 undefined
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  request?: LTableRequest;
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
   * 组件最外层div类名
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rootClassName?: string;
  /**
   *  表格最外层div样式
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
   * - 为`false`时直接不渲染内置表格工具
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
   * 表格内容上部额外区域
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableExtra?: ReactNode;
  /**
   * 表单查询框组
   * - 必须是 Form.Item 或 LFormItem 或 LFormItemXXX 组件所组成的数组
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
   * - 配合此组件可自定义渲染组合表单发起请求
   * - 具体参数配置请看`LQueryFormProps`
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  queryFormProps?: LQueryFormProps;
  /**
   * request 请求成功后的回调
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
   * request 请求完成后的回调
   * - 不管是成功还是失败都会出发
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
   * 重新渲染 toolBar, 包括内置表格工具
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarRender?: (ToolbarActionDom: ReactNode) => ReactNode;
  /**
   *  重新渲染整个高级表格
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableRender?: (
    optionsDom: {
      /** 表单dom */
      searchFormDom: ReactNode;
      /** 工具栏dom */
      toolbarDom: ReactNode;
      /**   table上面额外Dom 如果没有配置则没有 */
      tableExtraDom: ReactNode;
      /**   table主体Dom 包含工具栏Dom  */
      tableDom: ReactNode;
      /** 整个高级表格Dom 包含全部Dom */
      finallyDom: ReactNode;
    },
    props: LTableProps,
  ) => ReactElement;
  /**
   * 重新渲染 antd 表格的内容主体
   * - 一般用于卡片风格的表格
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  contentRender?: (data: Record<string, any>[]) => ReactNode;
} & TableProps<T>;
