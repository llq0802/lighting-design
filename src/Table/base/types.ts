import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { CardProps, FormInstance, TableProps } from 'antd';
import type { LQueryFormProps } from 'lighting-design/QueryForm';
import type {
  CSSProperties,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';
import type { LToolbarActionProps } from './ToolBarAction';
export type LTableRenderProps = (
  optionsDom: {
    /** 表单dom */
    searchFormDom: ReactNode;
    /** 工具栏dom */
    toolbarDom: ReactNode;
    /**   table上面额外Dom 如果没有配置则没有 */
    tableExtraDom: ReactNode;
    /**   table主体Dom 包含工具栏Dom  */
    tableDom: ReactNode;
    /** 整个表格Dom包含全部Dom */
    finallyDom: ReactNode;
  },
  props: LTableProps,
) => ReactElement;

export type LTableRequestType = 'onInit' | 'onSearch' | 'onReload' | 'onReset';

export type LTableInstance = {
  /** 根据条件，当前页，当前分页数量、刷新数据 */
  onReload: () => void;
  /** 重置数据，从第一页以及默认的分页数量开始显示、查询数据 */
  onReset: () => void;
  /** 根据条件，从第一页以及当前的分页数量开始显示、查询数据 */
  onSearch: () => void;
  /** 表格根标签 div */
  rootRef: RefObject<HTMLDivElement>;
  /** 表格数据 */
  tableData: Record<string, any>[];
  /**
   * 类似 React.setState 直接修改当前表格的数据
   *
   * 推荐使用函数的形式修改
   *
   * 每次更新需要 list 引用地址不一样才能更新界面
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
   * 表格是否需要排序序号及宽度, 自定义渲染
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  isSort?:
    | boolean
    | { width?: number | string; render?: (pageCount: number) => ReactNode };
  /**
   * 表格 表单是否准备好 false 时表格不会请求 表单不能提交查询
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * */
  isReady?: boolean;
  /**
   * 全屏表格的背景颜色
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  fullScreenBgColor?: string;

  /**
   * 异步请求函数第一次额外参数(仅在第一次请求时会携带)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  defaultRequestParams?: Record<string, any>;
  /**
   * ahooks 的 useRequest 的 配置项， 部分参数无法配置
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * @see https://ahooks.js.org/zh-CN/hooks/use-request/basic#result
   */
  requestOptions?: {
    /** 请求唯一标识。如果设置了 cacheKey，会启用缓存机制 */
    cacheKey?: string;
    /** 首次默认执行时，传递给 service 的参数 */
    defaultParams?: any;
    /** service 执行前触发*/
    onBefore?: (params: any) => void;
    /** ervice resolve 时触发 */
    onSuccess?: (data: any, params: any) => void;
    /** ervice reject 时触发 */
    onError?: (e: Error, params: any) => void;
    /** service 执行完成时触发 */
    onFinally?: (params: any, data?: any, e?: Error) => void;
    /** 其他高级配置 */
    [key: string]: any;
  } & Options<any, any[]>;
  /**
   * 异步请求函数用于获取表格数据
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  request?: LTableRequest;
  /**
   * 是否在第一次渲染时自动请求 (支持动态改变)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  autoRequest?: boolean;

  /**
   * 查询表单的实例
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formRef?:
    | MutableRefObject<FormInstance | undefined>
    | ((ref: FormInstance) => void);
  /**
   * 表格的实例 (包含一些方法)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableRef?: MutableRefObject<LTableInstance | undefined>;
  /**
   * 是否占满视口剩余空间的高度
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  fillSpace?: boolean | number;
  /**
   * 表格最外层div类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rootClassName?: string;
  /**
   *  antd表格额外类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableClassName?: string;
  /**
   *  表格最外层div样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  rootStyle?: CSSProperties;
  /**
   * antd表格额外style
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableStyle?: CSSProperties;
  /**
   * 整个toolbar的样式  showToolbar为true时生效
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarStyle?: CSSProperties;
  /**
   * 查询表单外层的CardProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formCardProps?: CardProps;
  /**
   *  表格外层的CardProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableCardProps?: CardProps;
  /**
   *  是否显示 toolbar
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  showToolbar?: boolean;
  /**
   * showToolbar为 true 时生效 配置内置表格工具栏 继承 Space 组件的属性
   *
   * 为`false`时直接不渲染内置表格工具
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarActionConfig?: LToolbarActionProps | false;
  /**
   * 重新渲染toolBar 包括内置表格工具
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarRender?: (ToolbarActionDom: ReactNode) => ReactNode;
  /**
   *  重新渲染整个高级表格
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
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
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  contentRender?: (data: Record<string, any>[]) => ReactNode;
  /**
   * 整个toolBar的左侧
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarLeft?: ReactNode;
  /**
   * 整个toolBar的右侧 (如果有内置表格工具就是在内置表格工具的左侧)
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  toolbarRight?: ReactNode;
  /**
   * 表格内容上部额外区域
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  tableExtra?: ReactNode;
  /**
   * 表单查询框组
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formItems?: Exclude<
    ReactNode,
    string | number | boolean | null | undefined
  >[];
  /**
   * 查询表单的初始值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   */
  formInitialValues?: Record<string, any>;
  /**
   * 高级查询表单组件的props-LQueryFormProps
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.24
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTableProps
   * @see https://llq0802.github.io/lighting-design/latest/components/query-form
   */
  queryFormProps?: LQueryFormProps;
} & TableProps<T>;
