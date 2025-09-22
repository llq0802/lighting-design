import type { PasswordProps } from 'antd/es/input';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemPasswordProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size' | 'variant'> {
  placeholder?: string;
  prefix?: PasswordProps['prefix'];
  suffix?: PasswordProps['suffix'];
  addonAfter?: PasswordProps['addonAfter'];
  addonBefore?: PasswordProps['addonBefore'];
  /**
   * 密码最小位数
   */
  min?: number;
  /**
   * 密码最大位数
   */
  max?: number;
  /**
   * 是否开启严格检验
   * - 开启后，密码必须包含大小写字母、数字、特殊字符, 且长度在 min 和 max 之间
   */
  strictValidator?: boolean;
  /**
   * 严格检查的错误提示
   */
  strictValidatorMessage?: string;
  /**
   *  是否禁用粘贴
   */
  disabledPaste?: boolean;
  /**
   *  是否禁用复制
   */
  disabledCopy?: boolean;
  /**
   * Input.Password 的属性
   */
  passwordProps?: PasswordProps;
}
