import type { TextAreaProps } from 'antd/es/input';
import type { LCaptchaButtonProps } from 'lighting-design/CaptchaButton';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { CodeInputProps } from './base/CaptchaInput';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<
      CodeInputProps,
      | 'onGetCaptcha'
      | 'type'
      | 'inputProps'
      | 'buttonProps'
      | 'autoClick'
      | 'autoFocusOnGetCaptcha'
      | 'maxLength'
    >,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'second' | 'disabledText' | 'onEnd' | 'actionRef'> {
  /**
   *  按钮初始文本
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemCaptchaProps
   */
  initText?: string;
  variant?: TextAreaProps['variant'];
}
