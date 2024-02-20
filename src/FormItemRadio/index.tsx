import type { RadioGroupProps, SelectProps } from 'antd';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import type { LFormItemSelectProps } from 'lighting-design/FormItemSelect';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyArray, emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import RadioWrapper from './base/RadioWrapper';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<
      LFormItemSelectProps,
      | 'fieldNames'
      | 'actionRef'
      | 'requestOptions'
      | 'request'
      | 'all'
      | 'allValue'
      | 'allLabel'
      | 'spin'
    > {
  options?: SelectProps['options'] | Record<string, any>[];
  radioProps?: RadioGroupProps;
  optionType?: RadioGroupProps['optionType'];
  buttonStyle?: RadioGroupProps['buttonStyle'];
}

const validatorSelectVal = (value, all, allValue) => {
  if ((typeof value === 'number' && !Number.isNaN(value)) || (all && allValue === value)) {
    return true;
  }
  return !!value;
};

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  request,
  fieldNames,
  optionType,
  buttonStyle,
  all = false,
  allValue = 'all',
  allLabel = '全部',
  options = emptyArray,
  disabled,
  size,
  radioProps = emptyObject,
  placeholder,
  spin,
  requestOptions = emptyObject,

  required,
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
        disabled={disabled ?? formDisabled}
        actionRef={actionRef}
        options={options}
        request={request}
        requestOptions={requestOptions}
        outLoading={spin}
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
