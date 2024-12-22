import type { InputNumberProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';

export type LFormItemNumberRangeProps = {
  /**
   * 中间连接符号
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberRangeProps
   */
  separator?: string;
  /**
   * 中间连接符号的宽度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberRangeProps
   */
  separatorWidth?: number | string;
  /**
   * 中间元素的样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberRangeProps
   */
  separatorStyle?: React.CSSProperties;

  /**
   * 左边 InputNumber 的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberRangeProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  leftNumberProps?: InputNumberProps;

  /**
   * 右边 InputNumber 的属性
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemNumberRangeProps
   *@see https://ant.design/components/input-number-cn/#api
   */
  rightNumberProps?: InputNumberProps;
  variant?: InputNumberProps['variant'];
} & LFormItemProps;
