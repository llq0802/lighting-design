import type { InputProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../FormItem';
import LFormItem from '../FormItem';
import { getFormItemLabel } from '../utils';
import type { InputWrapperProps } from './base/InputWrapper';
import InputWrapper from './base/InputWrapper';

export interface LFormItemInputProps extends LFormItemProps {
  type?: InputWrapperProps['type'];
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
}

const LFormItemInput: FC<LFormItemInputProps> = ({
  type,
  disabledWhiteSpace,
  inputProps = {},
  required = false,
  transform,
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  const isOnblur = useMemo(
    () => type === 'bankCard' || type === 'idCard' || type === 'phone' || type === 'email',
    [type],
  );

  return (
    <LFormItem
      required={required}
      validateTrigger={isOnblur ? 'onBlur' : 'onChange'}
      rules={[
        {
          validator(_, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${messageLabel}` : '';
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
      <InputWrapper
        placeholder="请输入"
        allowClear
        autoComplete="off"
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemInput;
