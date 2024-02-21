import type { LCardGroupProps } from 'lighting-design/CardGroup/interface';
import type { CSSProperties } from 'react';

export interface LTagGroupProps
  extends Pick<
    LCardGroupProps,
    | 'value'
    | 'defaultValue'
    | 'labelInValue'
    | 'onChange'
    | 'multiple'
    | 'options'
    | 'disabled'
    | 'cancelable'
    | 'fieldNames'
  > {
  /**
   * 容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  className?: string;
  /**
   * 容器样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  style?: CSSProperties;

  /**
   *  每一项的类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  itemClassName?: string;
  /**
   * 全选时的值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  allValue?: string;
  /**
   * 是否展示全部
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  showAllChecked?: boolean;
  /**
   * 全部文字类型
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  allCheckedText?: string;
}