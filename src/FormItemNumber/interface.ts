import type { InputNumberProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { LFormItemInputProps } from 'lighting-design/FormItemInput/interface';

export interface LFormItemNumberProps
  extends LFormItemProps,
    Pick<LFormItemInputProps, 'addonAfter' | 'addonBefore' | 'prefix' | 'variant'> {
  /**
   * InputNumber的属性
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  numberProps?: InputNumberProps;
  /**
   * 保留小数点后几位
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberProps
   */
  precision?: number;
  /**
   * 最小值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberProps
   */
  min?: number;
  /**
   * 最大值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberProps
   */
  max?: number;
}
