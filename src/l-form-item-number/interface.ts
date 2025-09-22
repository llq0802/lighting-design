import type { InputNumberProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemNumberProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size' | 'variant'> {
  placeholder?: string;
  /**
   * 保留小数点后几位
   */
  precision?: number;
  /**
   * 最小值
   */
  min?: number;
  /**
   * 最大值
   */
  max?: number;
  prefix?: InputNumberProps['prefix'];
  suffix?: InputNumberProps['suffix'];
  addonAfter?: InputNumberProps['addonAfter'];
  addonBefore?: InputNumberProps['addonBefore'];
  /**
   * InputNumber 的属性
   */
  numberProps?: InputNumberProps;
}
