import type { CardProps, SelectProps } from 'antd';
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
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  value?: ValueType;
  /**
   * 默认值
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  defaultValue?: ValueType;
  /**
   * value 改变时触发
   *@see 官网 https://llq0802.github.io/lighting-design/latest LTagGroupProps
   */
  onChange?: (values: ValueType) => void;
  /**
   *是否把每个选项的 label 包装到 value 中，会把  value 类型从 string 变为 { value: string, label: ReactNode } 的格式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  labelInValue?: boolean;
  /**
   * 是否支持多选
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  multiple?: boolean;
  /**
   * 数据选项
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  options?: (SelectProps['options'] & { cardProps?: CardProps }[]) | Record<string, any>[];

  /**
   * 单选时再次点击是否可以取消
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cancelable?: boolean;
  /**
   * 每个卡片之间的间隔
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  gap?: number;
  /**
   *根类名
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  className?: string;
  /**
   *根样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  style?: CSSProperties;
  /**
   * 统一设置每个卡片`body`的样式,  比每一项中的 cardProps.bodyStyle 优先级高
   *@version 2.1.29
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   * */
  cardBodyStyle?: CSSProperties;
  /**
   *  统一设置每个卡片的样式,  比每一项中的cardProps.style优先级高
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  cardStyle?: CSSProperties;
  /**
   *选中卡片的样式
   *@see 官网 https://llq0802.github.io/lighting-design/latest LCardGroupProps
   */
  activeStyle?: CSSProperties;
}
