import { LTagGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<string>();

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
      />

      <p style={{ marginTop: 50 }}>当前值：{value}</p>
    </div>
  );
}
