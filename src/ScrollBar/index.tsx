import classnames from 'classnames';
import { createElement } from 'react';
import './index.less';
import type { LScrollBarProps } from './interface';

const prefixCls = 'lightd-scrollbar';

const LScrollBar = (props: LScrollBarProps) => {
  const {
    tag = 'div',
    height = '100%',
    maxHeight,
    className,
    style,
    mode = 'show',
    ...restProps
  } = props;

  const wrapperProps = {
    className: classnames([
      prefixCls,
      {
        [`${prefixCls}-hide`]: mode === 'hide' ? true : false,
        [`${prefixCls}-hover`]: mode === 'hover' ? true : false,
      },
      className,
    ]),
    style: { ...style, height, maxHeight },
    ...restProps,
  };

  const wrapperDom = createElement(tag, wrapperProps, props?.children);

  return wrapperDom;
};

export default LScrollBar;
export * from './interface';
