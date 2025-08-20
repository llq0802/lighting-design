import type { ButtonProps } from 'antd';
import type { ReactNode } from 'react';

/**
 * 验证码按钮操作引用类型
 * 提供开始和取消倒计时的方法
 */
export type LCaptchaButtonActionRef = {
  /**
   * 开始倒计时
   */
  start: () => void;

  /**
   * 取消倒计时
   */
  cancel: () => void;
};

/**
 * 验证码按钮组件属性接口
 * 继承自 Ant Design 的 ButtonProps，但排除了 disabled 属性
 */
export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 缓存的key、页面刷新后倒计时继续
   * - **多个倒计时组件请设置不同的 key**。
   */
  cacheKey: string;

  /**
   * 点击按钮是否自动启动倒计时
   * @default false
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
   * 用于`开始`或`取消`倒计时的 actionRef
   */
  actionRef?: React.MutableRefObject<LCaptchaButtonActionRef | undefined>;

  /**
   * 倒计时完成后触发
   */
  onEnd?: () => void;

  /**
   * 重新渲染按钮内容
   * @param currentSecond 当前剩余秒数
   * @returns ReactNode 要渲染的内容
   */
  render?: (currentSecond: number) => ReactNode;
}
