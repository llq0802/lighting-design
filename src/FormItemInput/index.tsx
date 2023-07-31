import type { InputProps } from 'antd';

import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper';
import useRules from './useRules';
export interface LFormItemInputProps extends LFormItemProps {
  /**
   *输入框类型 扩展了一些类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.11
   *@memberof LFormItemInputProps
   */
  type?: InputWrapperProps['type'];
  /**
   * 是否禁止输入空格 默认 true
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.11
   *@memberof LFormItemInputProps
   */
  disabledWhiteSpace?: boolean;
  /**
   * antd.Input 的其他属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.11
   *@memberof LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
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

  const rules = useRules(
    type as string,
    !!required,
    restProps?.messageVariables?.label || messageLabel,
  );

  return (
    <LFormItem
      placeholder={messageLabel}
      required={required}
      rules={rules}
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
