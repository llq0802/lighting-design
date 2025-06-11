import { Input } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import { useMemo, type FC } from 'react';
import type { LFormItemInputProps } from './interface';
import useInputRules from './use-input-rules';

const LFormItemInput: FC<LFormItemInputProps> = ({
  min,
  max,
  //
  size,
  disabled,
  placeholder,
  variant,
  type = 'text',
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

  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const innerType = useMemo(() => {
    if (type === 'phone' || type === 'idCard' || type === 'bankCard' || type === 'chinese') {
      return 'text';
    }
    return type;
  }, [type]);

  const innerMaxLength = useMemo(() => {
    if (type === 'text') return (maxLength || max) as number;
    if (type === 'bankCard') return 22;
    if (type === 'phone') return 11;
    if (type === 'idCard') return 18;
    return maxLength;
  }, [type, maxLength, max]);

  const baseProps = {
    autoComplete: 'off',
    size,
    disabled,
    placeholder: innerPlaceholder,
    type: innerType,
    variant,
    prefix,
    suffix,
    addonAfter,
    addonBefore,
    maxLength: innerMaxLength,
    showCount,
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
      <Input {...baseProps} />;
    </LFormItem>
  );
};

export default LFormItemInput;
export * from './interface';
