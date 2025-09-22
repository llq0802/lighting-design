import { Divider, Space, Switch } from 'antd';
import { LTreeTable } from 'lighting-design';
import { useState } from 'react';
import { data1 } from './data';

const Demo1 = () => {
  const [lastColumnMerged, setLastColumnMerged] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(true);

  return (
    <div>
      <Space size={24}>
        <span>
          <span>是否合并最后一列：</span>
          <Switch checked={lastColumnMerged} onChange={(checked) => setLastColumnMerged(checked)} />
        </span>
        <span>
          <span>是否展示复选框：</span>
          <Switch checked={showCheckbox} onChange={(checked) => setShowCheckbox(checked)} />
        </span>
      </Space>
      <Divider />
      <LTreeTable
        // onChange={(vals) => {
        //   console.log('vals', vals);
        // }}
        treeData={data1}
        lastColumnMerged={lastColumnMerged}
        showCheckbox={showCheckbox}
        columns={[{ title: '第一级' }, { title: '第二级' }, { title: '第三级' }]}
      />
    </div>
  );
};

export default Demo1;
