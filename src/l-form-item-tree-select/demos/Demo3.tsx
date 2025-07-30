import type { TreeSelectProps } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { LForm, LFormItemTreeSelect } from 'lighting-design';
import { useState } from 'react';

const genTreeNode = (parentId: number, isLeaf = false) => {
  const random = Math.random().toString(36).substring(2, 6);
  return {
    id: random,
    value: random,
    pId: parentId,
    title: isLeaf ? 'Tree Node' : 'Expand to load',
    isLeaf,
  };
};

const Demo3 = () => {
  const [form] = LForm.useForm();
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: '1', pId: '0', value: '1', title: 'Expand to load - 1' },
    { id: '2', pId: '0', value: '2', title: 'Expand to load - 2' },
    { id: '3', pId: '0', value: '3', title: 'Tree Node - 3', isLeaf: true },
  ]);

  const onLoadData: TreeSelectProps['loadData'] = (node) => {
    const { id } = node;
    return new Promise((resolve) => {
      setTimeout(() => {
        const newtreeData = treeData.concat([genTreeNode(id, false), genTreeNode(id, true)]);
        setTreeData(newtreeData);
        resolve(void 0);
      }, 400);
    });
  };

  return (
    <LForm form={form} submitter={{ position: 'center' }}>
      <LFormItemTreeSelect
        label="异步加载树形选择"
        name="tree"
        required
        treeData={treeData}
        loadData={onLoadData}
        treeDataSimpleMode
      />
      <LFormItemTreeSelect
        label="异步加载树形选择"
        name="tree"
        required
        treeData={treeData}
        loadData={onLoadData}
        treeCheckable
        treeDataSimpleMode
      />
    </LForm>
  );
};
export default Demo3;
