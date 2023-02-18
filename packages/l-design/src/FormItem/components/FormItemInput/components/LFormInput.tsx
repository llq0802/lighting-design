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

  let rules: any[] = [];
  if (type === 'phone') {
    rules = [
      {
        required,
        message: `请输入正确的手机号格式!`,
        pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
      },
    ];
  }
  if (type === 'idCard') {
    rules = [
      {
        required,
        message: '请输入正确的身份证格式!',
        pattern:
          /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,
      },
    ];
  }
  if (type === 'url') {
    rules = [
      {
        required,
        message: '请输入正确的URL网址格式!',
        pattern:
          /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,
      },
    ];
  }

  if (type === 'bankCard') {
    rules = [
      {
        required,
        message: '请输入正确的银行卡格式!',
        pattern: /^[1-9]\d{9,29}$/,
      },
    ];
  }
  if (type === 'email') {
    rules = [
      {
        required,
        message: '请输入正确的邮箱格式!',
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
    ];
  }

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
