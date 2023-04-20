import type { InputProps } from 'antd';
import {
  BANCK_CARD_REG,
  CHINESE_REG,
  EMAIL_REG,
  ID_CARD_REG,
  PHONE_REG,
  URL_REG,
} from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper';
export interface LFormItemInputProps extends LFormItemProps {
  type?: InputWrapperProps['type'];
  /** 是否禁止输入空格 默认true */
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
        pattern: PHONE_REG,
      },
    ];
  }
  if (type === 'idCard') {
    rules = [
      {
        required,
        message: '请输入正确的身份证格式!',
        pattern: ID_CARD_REG,
      },
    ];
  }
  if (type === 'url') {
    rules = [
      {
        required,
        message: '请输入正确的URL网址格式!',
        pattern: URL_REG,
      },
    ];
  }

  if (type === 'bankCard') {
    rules = [
      {
        required,
        message: '请输入正确的银行卡格式!',
        pattern: BANCK_CARD_REG,
      },
    ];
  }
  if (type === 'email') {
    rules = [
      {
        required,
        message: '请输入正确的邮箱格式!',
        pattern: EMAIL_REG,
      },
    ];
  }

  if (type === 'chinese') {
    rules = [
      {
        required,
        message: '请输入中文汉字!',
        pattern: CHINESE_REG,
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
