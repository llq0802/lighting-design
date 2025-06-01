import { Tag } from 'antd';
import { LTreeTable } from 'lighting-design';
import { data1 } from './data';

const Demo6 = () => {
  return (
    <div>
      <LTreeTable
        onChange={(vals) => {
          console.log('vals', vals);
        }}
        treeData={data1}
        columns={[
          { title: '第一级' },
          { title: '第二级' },
          { title: '第三级' },
        ]}
        labelRender={(item, row, rowIndex) => {
          console.log('item', item);
          console.log('row', row);
          console.log('rowIndex', rowIndex);
          return (
            <>
              <Tag color={item.disabled ? '#c1c1c1' : 'blue'}>{item.label}</Tag>
              <Tag color={item.disabled ? '#c1c1c1' : 'gold'}>{item.value}</Tag>
              <Tag color={item.disabled ? '#c1c1c1' : 'cyan'}>{rowIndex}</Tag>
            </>
          );
        }}
      />
    </div>
  );
};

export default Demo6;
