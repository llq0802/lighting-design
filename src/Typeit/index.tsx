import type { CSSProperties, FC } from 'react';
import type { TypeItOptions } from 'typeit';
import type { TypeItProps } from 'typeit-react';
import TypeIt from 'typeit-react';

export interface LTypeitProps {
  /**
   * 样式
   * @author 李岚清 <https://github.com/llq0802>
   * @type { React.CSSProperties }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   */
  style: CSSProperties;
  /**
   * 类名
   * @author 李岚清 <https://github.com/llq0802>
   * @type { string }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   */
  className: string;
  /**
   * ReactNode
   * @author 李岚清 <https://github.com/llq0802>
   * @type { React.ReactNode }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   */
  children: React.ReactNode;
  /**
   * typeit-react 的 getBeforeInit
   * @author 李岚清 <https://github.com/llq0802>
   * @type { TypeItProps['getBeforeInit'] }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   * @see https://www.typeitjs.com/docs/vanilla/usage/#configuration-options
   */
  getBeforeInit: TypeItProps['getBeforeInit'];
  /**
   * typeit-react 的 options
   * @author 李岚清 <https://github.com/llq0802>
   * @type { TypeItProps }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   * @see https://www.typeitjs.com/docs/vanilla/usage/#configuration-options
   */
  options: TypeItOptions;
  /**
   * typeit-react 的 Props { @link}
   * @author 李岚清 <https://github.com/llq0802>
   * @type { TypeItProps }
   * @version 2.1.23
   * @see 官网 https://llq0802.github.io/lighting-design/latest LTypeitProps
   * @see https://www.typeitjs.com/docs/vanilla/usage/#configuration-options
   */
  props: TypeItProps;
}

const prefixCls = 'lightd-Typeit';

const LTypeit: FC<Partial<LTypeitProps>> = (props) => {
  const { className, style, children, getBeforeInit, ...prop } = props;
  return (
    <div className={`${prefixCls} ${className || ''}`} style={style}>
      <TypeIt {...prop} getBeforeInit={getBeforeInit}>
        {children}
      </TypeIt>
    </div>
  );
};

export default LTypeit;
