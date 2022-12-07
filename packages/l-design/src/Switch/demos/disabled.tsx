import { Button } from 'antd';
import { LSwitch } from 'lighting-design';
import type { FC } from 'react';
import { useState } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <div style={center}>
        <LSwitch checked={checked} disabled={disabled} loading={loading} />
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '50%',
          margin: '0 auto',
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            setChecked(!checked);
          }}
        >
          点击切换开关
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          点击切换状态
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setLoading(!loading);
          }}
        >
          点击切换加载
        </Button>
      </div>
    </div>
  );
};

export default Index;
