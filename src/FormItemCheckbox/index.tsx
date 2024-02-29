import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import CheckboxWrapper from './base/CheckboxWrapper';
import type { LFormItemCheckboxProps } from './interface';

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  disabled = false,

  fieldNames,
  actionRef,
  autoRequest,
  request,
  beforeAll,
  options = emptyArray,
  checkboxProps = emptyObject,
  spin,
  refreshDeps,
  requestOptions = emptyObject,
  ...restProps
}) => {
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem _isSelectType {...restProps}>
      <CheckboxWrapper
        dependencies={restProps?.dependencies}
        disabled={disabled || formDisabled}
        options={options}
        fieldNames={fieldNames}
        beforeAll={beforeAll}
        //
        actionRef={actionRef}
        refreshDeps={refreshDeps}
        request={request}
        requestOptions={requestOptions}
        outLoading={spin}
        autoRequest={autoRequest}
        {...checkboxProps}
      />
    </LFormItem>
  );
};

export default LFormItemCheckbox;
export * from './interface';
