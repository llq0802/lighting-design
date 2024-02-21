import type { PaginationOptions, PaginationResult } from 'ahooks/lib/usePagination/types';
import type { TransferProps } from 'antd';
import type { SelectProps } from 'antd/es';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { isFunction } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import { useContext, type FC } from 'react';
import type { RecordType } from './base/TransferWrapper';
import TransferWrapper from './base/TransferWrapper';

export type LFormItemTransferActionRef = PaginationResult<any, any> | undefined;

export type LFormItemTransferProps = LFormItemProps &
  Pick<LFormItemSelectProps, 'spin'> & {
    /**
     *包含一些请求分页的方法与属性 配合 request pagination 用于外部控制分页请求
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    actionRef?: React.MutableRefObject<LFormItemTransferActionRef>;
    /**
     *可选的最大数量
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    titles?: TransferProps['titles'];
    showSearch?: boolean;
    oneWay?: boolean;
    limitMaxCount?: number;
    fieldNames?: SelectProps['fieldNames']; // { label: string; value: string };
    transferProps?: TransferProps;
    /**
     *分页配置 与 antd 穿梭框的分页配置一样
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    pagination?: TransferProps<any[]>['pagination'];
    /**
     *异步请求函数
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    request?: (info: {
      current: number;
      pageSize: number;
    }) => Promise<{ total: number; data: RecordType[] }>;
    /**
     *ahooks usePagination 的配置项
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    requestOptions?: PaginationOptions<any, any>;
    /**
     *数据源
     *@author 李岚清 <https://github.com/llq0802>
     *@version 2.1.29
     *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
     */
    options?: RecordType[];
  };

/**
 * 组件
 */
const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  titles,
  disabled,
  showSearch,
  oneWay,
  pagination,
  limitMaxCount,
  fieldNames,
  actionRef,
  request,
  requestOptions = emptyObject,
  options,
  spin,
  transferProps = emptyObject,

  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  // 是否为树穿梭或者表格穿梭
  const isCustomTransfer = isFunction(transferProps?.children);

  return (
    <LFormItem
      contentAfter={isCustomTransfer ? void 0 : ' '}
      contentInline={!isCustomTransfer}
      _isSelectType
      {...restProps}
      valuePropName="targetKeys"
    >
      <TransferWrapper
        outLoading={spin}
        actionRef={actionRef}
        request={request}
        requestOptions={requestOptions}
        limitMaxCount={limitMaxCount}
        isCustomTransfer={isCustomTransfer}
        options={options}
        disabled={disabled ?? formDisabled}
        titles={titles}
        fieldNames={fieldNames}
        oneWay={oneWay}
        showSearch={showSearch}
        pagination={pagination}
        {...transferProps}
      />
    </LFormItem>
  );
};

export default LFormItemTransfer;
