import LFormItem from 'lighting-design/l-form-item';
import { type FC } from 'react';
import BaseTransfer from './base-transfer';
import type { LFormItemTransferProps } from './interface';

const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  disabled,
  //
  dataSource,
  titles,
  listStyle,
  showSearch,
  oneWay,
  pagination,
  fieldNames,
  actionRef,

  request,
  requestOptions,
  spin,

  transferProps,
  ...restProps
}) => {
  const baseProps = {
    disabled,
    dataSource,
    titles,
    listStyle,
    showSearch,
    oneWay,
    pagination,

    fieldNames,
    actionRef,
    request,
    requestOptions,
    spin,
  };
  return (
    <LFormItem {...restProps} valuePropName="targetKeys">
      <BaseTransfer {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemTransfer;
export * from './interface';
