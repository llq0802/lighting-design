import { LCardGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        gap={16}
        cardStyle={({ isActive }) =>
          isActive
            ? {
                background: '#0b284c',
              }
            : undefined
        }
        options={[
          {
            value: '1',
            label: <>支付宝</>,
            cardProps: {
              // ...配置卡片的属性
            },
          },
          { value: '2', label: '微信' },
          { value: '3', label: '云闪付' },
        ]}
      />
    </div>
  );
}
