import type { FC } from 'react';
import type { LFormItemProps } from '../..';
import LFormItem from '../..';
import type { LCaptchaButtonProps } from '../../../CaptchaButton';
import { usePlaceholder } from '../../../utils';
import type { CodeInputProps } from './base/CaptchaInput';
import CaptchaInput from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      'onGetCaptcha' | 'type' | 'inputProps' | 'buttonProps' | 'autoClick' | 'autoFocusOnGetCaptcha'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd'> {
  initText?: string;
  maxLength?: number;
}

const LFormItemCaptcha: FC<LFormItemCaptchaProps> = ({
  cacheKey = '__FormItemCaptcha__',
  second,
  disabledText,
  onEnd,
  type = 'default',
  maxLength = 6,
  autoClick,
  initText = '获取验证码',
  autoFocusOnGetCaptcha,
  onGetCaptcha,
  inputProps = {},
  buttonProps = {},
  placeholder,
  disabled,

  required,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  return (
    <LFormItem required={required} {...restProps}>
      <CaptchaInput
        maxLength={maxLength}
        disabled={disabled}
        type={type}
        onGetCaptcha={onGetCaptcha}
        autoClick={autoClick}
        autoFocusOnGetCaptcha={autoFocusOnGetCaptcha}
        inputProps={inputProps}
        placeholder={messageLabel}
        buttonProps={{
          second,
          cacheKey,
          disabledText,
          onEnd,
          initText,
          ...buttonProps,
        }}
      />
    </LFormItem>
  );
};

export default LFormItemCaptcha;
