import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import SelectWrapper from './base/SelectWrapper';
import type { LFormItemSelectProps } from './interface';

const validatorSelectVal = (
  value: any,
  mode: LFormItemSelectProps['mode'],
  all: boolean,
  allValue: any,
) => {
  if (mode === 'multiple' || mode === 'tags') {
    return value && value?.length > 0;
  }
  if ((typeof value === 'number' && !Number.isNaN(value)) || (all && allValue === value)) {
    return true;
  }
  return !!value;
};

const LFormItemSelect: FC<LFormItemSelectProps> = ({
  disabled = false,
  size,
  placeholder,

  request,
  showSearch,
  mode,
  fieldNames,
  variant,
  all = false,
  allValue = 'all',
  allLabel = '全部',
  options = emptyArray,
  selectProps = emptyObject,
  requestOptions = emptyObject,
  autoRequest = true,
  refreshDeps,
  spin,

  required = false,

  actionRef,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  const rules = [
    {
      validator(rule: any, value: any) {
        let errMsg = '';
        if (!validatorSelectVal(value, mode || selectProps?.mode, all, allValue)) {
          errMsg = required ? `${restProps?.messageVariables?.label || messagePlaceholder}!` : '';
        }
        if (errMsg) {
          return Promise.reject(errMsg);
        }
        return Promise.resolve();
      },
    },
  ];
  return (
    <LFormItem required={required} _isSelectType rules={rules} {...restProps}>
      <SelectWrapper
        size={size}
        placeholder={messagePlaceholder}
        disabled={disabled || formDisabled}
        dependencies={restProps?.dependencies}
        refreshDeps={refreshDeps}
        autoRequest={autoRequest}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        request={request}
        requestOptions={requestOptions}
        actionRef={actionRef}
        outLoading={spin}
        options={options}
        mode={mode}
        variant={variant}
        showSearch={showSearch}
        fieldNames={fieldNames}
        {...selectProps}
      />
    </LFormItem>
  );
};

export default LFormItemSelect;
export * from './interface';
