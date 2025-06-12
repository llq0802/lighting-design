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
  /**
   * @description 请求方法
   * @param requestData 请求的额外参数
   * @returns Promise.resolve() 成功  /  Promise.reject() 失败
   */
  request?: (requestData: any) => Promise<any>;
  requestAutoFocus?: boolean;
  requestData?: any;
  onBefore?: (requestData: any) => void;
  onSuccess?: (data: any, requestData: any) => void;
  onError?: (err: Error, res: any) => void;
  captchaButtonProps?: Partial<LCaptchaButtonProps>;
  inputProps?: InputProps;
}
