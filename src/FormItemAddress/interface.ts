import type { CascaderProps, InputProps, SelectProps } from 'antd';
import type { InputNumberProps } from 'antd/lib';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export interface LFormItemAddressProps extends LFormItemProps {
  block?: boolean;
  placeholder?: [string, string];
  variant?: CascaderProps['variant'];
  /**
   *左侧组件的数据源
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  options?: CascaderProps['options'] | SelectProps['options'];
  /**
   * 左侧组件的宽度
   * - 右侧组件不用配置, 会根据左侧组件的自动占满剩余空间
   */
  leftWidth?: number | string;
  /**
   * - `leftProps.isSelect` 为`true`时，`Select`组件的`props`
   * - `leftProps.isSelect` 为`false`时，`Cascader`组件的`props`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  leftProps?:
    | (CascaderProps & {
        isSelect: boolean;
      })
    | (SelectProps & {
        isSelect: boolean;
      });
  /**
   * - `rightProps.isInputNumber` 为`true`时，`Input`组件的`props`
   * - `rightProps.isInputNumber` 为`false`时，`InputNumber`组件的`props`
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAddressProps
   */
  rightProps?:
    | (InputProps & {
        isInputNumber: boolean;
      })
    | (InputNumberProps & {
        isInputNumber: boolean;
      });
}
