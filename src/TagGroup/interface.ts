import type { SelectProps } from 'antd';
import type { ValueType } from 'lighting-design/CardGroup/interface';
import type { CSSProperties } from 'react';

export interface LTagGroupProps {
  /**
   *是否把每个选项的 label 包装到 value 中，会把  value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  labelInValue?: boolean;
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
   * 是否多选
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  multiple?: boolean;
  /**
   * 选项数据
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  options?: SelectProps['options'] | Record<string, any>[];
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
  /**
   *  是否禁用
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  disabled?: boolean;
  /**
   * 是否可以取消选中
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  cancelable?: boolean;
}
