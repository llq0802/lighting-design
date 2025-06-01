import { emptyObject, PASSWORD_REG } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import { useContext } from 'react';
import type { LFormItemPasswordProps } from './interface';
import PasswordWrapper from './PasswordWrapper';

const LFormItemPassword: FC<LFormItemPasswordProps> = ({
  size,
  disabled = false,
  placeholder,

  min = 8,
  max = 16,
  highPassWord = false,
  disabledWhiteSpace = false,
  disabledPaste = true,
  disabledCopy = true,
  passwordProps = emptyObject,
  required = false,
  highPassWordErrorMsg = `必须同时包含大小写字母 , 数字  , 特殊字符且位数至少8位!`,
  variant,
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  const rules = [
    {
      validator(_: any, value: any) {
        let errMsg = '';

        if (!highPassWord) {
          if (!value) {
            errMsg = required ? `${restProps?.messageVariables?.label || messagePlaceholder}!` : '';
          } else if (value.length < min || value.length > max) {
            errMsg = `密码为${min}～${max}位`;
          }
          if (errMsg) {
            return Promise.reject(errMsg);
          }
          return Promise.resolve();
        }

        if (PASSWORD_REG.test(value)) {
          return Promise.resolve();
        }
        errMsg = restProps?.messageVariables?.label || highPassWordErrorMsg || messagePlaceholder;
        return Promise.reject(errMsg);
      },
    },
  ];

  return (
    <LFormItem placeholder={messagePlaceholder} required={required} rules={rules} {...restProps}>
      <PasswordWrapper
        size={size}
        disabled={disabled || formDisabled}
        disabledWhiteSpace={disabledWhiteSpace}
        disabledPaste={disabledPaste}
        disabledCopy={disabledCopy}
        placeholder={messagePlaceholder}
        variant={variant}
        {...passwordProps}
      />
    </LFormItem>
  );
};

export default LFormItemPassword;
export * from './interface';
