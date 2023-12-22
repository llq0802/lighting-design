import classNames from 'classnames';
import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import { useMemo } from 'react';
import './styles.less';

export const prefixCls = 'lightd-color';

export interface ColorProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * 类名
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  className?: string;
  /**
   * 样式
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  style?: CSSProperties;
  /**
   * 值
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  value?: string;
  /**
   * 是否禁用
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  disabled?: boolean;
  /**
   * 是否显示颜色值文本
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  showText?: boolean;
  /**
   * 颜色组件大小
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * 重新渲染
   * @author 李岚清 <https://github.com/llq0802>
   * @version 2.1.27
   * @see 官网 https://llq0802.github.io/lighting-design/latest ColorProps
   */
  renderColor?: (dom: JSX.Element) => ReactNode;
}

const BaseColor: FC<ColorProps> = ({
  className,
  style,
  value,
  size = 'middle',
  disabled = false,
  showText = true,
  renderColor,
}) => {
  const colorDom = useMemo(
    () => (
      <span className={classNames(`${prefixCls}-outer`)} title={value}>
        <span
          className={classNames(`${prefixCls}-inner`)}
          style={{ backgroundColor: value || 'initial' }}
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

export default BaseColor;
