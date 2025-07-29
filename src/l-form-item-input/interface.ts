import type { InputProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemInputProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size' | 'variant'> {
  placeholder?: string;
  /**
   * 检验限制最小长度
   * */
  min?: number;
  /**
   * 检验限制最大长度
   */
  max?: number;
  /**
   * 输入框类型对 antd 输入框扩展了一些类型
   * - 'bankCard' | 'idCard' | 'phone' | 'url' | 'email' | 'chinese'类型的输入框会自动校验输入的值
   */
  type?: InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';
  showCount?: InputProps['showCount'];
  prefix?: InputProps['prefix'];
  suffix?: InputProps['suffix'];
  addonAfter?: InputProps['addonAfter'];
  addonBefore?: InputProps['addonBefore'];
  maxLength?: InputProps['maxLength'];
  /**
   * antd.Input 的其他属性
   */
  inputProps?: InputProps;
}
