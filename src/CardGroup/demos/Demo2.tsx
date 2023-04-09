import { LCardGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<Array<number>>([]);
  return (
    <div>
      <LCardGroup
        multiple
        options={[
          {
            value: '1',
            label: '支付宝',
          },
          {
            value: '2',
            label: '微信',
          },
          {
            value: '3',
            label: '云闪付',
          },
        ]}
        value={value}
        onChange={setValue}
      />

      <div>当前值：{JSON.stringify(value)}</div>
    </div>
  );
}
