import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { isFunction } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import { useContext, type FC } from 'react';
import TransferWrapper from './base/TransferWrapper';
import type { LFormItemTransferProps } from './interface';

const LFormItemTransfer: FC<LFormItemTransferProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  titles,
  disabled = false,
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
        disabled={disabled || formDisabled}
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
export * from './interface';
