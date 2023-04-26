import { LTooltip } from 'lighting-design';
import type { FC } from 'react';

const center = {
  display: 'flex',
  width: '50%',
  margin: '0 auto',
  justifyContent: 'space-evenly',
};
const Index: FC = () => {
  return (
    <div style={center}>
      <LTooltip
        rows={2}
        title="这是一条很长很长很长很很长很长很长很长很长很很长很长很长很长很很长很长很长长很长很长很长很长很长长很长很长很长的语句"
      >
        单行超出隐藏
      </LTooltip>
      <LTooltip
        tipStyle={{
          textIndent: '2em',
        }}
        title="这是一条超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长的语句"
        rows={3}
      >
        多行超出隐藏
      </LTooltip>
    </div>
  );
};

export default Index;
