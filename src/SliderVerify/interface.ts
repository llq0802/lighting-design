interface SliderVerifyProps {
  /** 初始验证结果值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  defaultValue?: boolean;
  /**
   * 受控值
   * @see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  value?: boolean | number;
  /**
   *  改变值的回调(受控)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  onChange?: (bool: boolean) => void;
  /**
   * 拖动完成鼠标抬起后的回调
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  onMouseUp?: (num: number) => void;
  /**
   * 拖动过程时的回调
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  onProcess?: (num: number) => void;
  /**
   * 验证成功的回调
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  onSuccess?: () => void;
  /**
   * 组件宽度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  width?: number;
  /**
   * 组件高度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  height?: number;
  /**
   * 初始背景颜色
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  bgColor?: string;
  /**
   *  提示的文字
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  tips?: React.ReactNode;
  /**
   *  滑块外层div的宽度
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  barWidth?: number;
  /**
   * 初始滑块内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  bar?: React.ReactNode;
  /**
   * 成功后滑块内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  successBar?: React.ReactNode;
  /**
   *  成功后的背景颜色
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  successBgColor?: string;
  /**
   * 成功后提示的文字
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  successTips?: React.ReactNode;
  /**
   * 成功后是否还显示bar
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  successShowBar?: boolean;
  /**
   *  成功后文字提示div的样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  successTipsStyle?: React.CSSProperties;
  /**
   *  距离最右边还剩多少就算成功
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  difference?: number;
  /**
   * 滑块的样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  barStyle?: React.CSSProperties;
  /**
   *  文字提示div的样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  tipsStyle?: React.CSSProperties;
  /**
   *  组件容器样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  style?: React.CSSProperties;
  /**
   *  组件容器类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  className?: string;
}

export type LSliderVerifyInstance =
  | {
      /** 重置组件到初始状态的方法 */
      reset: () => void;
      /** 验证结果 */
      value: boolean;
    }
  | undefined;

export interface LSliderVerifyProps extends SliderVerifyProps {
  /**
   *  滑块实例 (包含有重置方法和值)
   *@see 官网 https://llq0802.github.io/lighting-design/latest LSliderVerifyProps
   */
  actionRef?: React.MutableRefObject<LSliderVerifyInstance>;
}
