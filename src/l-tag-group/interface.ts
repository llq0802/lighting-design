import type { SelectProps, TagProps } from 'antd';
import type { LCardGroupProps } from 'lighting-design/l-card-group/interface';

export interface LTagGroupProps
  extends Pick<
    LCardGroupProps,
    | 'value'
    | 'defaultValue'
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
  itemStyle?: React.CSSProperties;
  /**
   *  选中每一项标签的类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  activeItemStyle?: React.CSSProperties;
}
