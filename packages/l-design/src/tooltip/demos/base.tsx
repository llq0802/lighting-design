import { Tooltip } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  justifyContent: 'center',
};
const Index: FC = () => {
  return (
    <Tooltip style={center} title="基础用法">
      基础用法
    </Tooltip>
  );
};

export default Index;
