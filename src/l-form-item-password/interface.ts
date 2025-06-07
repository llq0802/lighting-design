import type { PasswordProps } from 'antd/es/input';
import type { LFormItemProps } from 'lighting-design/l-form-item/interface';
import type { LFormProps } from 'lighting-design/l-form/interface';

export interface LFormItemPasswordProps extends LFormItemProps, Pick<LFormProps, 'disabled' | 'size' | 'variant'> {
  placeholder?: string;

  /**
   * 密码最小位数
   */
  min?: number;
  /**
   * 密码最大位数
   */
  max?: number;
  /**
   * 是否开启高强度密码验证
   */
  highPassword?: boolean;
  /**
   * 开启高强度密码验证错误后的提示
   */
  highPasswordErrorMsg?: string;
  /**
   * Input.Password 的属性
   */
  passwordProps?: PasswordProps;
  /**
   *  是否禁用粘贴
   */
  disabledPaste?: boolean;
  /**
   *  是否禁用复制
   */
  disabledCopy?: boolean;
}
