import type { SwitchProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';

export interface LFormItemSwitchProps extends LFormItemProps {
  /**
   *antd Swicth的 props
   */
  switchProps?: SwitchProps;
  /**
   *选中的值
   */
  checkedValue?: string;
  /**
   *未选中的值
   */
  uncheckedValue?: string;
  /**
   *打开时的背景颜色
   */
  checkedBg?: string;
  /**
   *关闭时的背景颜色
   */
  unCheckedBg?: string;
  checkedChildren?: string;
  unCheckedChildren?: string;
  size?: SwitchProps['size'];
  disabled?: SwitchProps['disabled'];
}
