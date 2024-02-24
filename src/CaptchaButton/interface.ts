import type { ButtonProps } from 'antd';
import type { ReactNode } from 'react';
export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void } | undefined;
export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 倒计时的秒数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  second?: number;
  /**
   * 是否开始发送
   * - 不能与`actionRef`同时设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  start?: boolean;
  /**
   * 倒计时的文字, 会带上 second 秒
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  disabledText?: string;
  /**
   * 缓存的key、页面刷新后倒计时继续
   * - 多个倒计时组件请设置不同的key。
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  cacheKey: string;
  /**
   * ### 用于开始或取消倒计时 ref
   *  - 不能与`start`同时设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  actionRef?: React.MutableRefObject<LCaptchaButtonActionRef>;
  /**
   * 倒计时完成后触发
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  onEnd?: () => void;
  /** 重新渲染按钮内容 */
  render?: (currentSecond: number) => ReactNode;
}
