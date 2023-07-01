import type { PasswordProps } from 'antd/lib/input/Password';
import { PASSWORD_REG } from 'lighting-design/constants';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import type { FC } from 'react';
import { useContext } from 'react';
import PasswordWrapper from './PasswordWrapper';

export interface LFormItemPasswordProps extends LFormItemProps {
  min?: number;
  max?: number;
  /** 是否开启高强度密码验证 */
  highPassWord?: boolean;
  /** 是否禁用空格输入 */
  disabledWhiteSpace?: boolean;

  passwordProps?: PasswordProps;
  /** 是否禁用粘贴 */
  disabledPaste?: boolean;
  /** 是否禁用复制 */
  disabledCopy?: boolean;
}

const LFormItemPassword: FC<LFormItemPasswordProps> = ({
  min = 8,
  max = 16,
  highPassWord = false,
  disabledWhiteSpace = true,
  disabledPaste = true,
  disabledCopy = true,
  passwordProps = {},
  required,
  disabled,
  placeholder = '请输入密码',
  ...restProps
}) => {
  const messagePlaceholder = usePlaceholder({
    placeholder,
    restProps,
  });
  const { disabled: formDisabled } = useContext(LFormContext);
  return (
    <LFormItem
      placeholder={messagePlaceholder}
      required={required}
      validateTrigger="onBlur"
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';

            if (!highPassWord) {
              if (!value) {
                errMsg = required ? `${messagePlaceholder}!` : '';
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
            errMsg = `请输入包括大小写字母，数字，特殊字符的8位密码`;
            return Promise.reject(errMsg);
          },
        },
      ]}
      {...restProps}
    >
      <PasswordWrapper
        disabled={disabled ?? formDisabled}
        disabledWhiteSpace={disabledWhiteSpace}
        disabledPaste={disabledPaste}
        disabledCopy={disabledCopy}
        placeholder={messagePlaceholder}
        {...passwordProps}
      />
    </LFormItem>
  );
};

export default LFormItemPassword;
