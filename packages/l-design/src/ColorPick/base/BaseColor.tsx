import classNames from 'classnames';
import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import { useMemo } from 'react';
import './styles.less';

export const prefixCls = 'lightd-color';

export interface ColorProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  style?: CSSProperties;
  value?: string;
  disabled?: boolean;
  showText?: boolean;
  size?: 'small' | 'middle' | 'large';
  renderColor?: (dom: JSX.Element) => ReactNode;
}

const Color: FC<ColorProps> = ({
  className,
  style,
  value,
  size = 'middle',
  disabled = false,
  showText = false,
  renderColor,
}) => {
  const colorDom = useMemo(
    () => (
      <span className={classNames(`${prefixCls}-outer`)} title={value}>
        <span
          className={classNames(`${prefixCls}-inner`)}
          style={{ backgroundColor: value || 'none' }}
        />
      </span>
    ),
    [value],
  );

  const colorView = renderColor ? renderColor(colorDom) : colorDom;
  const textView = showText && value && <span className={`${prefixCls}-text`}>{value}</span>;

  return (
    <span
      className={classNames(
        prefixCls,
        `${prefixCls}-${size}`,
        { [`${prefixCls}-disabled`]: disabled },
        className,
      )}
      style={style}
    >
      {colorView}
      {textView}
    </span>
  );
};

export default Color;
