import type { PasswordProps } from 'antd/es/input';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemPasswordProps extends LFormItemProps {
  /**
   * 密码最小位数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  min?: number;
  /**
   * 密码最大位数
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  max?: number;
  /**
   * 是否开启高强度密码验证
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  highPassWord?: boolean;
  /**
   * 开启高强度密码验证错误后的提示
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  highPassWordErrorMsg?: string;
  /**
   * 是否禁用空格输入
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  disabledWhiteSpace?: boolean;
  /**
   * Input.Password 的属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   *@see https://ant.design/components/input-cn/#Input.Password
   */
  passwordProps?: PasswordProps;
  /**
   *  是否禁用粘贴
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  disabledPaste?: boolean;
  /**
   *  是否禁用复制
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemPasswordProps
   */
  disabledCopy?: boolean;
  variant?: PasswordProps['variant'];
}
