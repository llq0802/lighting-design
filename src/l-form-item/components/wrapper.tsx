import type { FC, ReactNode } from 'react';
import { cloneElement, isValidElement } from 'react';
import { composeProps } from '../../utils';
import { useStyles } from '../styles';

export interface FormItemWrapperProps extends Record<string, any> {
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // 以下属性是 Form.Item 的传给起 children 组件的属性
  value?: any;
  onChange?: (...args: any[]) => void;
  id?: string;
}

const Wrapper: FC<FormItemWrapperProps> = ({
  className,
  style,
  contentBefore = null,
  contentAfter = null,
  children,
  ...formItemProps // {id,value,onChange,...}
}) => {
  const { styles, cx } = useStyles();
  const innerChildrenProps = { ...(children?.props ?? {}) }; // <Child value={value} onChange={onChange} .../>
  const allProps = composeProps(innerChildrenProps, formItemProps, true);
  // 合并子组件组件的props并触发相应事件函数
  const childrenContent = isValidElement(children) ? cloneElement(children, allProps) : (children as any);
  // 没有前后内容
  if (!contentBefore && !contentAfter) {
    return childrenContent;
  }

  return (
    <div className={cx(styles.container, className)} style={style}>
      {contentBefore}
      {childrenContent}
      {contentAfter}
    </div>
  );
};

export default Wrapper;
