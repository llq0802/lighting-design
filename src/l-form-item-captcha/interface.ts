import type { ButtonProps } from 'antd';
import type { InputProps } from 'antd/es/input';
import type { LCaptchaButtonProps } from 'lighting-design/l-captcha-button';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<LFormProps, 'size' | 'disabled' | 'variant'>,
    Pick<LCaptchaButtonProps, 'cacheKey'> {
  placeholder?: string;
  /**
   *  按钮初始文本
   */
  initText?: string;
  type?: ButtonProps['type'] | 'inline';
  maxLength?: number;
  request?: (captcha: string) => Promise<boolean>;
  requestAutoFocus?: boolean;
  captchaButtonProps?: Partial<LCaptchaButtonProps>;
  inputProps?: InputProps;
}
