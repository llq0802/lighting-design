import { Input } from 'antd';
import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { generatePasswordRegex, getFormItemPlaceholder } from 'lighting-design/utils';
import { isNil } from 'lodash-es';
import type { ClipboardEvent, FC } from 'react';
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
  strictValidator,
  disabledPaste = true,
  disabledCopy = true,
  strictValidatorMessage,
  passwordProps = emptyObject,
  ...formItemProps
}) => {
  const { messageVariables, customValidator } = formItemProps;

  const innerPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

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
            `密码必须包含大小写字母、数字、特殊字符, 且长度在 ${min} 到 ${max} 之间!`;
          return Promise.reject(errMsg);
        }

        return Promise.resolve();
      },
    },
  ];

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    if (disabledPaste) {
      e.preventDefault();
    }
    passwordProps?.onPaste?.(e);
  };

  const handleCopy = (e: ClipboardEvent<HTMLInputElement>) => {
    if (disabledCopy) {
      e.preventDefault();
    }
    passwordProps?.onCopy?.(e);
  };

  const baseProps = {
    size,
    disabled,
    variant,
    placeholder: innerPlaceholder,
    //
    prefix,
    suffix,
    addonAfter,
    addonBefore,
    //
    maxLength: max,
    autoComplete: 'new-password',
    ...passwordProps,
    onCopy: handleCopy,
    onPaste: handlePaste,
  };

  return (
    <LFormItem rules={customValidator ? void 0 : rules} {...formItemProps}>
      <Input.Password {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemPassword;
export * from './interface';
