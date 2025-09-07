import type { SelectProps, TagProps } from 'antd';
import type { LCardGroupProps } from 'lighting-design/l-card-group/interface';
import type { CSSProperties } from 'react';

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
  tagStyle?: (state: {
    isActive: boolean;
    isDisabled: boolean;
    item: Record<string, any>;
  }) => (CSSProperties & Record<string, any>) | undefined;
  tagClassName?: (state: { isActive: boolean; isDisabled: boolean; item: Record<string, any> }) => string | undefined;
  /**
   * 完全自定义渲染 item
   */
  renderItem?: (
    item: Record<string, any>,
    state: { isActive: boolean; isDisabled: boolean; onClick: () => void },
    index: number,
  ) => React.ReactNode;
}
