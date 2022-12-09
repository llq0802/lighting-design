import { LSwitch } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <LSwitch
        defaultChecked
        onChange={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default Index;
