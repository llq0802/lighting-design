import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import CaptchaInput from './base/CaptchaInput';
import type { LFormItemCaptchaProps } from './interface';

const LFormItemCaptcha: FC<LFormItemCaptchaProps> = ({
  placeholder,
  size,
  disabled = false,

  cacheKey = '__LFormItemCaptcha__',
  second,
  disabledText,
  onEnd,
  actionRef,

  type = 'default',
  maxLength = 6,
  autoClick,
  initText = '获取验证码',
  autoFocusOnGetCaptcha,

  onGetCaptcha,
  inputProps = emptyObject,
  buttonProps = emptyObject,

  variant,

  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem placeholder={messageLabel} {...restProps}>
      <CaptchaInput
        placeholder={messageLabel}
        size={size}
        disabled={disabled || formDisabled}
        variant={variant}
        maxLength={maxLength}
        type={type}
        onGetCaptcha={onGetCaptcha}
        autoClick={autoClick}
        autoFocusOnGetCaptcha={autoFocusOnGetCaptcha}
        second={second}
        disabledText={disabledText}
        onEnd={onEnd}
        actionRef={actionRef}
        cacheKey={cacheKey}
        initText={initText}
        buttonProps={buttonProps}
        {...inputProps}
      />
    </LFormItem>
  );
};

export default LFormItemCaptcha;
export * from './interface';
