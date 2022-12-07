import { LSwitch } from 'lighting-design';
import type { CSSProperties, FC } from 'react';

const center: CSSProperties = {
  display: 'flex',
  width: '30%',
  margin: '0 auto',
  justifyContent: 'space-evenly',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <LSwitch defaultChecked size="small" />
      <LSwitch defaultChecked size="default" />
      <LSwitch defaultChecked size="large" />
    </div>
  );
};

export default Index;
