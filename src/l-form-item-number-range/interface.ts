import type { InputNumberProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export type LFormItemNumberRangeProps = {
  placeholder?: [string, string];
  /**
   * 中间连接符号
   */
  separator?: string;
  /**
   * 中间连接符号的宽度
   */
  separatorWidth?: number | string;
  /**
   * 中间元素的样式
   */
  separatorStyle?: React.CSSProperties;

  /**
   * 左边 InputNumber 的属性
   */
  leftNumberProps?: InputNumberProps;

  /**
   * 右边 InputNumber 的属性
   */
  rightNumberProps?: InputNumberProps;
} & LFormItemProps &
  Pick<LFormProps, 'size' | 'disabled' | 'variant'>;
