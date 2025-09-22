import type { Options } from 'ahooks/lib/useRequest/src/types';
import type { ButtonProps, FlexProps } from 'antd';
import type { InputProps } from 'antd/es/input';
import type { OTPProps } from 'antd/es/input/OTP';
import type { LCaptchaButtonProps } from 'lighting-design/l-captcha-button';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

/**
 * 验证码表单项组件的属性接口
 * 继承自 LFormItemProps，并扩展了验证码相关的属性
 */
export interface LFormItemCaptchaProps
  extends LFormItemProps,
    Pick<LFormProps, 'size' | 'disabled' | 'variant'>,
    Pick<LCaptchaButtonProps, 'cacheKey' | 'onEnd' | 'second'> {
  /**
   * 输入框占位符文本
   */
  placeholder?: string;

  /**
   * 按钮初始文本
   */
  initText?: string;

  /**
   * 验证码类型
   * - 'inline': 内联按钮
   * - 'otp': OTP输入框
   * - ButtonProps['type']: 其他按钮类型
   */
  type?: ButtonProps['type'] | 'inline' | 'otp';

  /**
   * 验证码最大长度
   */
  maxLength?: number;

  /**
   * 请求方法，用于发送验证码请求
   * @param args 任意参数
   * @returns Promise 返回请求结果
   */
  request?: (...args: any[]) => Promise<any>;

  /**
   * 请求成功后是否自动聚焦到输入框
   */
  requestAutoFocus?: boolean;

  /**
   * ahooks 的 useRequest 的配置项
   * @see https://ahooks.js.org/zh-CN/hooks/use-request/basic
   */
  requestOptions?: Options<any, any>;

  /**
   * 验证码按钮的额外属性
   */
  captchaButtonProps?: Partial<LCaptchaButtonProps>;

  /**
   * 输入框的额外属性，可以是普通输入框或OTP输入框的属性
   */
  inputProps?: InputProps | OTPProps;

  /**
   * 包裹容器的属性
   */
  wrapperProps?: FlexProps;
}
