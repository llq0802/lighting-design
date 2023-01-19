import type { InputProps } from 'antd';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../../Form/base/BaseForm';
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
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem
      placeholder={messageLabel}
      required={required}
      validateTrigger="onBlur"
      {...restProps}
    >
      <InputWrapper
        disabled={disabled ?? formDisabled}
        placeholder={messageLabel}
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemInput;
