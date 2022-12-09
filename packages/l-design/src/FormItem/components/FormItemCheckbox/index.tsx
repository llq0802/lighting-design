import type { CheckboxOptionType } from 'antd/lib/checkbox';
import type { FC } from 'react';
import { useMemo } from 'react';
import { getFormItemLabel } from '../../../utils';
import type { LFormItemProps } from '../../base/BaseFromItem';
import LFormItem from '../../base/BaseFromItem';
import type { CheckboxWrapperProps } from './base/CheckboxWrapper';
import CheckboxWrapper from './base/CheckboxWrapper';
export interface LFormItemCheckboxProps
  extends LFormItemProps,
    Pick<CheckboxWrapperProps, 'checkboxProps' | 'request' | 'beforeAll'> {
  dependencies?: string[];
  debounceTime?: number;
  options: CheckboxOptionType[];
}

const LFormItemCheckbox: FC<LFormItemCheckboxProps> = ({
  request,
  beforeAll,
  options = [],
  checkboxProps = {},
  debounceTime,
  placeholder,
  disabled,
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
            if (!value || !value?.length) {
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
      <CheckboxWrapper
        dependencies={restProps?.dependencies}
        options={options}
        request={request}
        disabled={disabled}
        debounceTime={debounceTime}
        beforeAll={beforeAll}
        checkboxProps={checkboxProps}
      />
    </LFormItem>
  );
};

export default LFormItemCheckbox;
