import { Button, Form } from 'antd';
import { LFormItemSelect, LFormItemTreeSelect } from 'lighting-design';
import { useState } from 'react';

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    isLeaf: false,
  },
];

const Demo1 = () => {
  const [form] = Form.useForm();
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ]);

  const genTreeNode = (parentId: number, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };

  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });

  // const onChange = (newValue: string) => {
  //   console.log(newValue);
  //   setValue(newValue);
  // };

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemSelect
        label="select选择"
        name="select"
        all
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />

      <LFormItemTreeSelect
        label="树形选择"
        // name={['sheng', 'shi', 'qu']}
        name={'tree'}
        required
        // options={options}
        dependencies={['select']}
        treeData={treeData}
        treeCheckable
        treeSelectProps={{
          treeDataSimpleMode: true,
          loadData: onLoadData,
        }}
      />

      <Button
        onClick={() => {
          form.validateFields().then((res) => {
            console.log(' res ', res);
          });
        }}
      >
        验证
      </Button>
      <Button
        onClick={() => {
          console.log(' form.getFieldsValue()  ', form.getFieldsValue());
        }}
      >
        获取
      </Button>
    </Form>
  );
};
export default Demo1;
