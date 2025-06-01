import type { AutoCompleteProps } from 'antd';
import type { LFormItemProps } from 'lighting-design/FormItem/interface';
import type { ReactElement } from 'react';

export type LFormItemAutoCompleteProps = {
  /**
   * 自定义输入框
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  inputRender?: () => ReactElement;
  variant?: AutoCompleteProps['variant'];
  /**
   * 被选中时调用，参数为选中项的 value 值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  onSelect?: AutoCompleteProps['onSelect'];
  /**
   * 搜索补全项的时候调用
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  onSearch?: AutoCompleteProps['onSearch'];
  /**
   * AutoComplete 的 onFocus
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */

  onFocus?: AutoCompleteProps['onFocus'];
  /**
   * AutoComplete 的 onBlur
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  onBlur?: AutoCompleteProps['onBlur'];
  /**
   * 数据化配置选项内容
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  options?: AutoCompleteProps['options'];
  /**
   * antd自动补全组件 Props
   *@see 官网 https://llq0802.github.io/lighting-design/latest LFormItemAutoCompleteProps
   */
  autoCompleteProps?: AutoCompleteProps;
} & LFormItemProps;
