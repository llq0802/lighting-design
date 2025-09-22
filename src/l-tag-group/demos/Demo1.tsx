import { LTagGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LTagGroup
        defaultValue="1"
        options={[
          {
            value: '1',
            label: '香蕉',
          },
          {
            value: '2',
            label: '葡萄',
            disabled: true,
          },
          {
            value: '3',
            label: '苹果',
          },
        ]}
      />
    </div>
  );
}
