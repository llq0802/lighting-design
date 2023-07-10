import type { LTreeTableData } from 'lighting-design';
import { LTreeTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { useEffect, useState } from 'react';
import { data4 } from './data';

const Demo4 = () => {
  const [loading, setLoading] = useState(true);
  const [treeData, setTreeData] = useState<LTreeTableData>([]);

  useEffect(() => {
    const getData = async () => {
      await awaitTime(3000);
      setTreeData(data4);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      <LTreeTable
        lastColumnMerged
        loading={loading}
        onChange={(vals) => {
          console.log('vals', vals);
        }}
        treeData={treeData}
        columns={[
          { title: '第一级' },
          { title: '第二级' },
          { title: '第三级' },
          { title: '操作栏' },
        ]}
      />
    </div>
  );
};

export default Demo4;
