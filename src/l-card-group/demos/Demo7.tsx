import { LCardGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        options={[
          { id: '1', title: <i>支付宝</i> },
          { id: '2', title: <i>微信</i> },
          { id: '3', title: <i>云闪付</i> },
        ]}
        fieldNames={{ label: 'title', value: 'id' }}
      />
    </div>
  );
}
