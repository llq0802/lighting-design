import type { SelectProps, TagProps } from 'antd';
import type { LCardGroupProps } from 'lighting-design/CardGroup/interface';

export interface LTagGroupProps
  extends Pick<
    LCardGroupProps,
    | 'value'
    | 'defaultValue'
    | 'labelInValue'
    | 'onChange'
    | 'multiple'
    | 'disabled'
    | 'cancelable'
    | 'fieldNames'
    | 'className'
    | 'style'
  > {
  options?: (SelectProps['options'] & { tagProps?: TagProps }[]) | Record<string, any>[];
  /**
   *  每一项标签的类名
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
