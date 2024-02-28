import { LCardGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        hoverable
        options={[
          { id: '1', title: '支付宝' },
          { id: '2', title: '微信' },
          { id: '3', title: <a>云闪付</a> },
        ]}
        fieldNames={{ label: 'title', value: 'id' }}
      />
    </div>
  );
}
