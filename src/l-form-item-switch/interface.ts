import type { SwitchProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';

export interface LFormItemSwitchProps extends LFormItemProps {
  /**
   *antd Swicth的 props
   */
  switchProps?: SwitchProps;
  /**
   * 选中的值 默认 true
   * - 不能与  `unCheckedValue` 一样
   */
  checkedValue?: string | number | boolean;
  /**
   * 未选中的值 默认 false
   * - 不能与  `checkedValue` 一样
   */
  unCheckedValue?: string | number | boolean;
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
