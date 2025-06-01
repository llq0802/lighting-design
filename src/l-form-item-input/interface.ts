import type { InputProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemInputProps extends LFormItemProps {
  /**
   *输入框类型对antd输入框扩展了一些类型
   * - 'bankCard' | 'idCard' | 'phone' | 'url' | 'email' | 'chinese'类型的输入框会自动校验输入的值 , required只充当是否展示必填的(*)星号
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  type?: InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';
  /**
   *  是否禁止输入空格
   * - 在 mac 笔记本上使用原生输入法时不建议设置
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  disabledWhiteSpace?: boolean;
  /**
   * antd.Input 的其他属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  inputProps?: InputProps;
  variant?: InputProps['variant'];
  prefix?: InputProps['prefix'];
  suffix?: InputProps['suffix'];
  addonAfter?: InputProps['addonAfter'];
  addonBefore?: InputProps['addonBefore'];
  maxLength?: InputProps['maxLength'];
}
