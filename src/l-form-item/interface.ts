import type { FormItemProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';

export interface LFormItemProps<T = any> extends FormItemProps<T> {
  /**
   * lable 宽度。  
    - 同 labelCol={{ flex: '90px' }}
    - 不要与 `labelCol` 同时设置
   */
  labelWidth?: number | string;

  wrapperWidth?: number | string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  /**
   * 设置 LFormItem 或 LFormItemXXX 组件的 style.bottom 属性
   */
  formItemBottom?: number | string;
  /**
   *重新渲染 LFormItem 的 children 组件
   */
  renderField?: (dom: ReactElement, props: LFormItemProps) => ReactElement | ReactNode;
  /**
   * 重新渲染整个 LFormItem 组件
   */
  renderFormItem?: (dom: ReactElement) => ReactElement;
  /**
   *  组件前面的内容
   */
  contentBefore?: ReactNode;
  /*
   * 组件后面的内容
   */
  contentAfter?: ReactNode;
  /**
   * 传给children组件的额外属性
   */
  contentProps?: Record<string, any> & { className?: string; style?: React.CSSProperties };
}
