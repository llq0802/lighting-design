import type { CSSProperties, FC } from 'react';
import type { TypeItOptions } from 'typeit';
import type { TypeItProps } from 'typeit-react';
import TypeIt from 'typeit-react';
// import './index.less';

export interface LTypeitProps {
  /**
   * 样式
   */
  style: CSSProperties;
  /**
   * 类名
   */
  className: string;
  /**
   * ReactNode
   */
  children: React.ReactNode;
  getBeforeInit: TypeItProps['getBeforeInit'];
  options: TypeItOptions;
  props: TypeItProps;
}

const prefixCls = 'lightd-Typeit';

const LTypeit: FC<Partial<LTypeitProps>> = (props) => {
  const { className, style, children, getBeforeInit, ...prop } = props;
  return (
    <div className={`${prefixCls} ${className || ''}`} style={style}>
      <TypeIt
        options={{
          speed: 50,
        }}
        {...prop}
        getBeforeInit={getBeforeInit}
      >
        {children}
      </TypeIt>
    </div>
  );
};

export default LTypeit;
