import type { ButtonProps } from 'antd';

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * @description       倒计时秒数
   * @default           10s
   */
  second?: number;
  /**
   * @description       倒计时的文字, 会带上second秒
   * @default           重发
   */
  disabledText?: string;
  /**
   * @description       缓存的key、页面刷新后倒计时继续。
   * @default           __CaptchaButton__
   */
  cacheKey?: string;
  /**
   * @description       倒计时完成后触发
   * @default           -
   */
  onEnd?: () => void;
  /**
   * @description       倒计时完成后触发
   * @default           -
   */
}
