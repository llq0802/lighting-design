import type { PasswordProps } from 'antd/lib/input/Password';
import type { FC } from 'react';
import { useMemo } from 'react';
import type { LFormItemProps } from '../../FormItem/base/BaseFromItem';
import LFormItem from '../../FormItem/base/BaseFromItem';
import { getFormItemLabel } from '../../utils';
import PasswordWrapper from '../base/PasswordWrapper';

export interface LFormItemPasswordProps extends LFormItemProps {
  min?: number;
  max?: number;
  disabledWhiteSpace?: boolean;
  passwordProps?: PasswordProps;

  disabledPaste?: boolean;
  disabledCopy?: boolean;
}

const LFormItemPassword: FC<LFormItemPasswordProps> = ({
  min = 8,
  max = 16,
  disabledWhiteSpace = false,
  disabledPaste = true,
  disabledCopy = true,
  passwordProps = {},
  required = false,
  ...restProps
}) => {
  const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

  return (
    <LFormItem
      validateTrigger="onBlur"
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${messageLabel}` : '';
            } else if (value.length < min || value.length > max) {
              errMsg = `${messageLabel}为${min}～${max}位`;
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          },
        },
      ]}
      {...restProps}
    >
      <PasswordWrapper
        disabledWhiteSpace={disabledWhiteSpace}
        disabledPaste={disabledPaste}
        disabledCopy={disabledCopy}
        {...passwordProps}
      />
    </LFormItem>
  );
};

export default LFormItemPassword;
