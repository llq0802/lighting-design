import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { generatePasswordRegex, getFormItemPlaceholder } from 'lighting-design/utils';
import { isNil } from 'lodash-es';
import type { FC } from 'react';
import BasePassword from './base-password';
import type { LFormItemPasswordProps } from './interface';

const LFormItemPassword: FC<LFormItemPasswordProps> = ({
  size,
  disabled,
  placeholder,
  variant,
  //
  prefix,
  suffix,
  addonAfter,
  addonBefore,
  //
  min = 8,
  max = 16,
  strictValidator = false,
  disabledPaste = true,
  disabledCopy = true,
  strictValidatorMessage,
  passwordProps = emptyObject,
  ...formItemProps
}) => {
  const { messageVariables, customValidator } = formItemProps;

  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    placeholder: itemPlaceholder,
    variant,
    prefix,
    suffix,
    addonAfter,
    addonBefore,
    //
    max,
    ...passwordProps,
  };

  const rules = [
    {
      async validator(_: any, value: any) {
        let errMsg = '';
        if (!strictValidator) {
          if (isNil(value) || value?.length < min || value?.length > max) {
            errMsg = messageVariables?.label || `密码必须为 ${min} 到 ${max} 位!`;
            return Promise.reject(errMsg);
          }

          return Promise.resolve();
        }

        //开启后，密码必须包含大小写字母、数字、特殊字符, 且长度在 min 和 max 之间
        if (!generatePasswordRegex(min, max).test(value)) {
          errMsg =
            strictValidatorMessage ||
            messageVariables?.label ||
            `密码必须包含大小写字母、数字、特殊字符, 且长度在 ${min} 和 ${max} 之间!`;
          return Promise.reject(errMsg);
        }

        return Promise.resolve();
      },
    },
  ];

  return (
    <LFormItem rules={customValidator ? void 0 : rules} {...formItemProps}>
      <BasePassword {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemPassword;
export * from './interface';
