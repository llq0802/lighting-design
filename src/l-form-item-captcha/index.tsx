import { emptyObject } from 'lighting-design/constants';
import LFormItem from 'lighting-design/l-form-item';
import { getFormItemPlaceholder } from 'lighting-design/utils';
import type { FC } from 'react';
import BaseCaptchaInput from './base-captcha-input';
import type { LFormItemCaptchaProps } from './interface';

const LFormItemCaptcha: FC<LFormItemCaptchaProps> = ({
  placeholder,
  size,
  disabled,
  variant,
  cacheKey = '__LFormItemCaptcha__',
  type = 'default',
  maxLength = 6,
  initText = '获取验证码',
  inputProps = emptyObject,
  captchaButtonProps = emptyObject,

  ...formItemProps
}) => {
  const itemPlaceholder = getFormItemPlaceholder({
    placeholder,
    formItemProps,
  });

  const baseProps = {
    size,
    disabled,
    variant,
    placeholder: itemPlaceholder,
    maxLength,
    type,
    cacheKey,
    initText,
    captchaButtonProps,
    inputProps,
  };

  return (
    <LFormItem {...formItemProps}>
      <BaseCaptchaInput {...baseProps} />
    </LFormItem>
  );
};

export default LFormItemCaptcha;
export * from './interface';
