import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import RadioWrapper from './base/RadioWrapper';
import type { LFormItemRadioProps } from './interface';

const validatorSelectVal = (value: any, all: boolean, allValue: any) => {
  if ((typeof value === 'number' && !Number.isNaN(value)) || (all && allValue === value)) {
    return true;
  }
  return !!value;
};

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  placeholder,
  size,
  disabled = false,
  autoRequest = true,
  refreshDeps,

  request,
  fieldNames,
  optionType,
  buttonStyle,
  all = false,
  allValue = 'all',
  allLabel = '全部',
  options = emptyArray,
  radioProps = emptyObject,
  spin,
  requestOptions = emptyObject,

  required = false,
  actionRef,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
    isSelectType: true,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      required={required}
      _isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!validatorSelectVal(value, all, allValue)) {
              errMsg = required ? `${messageLabel}!` : '';
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <RadioWrapper
        dependencies={restProps?.dependencies}
        size={size}
        disabled={disabled || formDisabled}
        actionRef={actionRef}
        options={options}
        request={request}
        requestOptions={requestOptions}
        refreshDeps={refreshDeps}
        outLoading={spin}
        autoRequest={autoRequest}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        optionType={optionType}
        buttonStyle={buttonStyle}
        fieldNames={fieldNames}
        {...radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;
export * from './interface';
