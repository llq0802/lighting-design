import type { ButtonProps } from 'antd';
import type { ReactNode } from 'react';
export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void };
export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 倒计时的秒数
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  second?: number;
  /**
   * 是否开始发送
   * - 不能与`actionRef`同时设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  start?: boolean;
  /**
   * 倒计时的文字, 会带上 second 秒
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  disabledText?: string;
  /**
   * 缓存的key、页面刷新后倒计时继续
   * - 多个倒计时组件请设置不同的key。
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  cacheKey: string;
  /**
   * #### 用于`开始`或`取消`倒计时的 actionRef
   *  - 不能与`start`同时设置
   *  - `start`将无效
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  actionRef?: React.MutableRefObject<LCaptchaButtonActionRef | undefined>;
  /**
   * 倒计时完成后触发
   *@see 官网 https://llq0802.github.io/lighting-design/latest
   */
  onEnd?: () => void;
  /** 重新渲染按钮内容 */
  render?: (currentSecond: number) => ReactNode;
}
