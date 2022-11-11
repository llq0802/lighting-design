import type { FC } from 'react';
import type { LCaptchaButtonProps } from '../CaptchaButton';
import type { LFormItemProps } from '../FormItem';
import LFormItem from '../FormItem';
import type { CodeInputProps } from './base/CaptchaInput';
import CaptchaInput from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      'onGetCaptcha' | 'type' | 'inputProps' | 'buttonProps' | 'autoClick' | 'autoFocusOnGetCaptcha'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd'> {}

const LFormItemCaptcha: FC<LFormItemCaptchaProps> = ({
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
  return (
    <LFormItem required={required} {...restProps}>
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
