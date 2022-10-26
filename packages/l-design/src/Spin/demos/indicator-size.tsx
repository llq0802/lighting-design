import { Segmented } from 'antd';
import { Spin } from 'lighting-design';
import type { CSSProperties, FC } from 'react';
import { useState } from 'react';

const flexCenter: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const Index: FC = () => {
  const [mode, setMode] = useState<string | any>('load1');
  const [size, setSize] = useState<string | any>('default');

  return (
    <>
      <div style={{ minHeight: 60 }}>
        <Spin mode={mode} size={size} tip="loading..." />
      </div>
      <br />
      <div style={flexCenter}>
        mode：
        <Segmented
          options={['load1', 'load2', 'load3','load4', 'load5', 'load6']}
          onChange={(e) => {
            setMode(e);
          }}
        />
      </div>
      <br />
      <div style={flexCenter}>
        size：
        <Segmented
          options={['default', 'small', 'large']}
          onChange={(e) => {
            setSize(e);
          }}
        />
      </div>
    </>
  );
};

export default Index;
