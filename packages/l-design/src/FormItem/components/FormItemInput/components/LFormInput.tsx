import type { InputProps } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';
import { usePlaceholder } from '../../../../utils';
import type { LFormItemProps } from '../../../base/BaseFromItem';
import LFormItem from '../../../base/BaseFromItem';
import type { InputWrapperProps } from '../base/InputWrapper';
import InputWrapper from '../base/InputWrapper';

export interface LFormItemInputProps extends LFormItemProps {
  type?: InputWrapperProps['type'];
  /**
   * 禁止输入空格
   */
  disabledWhiteSpace?: boolean;
  inputProps?: InputProps;
}

const LFormItemInput: FC<LFormItemInputProps> = ({
  type,
  disabledWhiteSpace = true,
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
      placeholder={messageLabel}
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
