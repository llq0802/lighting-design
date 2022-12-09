import type { SelectProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import { getFormItemLabel } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { RadioWrapperProps } from './base/RadioWrapper';
import RadioWrapper from './base/RadioWrapper';

export interface LFormItemRadioProps
  extends LFormItemProps,
    Pick<RadioWrapperProps, 'radioProps' | 'request' | 'all' | 'allValue' | 'allLabel'>,
    Pick<SelectProps, 'options'> {
  dependencies?: string[];
  debounceTime?: number;
}

const LFormItemRadio: FC<LFormItemRadioProps> = ({
  request,
  debounceTime,
  all = false,
  allValue = '',
  allLabel = '全部',
  options = [],
  disabled,
  radioProps = {},

  required,
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  return (
    <LFormItem
      required={required}
      isSelectType
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            const hasOptValue = options.find((item) => item?.value === value);
            if (!value && !hasOptValue && !(all && allValue === value)) {
              errMsg = required ? `请选择${messageLabel}!` : '';
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
        options={options}
        request={request}
        disabled={disabled}
        debounceTime={debounceTime}
        all={all}
        allValue={allValue}
        allLabel={allLabel}
        radioProps={radioProps}
      />
    </LFormItem>
  );
};

export default LFormItemRadio;
