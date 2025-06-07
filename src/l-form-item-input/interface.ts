import type { InputProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemInputProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size'> {
  placeholder?: string;

  /**
   * 输入框类型对antd输入框扩展了一些类型
   * - 'bankCard' | 'idCard' | 'phone' | 'url' | 'email' | 'chinese'类型的输入框会自动校验输入的值 , required只充当是否展示必填的(*)星号
   */
  type?: InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';
  showCount?: InputProps['showCount'];
  variant?: InputProps['variant'];
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
