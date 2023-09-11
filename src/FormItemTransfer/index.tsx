import type { TransferProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import type { FieldNames } from './base/TransferWrapper';
import TransferWrapper from './base/TransferWrapper';

export type LFormItemTransferProps = {
  limitMaxCount?: number;
  fieldNames?: FieldNames;
  transferProps?: TransferProps<any[]>;

  request?: (...args: any[]) => Promise<any[]>;
  requestOptions?: Record<string, any>;
  options?: any[];
} & LFormItemProps;

/**
 * 组件
 */
const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  required,

  limitMaxCount,
  fieldNames,
  transferProps = {},
  request,
  requestOptions = {},
  options,

  ...restProps
}) => {
  return (
    <LFormItem
      _isSelectType
      required={required}
      {...restProps}
      valuePropName="targetKeys"
    >
      <TransferWrapper
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
