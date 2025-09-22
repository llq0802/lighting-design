interface SliderVerifyProps {
  /** 初始验证结果值
   */
  defaultValue?: boolean;
  /**
   * 受控值
   */
  value?: boolean | number;
  /**
   *  改变值的回调(受控)
   */
  onChange?: (bool: boolean) => void;
  /**
   * 拖动完成鼠标抬起后的回调
   */
  onMouseUp?: (num: number) => void;
  /**
   * 拖动过程时的回调
   */
  onProcess?: (num: number) => void;
  /**
   * 验证成功的回调
   */
  onSuccess?: () => void;
  /**
   * 组件宽度
   */
  width?: number;
  /**
   * 组件高度
   */
  height?: number;
  /**
   * 初始背景颜色
   */
  bgColor?: string;
  /**
   *  提示的文字
   */
  tips?: React.ReactNode;
  /**
   *  滑块外层div的宽度
   */
  barWidth?: number;
  /**
   * 初始滑块内容
   */
  bar?: React.ReactNode;
  /**
   * 成功后滑块内容
   */
  successBar?: React.ReactNode;
  /**
   *  成功后的背景颜色
   */
  successBgColor?: string;
  /**
   * 成功后提示的文字
   */
  successTips?: React.ReactNode;
  /**
   * 成功后是否还显示bar
   */
  successShowBar?: boolean;
  /**
   *  成功后文字提示div的样式
   */
  successTipsStyle?: React.CSSProperties;
  /**
   *  距离最右边还剩多少就算成功
   */
  difference?: number;
  /**
   * 滑块的样式
   */
  barStyle?: React.CSSProperties;
  /**
   *  文字提示div的样式
   */
  tipsStyle?: React.CSSProperties;
  /**
   *  组件容器样式
   */
  style?: React.CSSProperties;
  /**
   *  组件容器类名
   */
  className?: string;
}

export type LSliderVerifyActionRef = {
  /** 重置组件到初始状态的方法 */
  reset: () => void;
  /** 验证结果 */
  value: boolean;
};

export interface LSliderVerifyProps extends SliderVerifyProps {
  /**
   *  滑块实例 (包含有重置方法和值)
   */
  actionRef?: React.MutableRefObject<LSliderVerifyActionRef | undefined>;
}
