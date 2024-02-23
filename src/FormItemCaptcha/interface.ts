import type { InputProps, TextAreaProps } from 'antd/es/input';
import type { LCaptchaButtonProps } from 'lighting-design/CaptchaButton';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { CodeInputProps } from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      'onGetCaptcha' | 'buttonProps' | 'autoClick' | 'autoFocusOnGetCaptcha' | 'maxLength' | 'type'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd' | 'actionRef'> {
  /**
   *  按钮初始文本
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  initText?: string;
  variant?: TextAreaProps['variant'];
  inputProps?: InputProps;
}
