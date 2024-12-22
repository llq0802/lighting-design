import type { ValueType } from 'lighting-design';
import { LTagGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<ValueType>([]);

  return (
    <div>
      <LTagGroup
        options={[
          {
            value: '1',
            label: '水果',
          },
          {
            value: '2',
            label: '电子',
          },
          {
            value: '3',
            label: '清洁',
          },
        ]}
        multiple
        value={value}
        onChange={(vals) => setValue(vals)}
      />

      <p style={{ marginTop: 50 }}>当前值：{JSON.stringify(value)}</p>
    </div>
  );
}
