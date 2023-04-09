import { LCardGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<string>('');
  return (
    <div>
      <LCardGroup
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
            disabled: true,
          },
        ]}
        value={value}
        onChange={setValue}
      />

      <p>当前值：{value}</p>
    </div>
  );
}
