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
   * 根类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  className?: string;
  /**
   * 根样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  style?: CSSProperties;

  /**
   *  每一项的类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  itemClassName?: string;
  /**
   * 全部时的值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  allValue?: string;
  /**
   * 是否展示全部
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
