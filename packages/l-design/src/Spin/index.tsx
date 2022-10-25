/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import type { FC } from 'react';
import Loading1 from './component/loading1';
import Loading2 from './component/loading2';
import Loading3 from './component/loading3';
import './index.less';

interface LoadingProps {
  /**
   * 图标类型
   */
  mode: 'load1' | 'load2' | 'load3';
  /**
   * 图标颜色
   */
  color: string;
  /**
   * 组件大小，可选值为 small default large
   */
  size: 'small' | 'default' | 'large';
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
const Index: FC<Partial<LoadingProps>> = ({
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
    },
  ];

  const isNestedPattern = () => typeof children !== 'undefined';

  const spinElement = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {loadArr.map((item) => item[mode])}
      <span className="y-spin-tip" style={{ color: tipColor }}>
        {tip}
      </span>
    </div>
  );

  if (isNestedPattern()) {
    return (
      <div className="y-spin-content" style={{ position: 'relative' }}>
        {loading && <div className="y-spin-loading">{spinElement}</div>}
        <div
          className={classNames(`y-spin-container`, {
            [`y-spin--blur`]: loading,
          })}
        >
          {children}
        </div>
      </div>
    );
  }

  return spinElement;
};

export default Index;
