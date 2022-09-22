import { LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React from 'react';
import './index.less';
import type { ButtonProps } from './type.d';
// import 'antd/es/button/style';

function processChildren(children?: ReactNode) {
  const childrenList: ReactNode[] = [];
  let isPrevChildPure: boolean = false;

  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child,
  );
}

/**
 * Button
 * @param {*} { loading, children, icon, style, ...props }
 * @return {*}
 */
const LButton: FC<ButtonProps> = ({ size, type, loading, children, icon, style, ...props }) => {
  const buttonClass = classNames('l-button');

  const iconNode = loading ? <LoadingOutlined /> : icon;

  const InnerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );

  return (
    <Button className={buttonClass} style={style} type="primary">
      {InnerContent}
    </Button>
  );
};

export default LButton;
export type { ButtonProps };
