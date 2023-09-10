import type { TransferProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import TransferWrapper from './base/TransferWrapper';

type FieldNames = { label: string; value: string };

export type LFromItemTransferProps = {
  limitMaxCount?: number;
  fieldNames?: FieldNames;
  transferProps?: TransferProps<any[]>;
} & LFormItemProps;

/**
 * 组件
 */
const LFromItemTransfer: FC<LFromItemTransferProps> = ({
  required,

  limitMaxCount,
  fieldNames,
  transferProps = {},

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
        limitMaxCount={limitMaxCount}
        fieldNames={fieldNames}
        transferProps={transferProps}
      />
    </LFormItem>
  );
};

export default LFromItemTransfer;
