import type { InputProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemInputProps extends LFormItemProps {
  /**
   *输入框类型对antd输入框扩展了一些类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   */
  type?: InputProps['type'] | 'bankCard' | 'idCard' | 'phone' | 'email' | 'url' | 'chinese ';
  /**
   * - 是否禁止输入空格
   * - 在 mac 笔记本上使用原生输入法时不建议设置
   *@author 李岚清 <https://github.com/llq0802>
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@version 2.1.29
   */
  disabledWhiteSpace?: boolean;
  /**
   * antd.Input 的其他属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemInputProps
   *@see https://ant.design/components/input-cn/#api
   */
  inputProps?: InputProps;
}
