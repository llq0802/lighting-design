import type { InputProps } from 'antd';

import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper';
import useRules from './useRules';
export interface LFormItemInputProps extends LFormItemProps {
  /**
   *输入框类型对antd输入框扩展了一些类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.26
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  type?: InputWrapperProps['type'];
  /**
   * - 是否禁止输入空格
   *
   * - 在 mac 笔记本上使用原生输入法时不建议设置
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.26
   */
  disabledWhiteSpace?: boolean;
  /**
   * antd.Input 的其他属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.26
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  inputProps?: InputProps;
}

const LFormItemInput: FC<LFormItemInputProps> = ({
  size,
  disabled,

  type,
  disabledWhiteSpace = false,
  required,
  placeholder,

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
    <LFormItem
      placeholder={messageLabel}
      required={required}
      rules={rules}
      validateTrigger="onBlur"
      {...restProps}
    >
      <InputWrapper
        size={size}
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
