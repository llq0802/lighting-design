/* eslint-disable react/jsx-key */
import type { CSSProperties, FC } from 'react';
import './index.less';

interface LoadingProps {
  /**
   * 气泡位置
   */
  placement:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  /**
   * 提示文字
   */
  title: string | React.ReactNode;
  /**
   * 卡片样式
   */
  tipClassName: string;
  /**
   * 卡片样式
   */
  tipStyle: CSSProperties;
  /**
   * 背景颜色
   */
  color: string;
  /**
   * 设置 Tooltip 的 z-index
   */
  zIndex: number;
  /**
   * ReactNode
   */
  children: React.ReactNode;
}
const Index: FC<Partial<LoadingProps>> = ({
  tipClassName,
  tipStyle,
  placement = 'top',
  title = '',
  color,
  zIndex = 9999,
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className={`con-tooltip ${placement}`}>
        {children}
        <div
          className={`tooltip ${tipClassName}`}
          style={{ zIndex, background: color, ...tipStyle }}
        >
          <div className="after" style={{ borderTopColor: color }} />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
