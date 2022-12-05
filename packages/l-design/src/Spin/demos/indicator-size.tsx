import { Segmented } from 'antd';
import type { LightdSpinProps } from 'lighting-design';
import { Spin } from 'lighting-design';
import type { CSSProperties, FC } from 'react';
import { useState } from 'react';

const flexCenter: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  const [mode, setMode] = useState('load1');
  const [size, setSize] = useState('default');

  return (
    <>
      <div style={{ ...center, minHeight: 60 }}>
        <Spin mode={mode} size={size} tip="loading..." />
      </div>
      <br />
      <div style={flexCenter}>
        mode：
        <Segmented
          options={['load1', 'load2', 'load3', 'load4', 'load5', 'load6']}
          onChange={(e: any) => {
            setMode(e);
          }}
        />
      </div>
      <br />
      <div style={flexCenter}>
        size：
        <Segmented
          options={['default', 'small', 'large']}
          onChange={(e: any) => {
            setSize(e);
          }}
        />
      </div>
    </>
  );
};

export default Index;
