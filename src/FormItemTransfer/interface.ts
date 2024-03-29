import type { PaginationOptions, PaginationResult } from 'ahooks/lib/usePagination/types';
import type { TransferProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect/interface';

export interface RecordType {
  key?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

export type LFormItemTransferProps = LFormItemProps &
  Pick<
    LFormItemSelectProps,
    'spin' | 'autoRequest' | 'refreshDeps' | 'fieldNames' | 'showSearch'
  > & {
    /**
     *包含一些请求分页的方法与属性 配合 request pagination 用于外部控制分页请求
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    actionRef?: React.MutableRefObject<LFormItemTransferActionRef>;
    /**
     *可选的最大数量
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    listStyle?: TransferProps['listStyle'];
    titles?: TransferProps['titles'];
    oneWay?: boolean;
    limitMaxCount?: number;
    transferProps?: TransferProps;
    /**
     *分页配置 与 antd 穿梭框的分页配置一样
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    pagination?: TransferProps<any[]>['pagination'];
    /**
     *异步请求函数
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    request?: (info: {
      current: number;
      pageSize: number;
    }) => Promise<{ total: number; data: RecordType[] }>;
    /**
     *ahooks 的 usePagination 配置项
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    requestOptions?: PaginationOptions<any, any>;
    /**
     *数据源
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    options?: RecordType[];
  };

export type LFormItemTransferActionRef = PaginationResult<any, any> | undefined;
