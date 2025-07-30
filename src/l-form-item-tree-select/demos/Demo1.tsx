import { LForm, LFormItemTreeSelect } from 'lighting-design';
import cq_city from './cq_city.json';
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

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(vals) => {
        console.log('==vals====>', vals);
      }}
    >
      <LFormItemTreeSelect label="树形选择" variant="filled" name="tree1" required treeData={treeData} />
      <LFormItemTreeSelect
        label="自定义字段名"
        name="tree2"
        required
        treeData={cq_city}
        showSearch
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
      />
      <LFormItemTreeSelect
        label="多选"
        name="tree3"
        required
        treeData={cq_city}
        multiple
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
      />
      <LFormItemTreeSelect
        label="treeLine"
        name="tree4"
        treeLine
        treeData={cq_city}
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
        maxHeight={600}
        treeSelectProps={{
          listHeight: 330,
        }}
      />
    </LForm>
  );
};
export default Demo1;
