import { LTagGroup } from 'lighting-design';

export default function Demo6() {
  return (
    <div>
      <LTagGroup
        cancelable
        options={[
          {
            value: '1',
            label: '香蕉',
          },
          {
            value: '2',
            label: '葡萄',
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
