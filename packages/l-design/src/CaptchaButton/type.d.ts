export interface CaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * @description       倒计时秒数
   * @default           10
   */
  second: number;
  /**
   * @description       倒计时的文字,会带上second秒
   * @default           重新获取
   */
  disabledText: string;
  /**
   * @description       缓存的key、页面刷新后倒计时继续。
   * @default           __CaptchaButton__
   */
  cacheKey: string;
  /**
   * @description       倒计时完成时触发
   * @default           -
   */
  onEnd: () => void;
}
