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
  disabled = false,
  options,
  titles,
  listStyle,
  showSearch,
  oneWay,
  pagination,
  limitMaxCount,
  fieldNames,
  autoRequest = true,
  actionRef,
  request,
  requestOptions = emptyObject,
  refreshDeps,
  spin,
  transferProps = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);
  // 是否为树穿梭或者表格等自定义穿梭
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
        disabled={disabled || formDisabled}
        outLoading={spin}
        actionRef={actionRef}
        autoRequest={autoRequest}
        request={request}
        requestOptions={requestOptions}
        refreshDeps={refreshDeps}
        limitMaxCount={limitMaxCount}
        isCustomTransfer={isCustomTransfer}
        options={options}
        titles={titles}
        fieldNames={fieldNames}
        listStyle={listStyle}
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
