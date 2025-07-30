import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { ButtonProps } from 'antd';
import type { InputProps } from 'antd/es/input';
import type { LCaptchaButtonProps } from 'lighting-design/l-captcha-button';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<LFormProps, 'size' | 'disabled' | 'variant'>,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'onEnd' | 'second'> {
  placeholder?: string;
  /**
   *  按钮初始文本
   */
  initText?: string;
  type?: ButtonProps['type'] | 'inline';
  maxLength?: number;
  /**
   * 请求方法
   */
  request?: (...args: any[]) => Promise<any>;
  requestAutoFocus?: boolean;
  /**
   *ahooks 的 useRequest  的配置项
   *@see https://ahooks.js.org/zh-CN/hooks/use-request/basic
   */
  requestOptions?: Options<any, any>;
  captchaButtonProps?: Partial<LCaptchaButtonProps>;
  inputProps?: InputProps;
}
