import { forwardRef, type ReactNode } from 'react';
// import styles from './index.module.less';
import classnames from 'classnames';
import './index.less';

export interface LH5PreviewProps {
  /**
   *手机壳颜色
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.16
   *@memberof LH5PreviewProps
   */
  deviceColor?: 'gold' | 'gray' | 'white';
  /**
   *手机缩放大小
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.16
   *@memberof LH5PreviewProps
   */
  scale?: number | string;
  /**
   *组件根标签类名
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.16
   *@memberof LH5PreviewProps
   */
  className?: string;
  /**
   *组件根标签样式
   *@author 李岚清 <https://github.com/llq0802>
   *@version 2.1.16
   *@memberof LH5PreviewProps
   */
  style?: React.CSSProperties;
  children: ReactNode;
}
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
  style = {},
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

const Device = forwardRef((props: LH5PreviewProps, ref: any) => (
  <LH5Preview {...props} outRef={ref} />
));
export default Device;
