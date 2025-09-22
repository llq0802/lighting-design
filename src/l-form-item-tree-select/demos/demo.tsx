import { LForm, LFormItemTreeSelect } from 'lighting-design';
import React from 'react';

type FieldType = {
  time1?: string;
};

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          { value: 'leaf1', title: 'leaf1' },
          { value: 'leaf2', title: 'leaf2' },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [{ value: 'leaf3', title: <b style={{ color: '#08c' }}>leaf3</b> }],
      },
    ],
  },
];

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemTreeSelect
        required
        name="time1"
        label="城市"
        // treeData={cq_city}
        treeData={treeData}
        showSearch
        // fieldNames={{
        //   label: 'name',
        //   value: 'code',
        //   children: 'children',
        // }}
        // fieldNames={{ label: 'name', value: 'id' }}
      />
    </LForm>
  );
};

export default App;
