import type { FormItemProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';

export interface LFormItemProps<T = any> extends FormItemProps<T> {
  /**
   * lable 宽度。
   * - 如果 labelCol 存在，则 labelWidth 不生效
   */
  labelWidth?: number | string;
  /**
   * children 组件外层宽度。
   * - 如果 wrapperCol 存在，则 wrapperWidth 不生效
   */
  wrapperWidth?: number | string;
  /**
   * children 组件与 label 的对齐方式。
   */
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  /**
   * 设置 LFormItem 或 LFormItemXXX 组件的 style.bottom 属性
   */
  formItemBottom?: number | string;
  /**
   *重新渲染 LFormItem 的 children 组件
   */
  renderField?: (dom: ReactElement, props: LFormItemProps<T>) => ReactNode;
  /**
   * 重新渲染整个 LFormItem 组件
   */
  renderFormItem?: (dom: ReactElement) => ReactNode;
  /**
   * children 组件前面的内容
   */
  contentBefore?: ReactNode;
  /**
   * children 组件后面的内容
   */
  contentAfter?: ReactNode;
  /**
   * 当配置了 contentBefore 或 contentAfter时, 传给 children 组件的外层 div 的额外属性
   */
  contentWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}
