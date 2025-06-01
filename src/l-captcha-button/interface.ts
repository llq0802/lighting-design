import type { ButtonProps } from 'antd';
import type { ReactNode } from 'react';

export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void };

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 缓存的key、页面刷新后倒计时继续
   * - **多个倒计时组件请设置不同的 key**。
   */
  cacheKey: string;
  /**
   * 点击按钮是否自动启动倒计时
   */
  autoStart?: boolean;
  /**
   * 倒计时的秒数
   * @default 60s
   */
  second?: number;
  /**
   * 倒计时的文字, 会带上 second 秒
   */
  disabledText?: string;
  /**
   *  用于`开始`或`取消`倒计时的 actionRef
   */
  actionRef?: React.MutableRefObject<LCaptchaButtonActionRef | undefined>;

  /**
   * 倒计时完成后触发
   */
  onEnd?: () => void;
  /**
   *  重新渲染按钮内容
   */
  render?: (currentSecond: number) => ReactNode;
}
