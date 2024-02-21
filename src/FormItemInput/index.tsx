import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import InputWrapper from './InputWrapper';
import type { LFormItemInputProps } from './interface';
import useRules from './useRules';

const LFormItemInput: FC<LFormItemInputProps> = ({
  size,
  disabled = false,
  placeholder,

  type,
  disabledWhiteSpace = false,
  required,

  inputProps = emptyObject,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  const rules = useRules(
    type as string,
    !!required,
    restProps?.messageVariables?.label || messageLabel,
  );

  return (
    <LFormItem placeholder={messageLabel} required={required} rules={rules} {...restProps}>
      <InputWrapper
        size={size}
        disabled={disabled || formDisabled}
        placeholder={messageLabel}
        type={type}
        disabledWhiteSpace={disabledWhiteSpace}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemInput;
