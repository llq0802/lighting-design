import { LCardGroup } from 'lighting-design';
import './Demo6.less';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        gap={16}
        className="my-LCardGroup"
        cardStyle={{
          boxSizing: 'content-box',
          background: '#209cee',
          color: '#fff',
          borderWidth: 2,
        }}
        activeStyle={{
          borderColor: '#0b284c',
        }}
        options={[
          {
            value: '1',
            label: <span>支付宝</span>,
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
