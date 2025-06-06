import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import InputWrapper from './InputWrapper';
import type { LFormItemInputProps } from './interface';

const LFormItemInput: FC<LFormItemInputProps> = ({
  disabledWhiteSpace = false,
  //
  size,
  disabled = false,
  placeholder,
  //
  type,
  variant,
  prefix,
  suffix,
  addonAfter,
  addonBefore,
  maxLength,
  inputProps = emptyObject,
  //
  required,
  ...restProps
}) => {
  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    restProps,
  });
  // const rules = useRules(type as string, !!required, restProps?.messageVariables?.label || itemPlaceholder);

  const baseProps = {
    size,
    disabled,
    placeholder: itemPlaceholder,
    type,
    variant,
    prefix,
    suffix,
    addonAfter,
    addonBefore,
    maxLength,
    ...inputProps,
  };

  return (
    <LFormItem required={required} {...restProps}>
      <InputWrapper {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemInput;
export * from './interface';
