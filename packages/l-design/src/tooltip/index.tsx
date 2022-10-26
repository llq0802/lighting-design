/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import './index.less';

interface LoadingProps {
  /**
   * ReactNode
   */
  children: React.ReactNode;
}
const Index: FC<Partial<LoadingProps>> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="con-tooltip top">
        {children}
        <div className="tooltip ">
          <span>反反复复烦烦烦</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
