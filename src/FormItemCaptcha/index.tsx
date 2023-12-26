import type { LCaptchaButtonProps } from 'lighting-design/CaptchaButton';
import { LFormContext } from 'lighting-design/Form/base/BaseForm';
import type { LFormItemProps } from 'lighting-design/FormItem/base/BaseFromItem';
import LFormItem from 'lighting-design/FormItem/base/BaseFromItem';
import { usePlaceholder } from 'lighting-design/_utils';
import { emptyObject } from 'lighting-design/constants';
import type { FC } from 'react';
import { useContext } from 'react';
import type { CodeInputProps } from './base/CaptchaInput';
import CaptchaInput from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      'onGetCaptcha' | 'type' | 'inputProps' | 'buttonProps' | 'autoClick' | 'autoFocusOnGetCaptcha'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd'> {
  /**
   *  按钮初始文本
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  initText?: string;

  /**
   *  验证码最大长度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  maxLength?: number;
  /**
   *  用于取消重置倒计时
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.28
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  cancelRef?: React.MutableRefObject<(() => void) | undefined>;
}

const LFormItemCaptcha: FC<LFormItemCaptchaProps> = ({
  cacheKey = '__LFormItemCaptcha__',
  second,
  disabledText,
  onEnd,
  type = 'default',
  maxLength = 6,
  autoClick,
  initText = '获取验证码',
  autoFocusOnGetCaptcha,
  onGetCaptcha,
  inputProps = emptyObject,
  buttonProps = emptyObject,
  placeholder,
  size,
  disabled,
  cancelRef,

  required,
  ...restProps
}) => {
  const messageLabel = usePlaceholder({
    placeholder,
    restProps,
  });

  const { disabled: formDisabled } = useContext(LFormContext);

  return (
    <LFormItem required={required} placeholder={messageLabel} {...restProps}>
      <CaptchaInput
        // size={size ?? formSize}

        size={size}
        disabled={disabled ?? formDisabled}
        maxLength={maxLength}
        type={type}
        onGetCaptcha={onGetCaptcha}
        autoClick={autoClick}
        autoFocusOnGetCaptcha={autoFocusOnGetCaptcha}
        inputProps={inputProps}
        placeholder={messageLabel}
        buttonProps={{
          cacheKey,
          initText,
          second,
          disabledText,
          onEnd,
          cancelRef,
          ...buttonProps,
        }}
      />
    </LFormItem>
  );
};

export default LFormItemCaptcha;
