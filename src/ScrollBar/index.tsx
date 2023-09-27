import classnames from 'classnames';
import type { HTMLAttributes } from 'react';
import { createElement } from 'react';
import './index.less';

const prefixCls = 'lightd-scrollbar';

export type LScrollBarProps = {
  /**
   * 将组件根标签渲染为对应的 html 标签
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  tag?:
    | 'div'
    | 'ul'
    | 'li'
    | 'ol'
    | 'a'
    | 'span'
    | 'dl'
    | 'dt'
    | 'p'
    | 'main'
    | 'article'
    | 'aside'
    | 'footer'
    | 'header'
    | 'nav';
  /**
   * 滚动条的模式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  mode?: 'show' | 'hide' | 'hover';
  /**
   *  容器高度 默认100%
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  height?: string | number;
  /**
   * 容器最大高度
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  maxHeight?: string | number;
  /**
   *  容器样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  style?: React.CSSProperties;
  /**
   * 容器类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.21
   *@memberof LScrollBarProps
   */
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

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

  // return (
  //   <div
  //     className={classnames([
  //       prefixCls,
  //       {
  //         [`${prefixCls}-hide`]: mode === 'hide' ? true : false,
  //         [`${prefixCls}-hover`]: mode === 'hover' ? true : false,
  //       },
  //       className,
  //     ])}
  //     style={{ ...style, height, maxHeight }}
  //     {...restProps}
  //   >
  //     {props.children}
  //   </div>
  // );
};

export default LScrollBar;
