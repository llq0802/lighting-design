import { LSpin } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <LSpin />
    </div>
  );
};

export default Index;
