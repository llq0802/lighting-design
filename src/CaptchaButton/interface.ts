import type { ButtonProps } from 'antd';

export type LCaptchaButtonActionRef = { start: () => void; cancel: () => void } | undefined;

export interface LCaptchaButtonProps extends Omit<ButtonProps, 'disabled'> {
  /**
   * 倒计时的秒数
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  second?: number;
  /**
   *@author 李岚清 <https://github.com/llq0802>
   *@description 是否开始发送
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  start?: boolean;
  /**
   * 倒计时的文字, 会带上 second 秒
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  disabledText?: string;
  /**
   * 缓存的key、页面刷新后倒计时继续 , 多个倒计时组件请设置不同的key。
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  cacheKey: string;
  /**
   * 用于开始或取消倒计时
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   */
  actionRef?: React.MutableRefObject<LCaptchaButtonActionRef>;
  /**
   *@author 李岚清 <958614130@qq.com>
   *@description 倒计时完成后触发
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCaptchaButtonProps
   *@see https://ant.design/components/button-cn/
   */
  onEnd?: () => void;
  /**
   *{@link  https://ant.design/components/button-cn/}
   */
}
