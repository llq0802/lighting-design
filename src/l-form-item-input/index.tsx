import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseInput from './base-input';
import type { LFormItemInputProps } from './interface';
import useInputRules from './use-input-rules';

const LFormItemInput: FC<LFormItemInputProps> = ({
  size,
  disabled,
  placeholder,
  //
  min,
  max,
  //
  type,
  variant,
  prefix,
  suffix,
  addonAfter,
  addonBefore,
  maxLength,
  showCount,
  inputProps = emptyObject,
  //
  ...formItemProps
}) => {
  const { required, messageVariables, customValidator } = formItemProps;

  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

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
    showCount,
    max,
    ...inputProps,
  };

  const rules = useInputRules({
    type,
    required,
    min,
    max,
    message: messageVariables?.label,
  });

  return (
    <LFormItem rules={customValidator ? void 0 : rules} {...formItemProps}>
      <BaseInput {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemInput;
export * from './interface';
