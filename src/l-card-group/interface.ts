import type { CardProps, SelectProps } from 'antd';
import type { LValueType } from 'lighting-design/interface';
import type { CSSProperties } from 'react';

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
   * 是否多选
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
   * 统一设置每个卡片`body`的样式,  比每一项中的 cardProps 优先级低
   * */
  cardBodyStyle?: (state: {
    isActive: boolean;
    isDisabled: boolean;
    item: Record<string, any>;
  }) => (CSSProperties & Record<string, any>) | undefined;
  /**
   *  统一设置每个卡片的样式,  比每一项中的 cardProps 优先级低
   */
  cardStyle?: (state: {
    isActive: boolean;
    isDisabled: boolean;
    item: Record<string, any>;
  }) => (CSSProperties & Record<string, any>) | undefined;
  cardClassName?: (state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => string | undefined;
  /**
   * 完全自定义渲染 item
   * - 不会被 Card 包裹
   */
  renderItem?: (
    item: Record<string, any>,
    state: { isActive: boolean; isDisabled: boolean; onClick: () => void },
    index: number,
  ) => React.ReactNode;
}
