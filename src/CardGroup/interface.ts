import type { CardProps, SelectProps } from 'antd';
import type { CSSProperties } from 'react';

export type LValueType = string | number | (string | number)[];

export interface LCardGroupProps extends Pick<SelectProps, 'fieldNames' | 'disabled'> {
  /**
   * 受控值
   */
  value?: LValueType;
  /**
   * 默认值
   */
  defaultValue?: LValueType;
  /**
   * value 改变时触发
   */
  onChange?: (...args: any[]) => void;

  /**
   * 是否支持多选
   */
  multiple?: boolean;
  /**
   * 数据选项
   *  - cardProps 可配置单独这项卡片属性
   */
  options?: (SelectProps['options'] & { cardProps?: CardProps }[]) | Record<string, any>[];
  /**
   * 单选时再次点击是否可以取消
   */
  cancelable?: boolean;
  /**
   * 每个卡片之间的间隔
   */
  gap?: number;
  /**
   *根类名
   */
  className?: string;
  /**
   *根样式
   */
  style?: CSSProperties;
  /**
   * 统一设置每个卡片`body`的样式,  比每一项中的 cardProps.bodyStyle 优先级低
   * */
  cardBodyStyle?: CSSProperties;
  /**
   *  统一设置每个卡片的样式,  比每一项中的 cardProps.style 优先级低
   */
  cardStyle?: CSSProperties;
  /**
   *选中卡片的样式
   */
  activeStyle?: CSSProperties;
  /**
   *选中卡片body的样式
   */
  activeBodyStyle?: CSSProperties;
}
