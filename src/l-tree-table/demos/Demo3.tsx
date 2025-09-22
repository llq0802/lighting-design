import { LTreeTable } from 'lighting-design';
import { data3 } from './data';

const Demo3 = () => {
  return (
    <div>
      <LTreeTable
        defaultValue={['2-1', '2-1-1', '2-1-2']}
        fieldNames={{
          label: 'name',
          value: 'id',
          children: 'childs',
        }}
        size="small"
        lastColumnMerged
        fillEmpty="---"
        treeData={data3}
        showHeader={false}
      />
    </div>
  );
};

export default Demo3;
