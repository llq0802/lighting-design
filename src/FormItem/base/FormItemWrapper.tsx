import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';
import { composeProps } from '../../_utils';
import './styles.less';

const prefixCls = 'lightd-form-item-wrapper';

export interface FormItemWrapperProps extends Record<string, any> {
  before?: ReactNode;
  after?: ReactNode;
  className?: string;
  contentInline?: boolean;
}

const FormItemWrapper: FC<FormItemWrapperProps> = ({
  className,
  alignItems = null,
  after = null,
  before = null,
  contentInline = false,
  children,
  ...formItemChildrenProps // {value,onChange,...}
}) => {
  // 合并子组件组件的props并触发相应事件函数
  const childrenView = isValidElement(children)
    ? cloneElement(
        children,
        composeProps(
          (children?.props as Record<string, any>) || {},
          formItemChildrenProps,
          true,
        ),
      )
    : (children as any);

  // 没有前后内容
  if (!after && !before) {
    return childrenView === void 0 ? null : childrenView;
  } else {
    const beforeView = before && (
      <div className={`${prefixCls}-before`}>{before}</div>
    );
    const afterView = after && (
      <div className={`${prefixCls}-after`}>{after}</div>
    );
    const contentView = (
      <div
        className={`${prefixCls}-content`}
        style={contentInline ? { flex: 'initial' } : {}}
      >
        {childrenView}
      </div>
    );

    const wrapperStyle = alignItems
      ? {
          alignItems:
            alignItems === 'center' ? alignItems : `flex-${alignItems}`,
        }
      : {};

    return (
      <div className={classNames(prefixCls, className)} style={wrapperStyle}>
        {beforeView}
        {contentView}
        {afterView}
      </div>
    );
  }
};

export default FormItemWrapper;
