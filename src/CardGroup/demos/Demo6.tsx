import { LCardGroup } from 'lighting-design';
import './Demo6.less';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        gap={16}
        cardStyle={{
          boxSizing: 'content-box',
          borderWidth: 2,
        }}
        activeStyle={{
          borderColor: '#0b284c',
        }}
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
