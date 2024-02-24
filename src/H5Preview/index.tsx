import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import { forwardRef } from 'react';
import Iphone14Pro from './Iphone14Pro';
import './index.less';
import type { LH5PreviewProps } from './interface';

const prefixCls = 'ligthd-h5-preview';

enum ColorEnum {
  gray = `${prefixCls}-spacegray`,
  gold = `${prefixCls}-gold`,
  white = '',
}

const LH5Preview = ({
  outRef,
  deviceColor = 'white',
  scale = 1,
  className,
  style = emptyObject,
  children,
}: LH5PreviewProps) => {
  const innerClassName = classnames(
    prefixCls,
    `${prefixCls}-iphone-8`,
    ColorEnum[deviceColor],
    className,
  );

  return (
    <div
      ref={outRef}
      className={innerClassName}
      style={{
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      <div className={`${prefixCls}-frame`}>
        <div className={`${prefixCls}-screen`}>{children}</div>
      </div>
      <div className={`${prefixCls}-stripe`} />
      <div className={`${prefixCls}-header`} />
      <div className={`${prefixCls}-sensors`} />
      <div className={`${prefixCls}-btns`} />
      <div className={`${prefixCls}-power`} />
      <div className={`${prefixCls}-home`} />
    </div>
  );
};

export default forwardRef(
  ({ type = 'iPhone6', deviceColor, ...props }: LH5PreviewProps, ref: any) => {
    if (type === 'iPhone6') {
      return <LH5Preview deviceColor={deviceColor} {...props} outRef={ref} />;
    }
    return <Iphone14Pro {...props} outRef={ref} />;
  },
);
export * from './interface';
