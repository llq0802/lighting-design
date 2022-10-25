/* eslint-disable react/jsx-key */
import type { FC } from 'react';
import Loading1 from './component/loading1';
import Loading2 from './component/loading2';
import Loading3 from './component/loading3';

interface LoadingProps {
  width: number;
  height: number;
  mode: 'load1' | 'load2' | 'load3';
  color: string;
  size: 'small' | 'default' | 'large';
  tip: string;
}
const Loading: FC<Partial<LoadingProps>> = ({
  color = '#FF6700',
  size = 'default',
  mode = 'load1',
  tip,
}) => {
  const props = { fill: color, size };
  const loadArr = [
    {
      load1: <Loading1 key={1} {...props} />,
      load2: <Loading2 key={2} {...props} />,
      load3: <Loading3 key={3} {...props} />,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {loadArr.map((item) => item[mode])}
      <span>
        {tip}
      </span>
    </div>
  );
};

export default Loading;
