import { LTooltip } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <LTooltip
      style={center}
      title="这是一条很长很长很长很很长很长很长很长很长很长很很长很长很长很长很长的语句"
    >
      基础用法
    </LTooltip>
  );
};

export default Index;
