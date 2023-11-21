import { Tag } from 'antd';
import { LForm, LFormItemTreeSelect } from 'lighting-design';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form}>
      <LFormItemTreeSelect
        label="树形选择"
        name="tree"
        required
        treeData={treeData}
        treeSelectProps={{
          multiple: true,
          showSearch: true,
          treeDefaultExpandAll: true,
          treeNodeFilterProp: 'title',
          tagRender(props) {
            return <Tag>{props?.label}</Tag>;
          },
        }}
      />
    </LForm>
  );
};
export default Demo1;
