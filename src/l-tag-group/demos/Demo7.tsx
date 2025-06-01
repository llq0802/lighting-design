import { LTagGroup } from 'lighting-design';

export default function Demo() {
  return (
    <div>
      <LTagGroup
        showAllChecked
        options={[
          { id: '1', name: '香蕉' },
          { id: '2', name: '葡萄' },
          { id: '3', name: '苹果' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
      />
    </div>
  );
}
