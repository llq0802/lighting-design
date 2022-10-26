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
  const spinElement = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    ></div>
  );

  return spinElement;
};

export default Index;
