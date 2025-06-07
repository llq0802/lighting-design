import { emptyObject, PASSWORD_REG } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemLabel, getFormItemPlaceholder, isLegalValue } from 'lighting-design/utils';
import type { FC } from 'react';
import BasePassword from './base-password';
import type { LFormItemPasswordProps } from './interface';

const LFormItemPassword: FC<LFormItemPasswordProps> = ({
  size,
  disabled,
  placeholder,
  variant,
  //
  min = 8,
  max = 16,
  highPassword = false,
  disabledPaste = true,
  disabledCopy = true,
  highPasswordErrorMsg = `必须同时包含大小写字母、数字、特殊字符且位数至少8位!`,
  passwordProps = emptyObject,
  ...formItemProps
}) => {
  const { required, messageVariables } = formItemProps;

  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: itemPlaceholder,
    variant,
    //
    max,
    ...passwordProps,
  };

  const rules = [
    {
      async validator(_: any, value: any) {
        let errMsg = '';

        if (!highPassword) {
          if (value.length < min || value.length > max) {
            errMsg = messageVariables?.label || `密码必须为${min}到${max}位!`;
            return Promise.reject(errMsg);
          }

          if (required && !isLegalValue(value)) {
            errMsg = messageVariables?.label || `${getFormItemLabel(formItemProps)}不能为空!`;
            return Promise.reject(errMsg);
          }
          return Promise.resolve();
        }

        if (!PASSWORD_REG.test(value)) {
          errMsg = messageVariables?.label || highPasswordErrorMsg || itemPlaceholder;
          return Promise.reject(errMsg);
        }

        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem rules={rules} {...formItemProps}>
      <BasePassword {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemPassword;
export * from './interface';
