import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemSwitchProps extends LFormItemProps {
  /**
   *antd Swicth的 props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  switchProps?: SwitchProps;
  /**
   *打开时的背景颜色
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  checkedBg?: string;
  /**
   *关闭时的背景颜色
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemSwitchProps
   */
  unCheckedBg?: string;
  checkedChildren?: string;
  unCheckedChildren?: string;
}
