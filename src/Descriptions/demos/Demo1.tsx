import { LDescriptions } from 'lighting-design';

export default function Demo1() {
  return (
    <div>
      <LDescriptions
        colon={false}
        title="大萨达"
        extra="发送"
        titleWidth={120}
        columns={[
          { title: '姓名', dataIndex: 'name' },
          { title: 'Age', dataIndex: 'age' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Desc', dataIndex: 'desc' },
        ]}
        record={{
          name: '李岚清',
          age: 20,
          address: <div style={{ color: 'red', fontWeight: 700, fontSize: 18 }}>北京</div>,
          desc: '姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名姓名',
        }}
      />
    </div>
  );
}
