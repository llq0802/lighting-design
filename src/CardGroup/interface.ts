import type { SelectProps } from 'antd';
import type { CSSProperties } from 'react';

export type ValueType =
  | string
  | number
  | (string | number)[]
  | string[]
  | number[]
  | null
  | undefined;

export interface LCardGroupProps extends Pick<SelectProps, 'fieldNames' | 'disabled'> {
  /**
   * 受控值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  value?: ValueType;
  /**
   * 默认值
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  defaultValue?: ValueType;
  /**
   * 值改变时出发
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  onChange?: (values: ValueType) => void;

  /**
   *是否把每个选项的 label 包装到 value 中，会把  value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  labelInValue?: boolean;
  /**
   * 是否支持多选
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  multiple?: boolean;
  /**
   * 数据选项
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  options?: SelectProps['options'] | Record<string, any>[];

  /**
   * 再次点击是否可以取消
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cancelable?: boolean;
  /**
   * 卡片之间的间隔
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  gap?: number;
  /**
   *类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  className?: string;
  /**
   *样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  style?: CSSProperties;
  /**
   * 卡片的样式  比每一项中的 cardProps.bodyStyle 优先级高
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   * */
  cardBodyStyle?: CSSProperties;
  /**
   * 卡片的样式  比每一项中的cardProps.style优先级高
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cardStyle?: CSSProperties;
  /**
   * 选中卡片的样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  activeStyle?: CSSProperties;
}
