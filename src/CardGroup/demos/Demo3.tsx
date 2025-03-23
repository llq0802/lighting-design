import type { LValueType } from 'lighting-design';
import { LCardGroup } from 'lighting-design';
import { useState } from 'react';

export default function Demo() {
  const [value, setValue] = useState<LValueType>('1');
  return (
    <div>
      <LCardGroup
        gap={10}
        options={[
          { value: '1', label: '支付宝' },
          { value: '2', label: '微信', disabled: true },
          { value: '3', label: '云闪付' },
        ]}
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />

      <p>当前值：{value}</p>
    </div>
  );
}
