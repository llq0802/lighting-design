import { LTreeTable } from 'lighting-design';
import { data2 } from './data';

const Demo2 = () => {
  const fillEmpty = <span style={{ color: '#d5d5d5' }}>无数据</span>;
  return (
    <div>
      <LTreeTable
        disabled
        fillEmpty={fillEmpty}
        onChange={(vals) => {
          console.log('vals', vals);
        }}
        treeData={data2}
        columns={[
          { title: '第一级目录' },
          { title: '第二级目录' },
          { title: '第三级目录' },
          { title: '第四级目录' },
        ]}
      />
    </div>
  );
};

export default Demo2;
