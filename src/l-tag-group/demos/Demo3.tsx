import type { ValueType } from 'lighting-design';
import { LTagGroup } from 'lighting-design';
import { useState } from 'react';
import './styles.less';

export default function Demo() {
  const [value, setValue] = useState<ValueType>('');

  return (
    <div>
      <LTagGroup
        className="myLTagGroup"
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
