import classNames from 'classnames';
import type { FC, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useCallback, useMemo } from 'react';
import './styles.less';

const prefixCls = 'lightd-form-item-wrapper';

export interface FormItemWrapperProps extends Record<string, any> {
  before?: ReactNode;
  after?: ReactNode;
  trigger?: string;
  className?: string;
  contentInline?: boolean;
}

const FormItemWrapper: FC<FormItemWrapperProps> = ({
  className,
  trigger = 'onChange',
  alignItems = null,
  contentInline = false,
  after = null,
  before = null,
  children,
  ...formItemChildrenProps // {value,onChange,...}
}) => {
  // console.log('FormItemWrapper-children.props ', children?.props);
  // console.log('FormItemWrapper-formItemChildrenProps ', formItemChildrenProps);

  // 调用父组件的trigger事件 (一般是onChange事件或onInput事件)
  const handleTrigger = useCallback(
    (...args: any[]) => {
      if (isValidElement(children)) {
        // 如果组件本身传入的props中有onChange
        children?.props?.[trigger]?.(...args);
      }
      // 调用form组件传的onChange
      formItemChildrenProps?.[trigger]?.(...args);
    },
    [children, formItemChildrenProps, trigger],
  );
  // 优化缓存事件(默认onchange事件)
  const triggerProp = useMemo(
    () => (trigger ? { [trigger]: handleTrigger } : {}),
    [handleTrigger, trigger],
  );

  // 判断是不是dom元素比如(Input)
  const childrenView = isValidElement(children)
    ? cloneElement(children as ReactElement<any, string | JSXElementConstructor<any>>, {
        ...formItemChildrenProps, // 注册form其他属性或事件
        ...triggerProp, // 默认调用onChange事件(包括组件本身的onchange和form组件的onchange)
      })
    : (children as any);

  // 没有前后内容
  if (!after && !before) {
    return childrenView === void 0 ? null : childrenView;
  } else {
    const beforeView = before && <div className={`${prefixCls}-before`}>{before}</div>;
    const afterView = after && <div className={`${prefixCls}-after`}>{after}</div>;
    const contentView = (
      <div className={`${prefixCls}-content`} style={contentInline ? { flex: 'initial' } : {}}>
        {childrenView}
      </div>
    );
    return (
      <div className={classNames(prefixCls, className)} style={alignItems ? { alignItems } : {}}>
        {beforeView}
        {contentView}
        {afterView}
      </div>
    );
  }
};

export default FormItemWrapper;
