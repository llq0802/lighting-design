import type { TreeSelectProps } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { LForm, LFormItemTreeSelect } from 'lighting-design';
import { useState } from 'react';

const Demo1 = () => {
  const [form] = LForm.useForm();
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
          treeData.concat([
            genTreeNode(id, false),
            genTreeNode(id, true),
            genTreeNode(id, true),
          ]),
        );
        resolve(undefined);
      }, 300);
    });

  return (
    <LForm name="LFormItemTreeSelect22" form={form}>
      <LFormItemTreeSelect
        label="树形选择"
        name="tree"
        required
        treeData={treeData}
        loadData={onLoadData}
        treeCheckable
        treeSelectProps={{
          treeDataSimpleMode: true,
        }}
      />
    </LForm>
  );
};
export default Demo1;
