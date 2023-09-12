import type { SpinProps, TransferProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { FC } from 'react';
import type { FieldNames, RecordType } from './base/TransferWrapper';
import TransferWrapper from './base/TransferWrapper';

export type LFormItemTransferActionRef = {
  current: number;
  pageSize: number;
  total: number;
  totalPage: number;
  onChange: (current: number, pageSize: number) => void;
  changeCurrent: (current: number) => void;
  changePageSize: (pageSize: number) => void;
};

export type LFormItemTransferProps = {
  actionRef?: React.MutableRefObject<LFormItemTransferActionRef | undefined>;
  limitMaxCount?: number;
  fieldNames?: FieldNames;
  transferProps?: TransferProps<any[]>;
  request?: (
    page: number,
    pageSize: number,
    ...args: any[]
  ) => Promise<{ total: number; data: RecordType[] }>;
  requestOptions?: Record<string, any>;
  options?: RecordType[];
  spin?: SpinProps;
} & LFormItemProps;

/**
 * 组件
 */
const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  required,

  limitMaxCount,
  fieldNames,
  transferProps = {},
  actionRef,
  request,
  requestOptions = {},
  options,
  spin,

  ...restProps
}) => {
  return (
    <LFormItem
      contentAfter=" "
      contentInline
      _isSelectType
      required={required}
      {...restProps}
      valuePropName="targetKeys"
    >
      <TransferWrapper
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
