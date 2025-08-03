import type { PaginationOptions, PaginationResult } from 'ahooks/lib/usePagination/types';
import type { TransferProps } from 'antd';
import type { LFormItemSelectProps } from 'lighting-design/l-form-item-select';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export type LFormItemTransferActionRef<D extends any = any, P = any> = PaginationResult<D, P>;

interface RecordType {
  label?: string | number;
  value?: React.ReactNode;
  key?: string | number;
  title?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

export type LFormItemTransferProps = LFormItemProps &
  Pick<LFormItemSelectProps, 'spin' | 'fieldNames'> &
  Pick<LFormProps, 'disabled'> & {
    listHeight?: number | string;
    block?: boolean;
    /**
     *包含一些请求分页的方法与属性 配合 request pagination 用于外部控制分页请求
     */
    actionRef?: React.MutableRefObject<LFormItemTransferActionRef | undefined>;
    listStyle?: TransferProps['listStyle'];
    titles?: TransferProps['titles'];
    showSearch?: TransferProps['showSearch'];
    oneWay?: TransferProps['oneWay'];
    /**
     *分页配置 与 antd 穿梭框的分页配置一样
     */
    pagination?: TransferProps<any[]>['pagination'];
    /**
     *异步请求函数
     */
    request?: (info: { current: number; pageSize: number }) => Promise<{ total: number; list: RecordType[] }>;
    /**
     * ahooks 的 usePagination 配置项
     */
    requestOptions?: PaginationOptions<any, any>;
    /**
     *dataSource的别名
     */
    options?: RecordType[];
    dataSource?: RecordType[];
    transferProps?: TransferProps;
  };
