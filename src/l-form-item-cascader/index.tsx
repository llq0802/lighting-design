import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import { usePlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import { useContext } from 'react';
import CascaderWrapper from './base/CascaderWrapper';
import type { LFormItemCascaderProps } from './interface';

const LFormItemCascader: FC<LFormItemCascaderProps> = ({
  disabled = false,
  placeholder,
  size,

  autoRequest,
  refreshDeps,
  variant,

  changeOnSelect,
  expandTrigger,
  displayRender,
  showSearch,
  multiple,
  loadData,
  options = emptyArray,
  fieldNames,

  request,
  requestOptions = emptyObject,
  spin,
  actionRef,

  cascaderProps = emptyObject,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem placeholder={messageLabel} _isSelectType {...restProps}>
      <CascaderWrapper
        disabled={disabled || formDisabled}
        placeholder={messageLabel}
        size={size}
        name={restProps?.name}
        initialValue={restProps?.initialValue}
        options={options}
        //
        request={request}
        outLoading={spin}
        autoRequest={autoRequest}
        refreshDeps={refreshDeps}
        requestOptions={requestOptions}
        actionRef={actionRef}
        //
        variant={variant}
        multiple={multiple}
        showSearch={showSearch}
        fieldNames={fieldNames}
        loadData={loadData}
        changeOnSelect={changeOnSelect}
        expandTrigger={expandTrigger}
        displayRender={displayRender}
        {...cascaderProps}
      />
    </LFormItem>
  );
};

export default LFormItemCascader;
export * from './interface';
