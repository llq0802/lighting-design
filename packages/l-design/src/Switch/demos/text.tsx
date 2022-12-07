import { LSwitch } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <LSwitch unCheckedChildren="错" checkedChildren="对" />
    </div>
  );
};

export default Index;
