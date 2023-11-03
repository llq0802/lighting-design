import type { SpinProps, TransferProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { isFunction } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import { useContext, type FC } from 'react';
import type { FieldNames, RecordType } from './base/TransferWrapper';
import TransferWrapper from './base/TransferWrapper';

export type LFormItemTransferActionRef = {
  /** 分页信息及方法 */
  pagination: {
    current: number;
    pageSize: number;
    total: number;
    totalPage: number;
    onChange: (current: number, pageSize: number) => void;
    changeCurrent: (current: number) => void;
    changePageSize: (pageSize: number) => void;
  };
  /** 数据源 */
  data: RecordType[];
  /** 更新数据的state */
  setData: React.Dispatch<React.SetStateAction<RecordType[]>>;
};

export type LFormItemTransferProps = {
  /**
   *包含一些请求分页的方法与属性 配合 request pagination 用于外部控制分页请求
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  actionRef?: React.MutableRefObject<LFormItemTransferActionRef | undefined>;
  /**
   *可选的最大数量
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  limitMaxCount?: number;
  /**
   *自定义配置字段名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  fieldNames?: FieldNames;
  /**
   *antd穿梭框的配置
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  transferProps?: TransferProps<any[]>;
  /**
   *禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  disabled?: boolean;
  /**
   *分页配置 与 antd 穿梭框的分页配置一样
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  pagination?: TransferProps<any[]>['pagination'];
  /**
   *异步请求函数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  request?: (info: {
    current: number;
    pageSize: number;
  }) => Promise<{ total: number; data: RecordType[] }>;
  /**
   *ahooks 的配置项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  requestOptions?: Record<string, any>;
  /**
   *数据源
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  options?: RecordType[];
  /**
   *自定义 loading 需要与 request 配合
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.24
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemTransferProps
   */
  spin?: SpinProps;
} & LFormItemProps;

/**
 * 组件
 */
const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  required,

  disabled,
  size,

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
      required={required}
      {...restProps}
      valuePropName="targetKeys"
    >
      <TransferWrapper
        isCustomTransfer={isCustomTransfer}
        disabled={disabled ?? formDisabled}
        pagination={pagination}
        outLoading={spin}
        actionRef={actionRef}
        options={options}
        limitMaxCount={limitMaxCount}
        request={request}
        requestOptions={requestOptions}
        fieldNames={fieldNames}
        transferProps={transferProps}
      />
    </LFormItem>
  );
};

export default LFormItemTransfer;
