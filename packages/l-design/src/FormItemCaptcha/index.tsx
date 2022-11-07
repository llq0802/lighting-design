import React from 'react';
import type { LCaptchaButtonProps } from '../CaptchaButton';
import type { LFormItemProps } from '../FormItem';
import LFormItem from '../FormItem';
import { getFormItemLabel } from '../utils';
import type { CodeInputProps } from './base/CaptchaInput';
import CaptchaInput from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      'onGetCaptcha' | 'type' | 'inputProps' | 'buttonProps' | 'autoClick' | 'autoFocusOnGetCaptcha'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd'> {}

const LFormItemCaptcha: React.FC<LFormItemCaptchaProps> = ({
  cacheKey,
  second,
  disabledText,
  onEnd,

  type,
  autoClick = false,
  autoFocusOnGetCaptcha = true,
  onGetCaptcha,
  inputProps = {},
  buttonProps = {},

  required,
  ...restProps
}) => {
  const messageLabel = React.useMemo(() => getFormItemLabel(restProps), [restProps]);

  return (
    <LFormItem
      required={required}
      rules={[
        {
          validator(rules, value) {
            let errMsg = '';
            if (!value) {
              errMsg = required ? `请输入${messageLabel}` : '';
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
      <CaptchaInput
        type={type}
        onGetCaptcha={onGetCaptcha}
        autoClick={autoClick}
        autoFocusOnGetCaptcha={autoFocusOnGetCaptcha}
        inputProps={inputProps}
        buttonProps={{
          second,
          cacheKey,
          disabledText,
          onEnd,
          ...buttonProps,
        }}
      />
    </LFormItem>
  );
};

export default LFormItemCaptcha;
