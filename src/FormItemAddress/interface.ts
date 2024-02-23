import type { CascaderProps, ColProps, InputProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemAddressProps extends Omit<LFormItemProps, 'name'> {
  variant?: CascaderProps['variant'];

  /**
   *数据源
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  options?: CascaderProps['options'];
  /**
   * 字段数组 如 ['location', 'address']
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  names: [LFormItemProps['name'], LFormItemProps['name']];
  /**
   * Input组件的props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  inputProps?: InputProps;
  /**
   * Cascader组件的props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  cascaderProps?: CascaderProps;
  /**
   * 输入框外层Form.Item的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  inputFormProps?: LFormItemProps;
  /**
   *  级联组件外层Form.Itme的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  cascaderFormProps?: LFormItemProps;
  /**
   *  输入框外层Col 组件的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  inputColProps?: ColProps;
  /**
   *  级联组件外层Col 组件的 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  cascaderColProps?: ColProps;
}
