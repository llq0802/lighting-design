import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
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
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        outLoading={spin}
        autoRequest={autoRequest}
        refreshDeps={refreshDeps}
        variant={variant}
        multiple={multiple}
        showSearch={showSearch}
        fieldNames={fieldNames}
        requestOptions={requestOptions}
        actionRef={actionRef}
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
