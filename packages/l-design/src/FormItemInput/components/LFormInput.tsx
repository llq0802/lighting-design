import type { InputProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import { usePlaceholder } from '../../utils';
import type { InputWrapperProps } from '../base/InputWrapper';
import InputWrapper from '../base/InputWrapper';

export interface LFormItemInputProps extends LFormItemProps {
  type?: InputWrapperProps['type'];
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
}

const LFormItemInput: FC<LFormItemInputProps> = ({
  type,
  disabledWhiteSpace,
  inputProps = {},
  required,
  disabled,
  placeholder,
  ...restProps
}) => {
  const isOnblur = useMemo(
    () => type === 'bankCard' || type === 'idCard' || type === 'phone',
    [type],
  );

  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  return (
    <LFormItem
      required={required}
      validateTrigger={isOnblur ? 'onBlur' : 'onChange'}
      {...restProps}
    >
      <InputWrapper
        disabled={disabled}
        placeholder={messageLabel}
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemInput;
