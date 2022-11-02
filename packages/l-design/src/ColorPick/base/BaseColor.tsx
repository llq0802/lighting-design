import classNames from 'classnames';
import React, { useMemo } from 'react';
import './styles.less';

export const prefixCls = 'lighting-design-color';

export interface ColorProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  value?: string;
  showText?: boolean;
  size?: 'small' | 'middle' | 'large';
  renderColor?: (dom: JSX.Element) => React.ReactNode;
}

const Color: React.FC<ColorProps> = ({
  className,
  value,
  size = 'middle',
  showText = false,
  renderColor,
}) => {
  const colorDom = useMemo(
    () => (
      <span className={`${prefixCls}-outer`} title={value}>
        <span className={`${prefixCls}-inner`} style={{ backgroundColor: value || 'none' }} />
      </span>
    ),
    [value],
  );

  const colorView = renderColor ? renderColor(colorDom) : colorDom;
  const textView = showText && value && <span className={`${prefixCls}-text`}>{value}</span>;

  return (
    <span className={classNames(prefixCls, `${prefixCls}-${size}`, className)}>
      {colorView}
      {textView}
    </span>
  );
};

export default Color;
