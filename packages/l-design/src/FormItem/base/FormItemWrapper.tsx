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
}

const WrapperFormElement: FC<FormItemWrapperProps> = ({
  className,
  trigger = 'onChange',
  alignItems = null,
  after = null,
  before = null,
  children,
  ...contentProps // {value,onChange,...}
}) => {
  // console.log('WrapperFormElement-children.props ', children?.props);
  // console.log('WrapperFormElement-contentProps ', contentProps);

  // 调用父组件的trigger事件 (一般是onChange事件或onInput事件)
  const handleTrigger = useCallback(
    (...args: any[]) => {
      if (isValidElement(children)) {
        // 如果组件本身传入的props中有onChange
        children?.props?.[trigger]?.(...args);
      }
      // 调用form组件传的onChange
      contentProps?.[trigger]?.(...args);
    },
    [children, contentProps, trigger],
  );
  // 优化缓存事件
  const triggerProp = useMemo(
    () => (trigger ? { [trigger]: handleTrigger } : {}),
    [handleTrigger, trigger],
  );

  // 判断是不是dom元素比如(Input)
  const childrenView = isValidElement(children)
    ? cloneElement(children as ReactElement<any, string | JSXElementConstructor<any>>, {
        ...contentProps, // 注册form其他属性或事件
        ...triggerProp, // 默认调用onChange事件(包括组件本身的onchange和form组件的onchange)
        style: { flex: 1, ...contentProps?.style },
      })
    : (children as any);

  // 没有前后内容
  if (!after && !before) {
    return childrenView === void 0 ? null : childrenView;
  } else {
    const beforeView = before && <div className={`${prefixCls}-before`}>{before}</div>;
    const afterView = after && <div className={`${prefixCls}-after`}>{after}</div>;
    return (
      <div className={classNames(prefixCls, className)} style={alignItems ? { alignItems } : {}}>
        {beforeView}
        {childrenView}
        {afterView}
      </div>
    );
  }
};

export default WrapperFormElement;
