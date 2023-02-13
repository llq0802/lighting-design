/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import type { CSSProperties, FC } from 'react';
import Loading1 from './component/spin-loading1';
import Loading2 from './component/spin-loading2';
import Loading3 from './component/spin-loading3';
import Loading4 from './component/spin-loading4';
import Loading5 from './component/spin-loading5';
import Loading6 from './component/spin-loading6';
import './index.less';

export interface LSpinProps {
  /**
   * 图标类型
   */
  mode: 'load1' | 'load2' | 'load3' | 'load4' | 'load5' | 'load6' | string;
  /**
   * 组件大小，可选值为 small default large
   */
  size: 'small' | 'default' | 'large' | string;
  /**
   * 样式
   */
  style: CSSProperties;
  /**
   * 图标颜色
   */
  color: string;
  /**
   * 自定义描述文案
   */
  tip: string;
  /**
   * 描述文案颜色
   */
  tipColor: string;
  /**
   * 加载状态
   */
  loading: boolean;
  /**
   * ReactNode
   */
  children: React.ReactNode;
}

const LSpin: FC<Partial<LSpinProps>> = ({
  style,
  color = '#FF6700',
  size = 'default',
  mode = 'load1',
  tip,
  loading,
  tipColor = '#666',
  children,
}) => {
  const props = { fill: color, size };
  const loadArr = [
    {
      load1: <Loading1 key={1} {...props} />,
      load2: <Loading2 key={2} {...props} />,
      load3: <Loading3 key={3} {...props} />,
      load4: <Loading4 key={3} {...props} />,
      load5: <Loading5 key={3} {...props} />,
      load6: <Loading6 key={3} {...props} />,
    },
  ];
  const prefixCls = 'lightd-spin';

  const isNestedPattern = () => typeof children !== 'undefined';

  const spinElement = (
    <div
      className={prefixCls}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...style,
      }}
    >
      {loadArr.map((item) => item[mode])}
      {tip && (
        <span style={{ marginTop: 6, color: tipColor, display: 'block', width: 'fit-content' }}>
          {tip}
        </span>
      )}
    </div>
  );

  if (isNestedPattern()) {
    return (
      <div className={prefixCls}>
        {loading && <div className={`${prefixCls}-loading`}>{spinElement}</div>}
        <div
          className={classNames(`${prefixCls}-container`, {
            [`${prefixCls}-blur`]: loading,
          })}
        >
          {children}
        </div>
      </div>
    );
  }

  return spinElement;
};

export default LSpin;
