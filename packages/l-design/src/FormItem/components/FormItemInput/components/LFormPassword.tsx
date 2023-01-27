import type { PasswordProps } from 'antd/lib/input/Password';
import type { FC } from 'react';
import { useContext } from 'react';
import { LFormContext } from '../../../../Form/base/BaseForm';
import { usePlaceholder } from '../../../../utils';
import type { LFormItemProps } from '../../../base/BaseFromItem';
import LFormItem from '../../../base/BaseFromItem';
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
  disabledWhiteSpace = true,
  disabledPaste = true,
  disabledCopy = true,
  passwordProps = {},

  required,
  disabled,
  placeholder = '请输入密码',
  ...restProps
}) => {
  // const messageLabel = useMemo(() => getFormItemLabel(restProps), [restProps]);

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
            if (!value) {
              errMsg = required ? `${messagePlaceholder}!` : '';
            } else if (value.length < min || value.length > max) {
              errMsg = `${'密码'}为${min}～${max}位`;
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
