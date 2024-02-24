import classnames from 'classnames';
import { emptyObject } from 'lighting-design/constants';
import type { LH5PreviewProps } from './interface';

const prefixCls = 'ligthd-h5-preview';

const Iphone14Pro = ({
  outRef,
  className,
  style = emptyObject,
  scale = 1,
  children,
}: Omit<LH5PreviewProps, 'deviceColor'>) => {
  const innerClassName = classnames(prefixCls, `${prefixCls}-iphone-14-pro`, className);

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
        <div className={`${prefixCls}-frame-content`}>{children}</div>
      </div>
      <div className={`${prefixCls}-stripe`}></div>
      <div className={`${prefixCls}-header`}></div>
      <div className={`${prefixCls}-sensors`}></div>
      <div className={`${prefixCls}-btns`}></div>
      <div className={`${prefixCls}-power`}></div>
      <div className={`${prefixCls}-home`}></div>
    </div>
  );
};

export default Iphone14Pro;
