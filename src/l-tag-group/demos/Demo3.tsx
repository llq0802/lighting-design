import type { LValueType } from 'lighting-design';
import { LTagGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<LValueType>('');

  return (
    <div>
      <LTagGroup
        options={[
          {
            value: '1',
            label: '香蕉',
          },
          {
            value: '2',
            label: '葡萄',
          },
          {
            value: '3',
            label: '苹果',
          },
        ]}
        value={value}
        onChange={(val) => setValue(val)}
        tagStyle={({ isActive }) => {
          return isActive
            ? { background: '#3e9bed' }
            : {
                background: '#f5f5f5',
              };
        }}
      />

      <p style={{ marginTop: 50 }}>当前值：{value}</p>
    </div>
  );
}
