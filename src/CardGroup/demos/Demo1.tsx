import { LCardGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LCardGroup
        defaultValue="1"
        onChange={(v, c, opts) => {
          console.log(v, c, opts);
        }}
        options={[
          { value: '1', label: '支付宝' },
          { value: '2', label: '微信' },
          { value: '3', label: '云闪付' },
        ]}
      />
    </div>
  );
}
