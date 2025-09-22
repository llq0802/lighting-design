import type { TreeSelectProps } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import { LForm, LFormItemInput, LFormItemNumber } from 'lighting-design';
import { useState } from 'react';

const Demo1 = () => {
  const [form] = LForm.useForm();
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<{ value: string; label: string }[]>([]);

  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ]);

  const transferMockData: any[] = Array.from({ length: 10 }).map((_, i) => ({
    key: i.toString(),
    title: `content--${i}`,
  }));

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
        setTreeData(treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]));
        resolve(undefined);
      }, 300);
    });

  return (
    <LForm
      name="form6"
      transformValues={(values) => {
        console.log('values', values);
        return {
          ...values,
          treeSelect: values.treeSelect.join(','),
        };
      }}
      form={form}
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
      }}
    >
      <LFormItemInput name="LFormItemInput" required label="输入框1" tooltip="禁止输入空格" />
      <LFormItemNumber name="LFormItemNumber" required label="输入框2" contentAfter={<div>$</div>} />
    </LForm>
  );
};

export default Demo1;
