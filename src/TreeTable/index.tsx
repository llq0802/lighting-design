import { useCreation } from 'ahooks';
import React from 'react';
import { getTreeMaxLevel, transformTreeToList } from './util';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const treeDate = [
  {
    label: '商户管理',
    value: '1',
    children: [
      {
        label: '商户查询',
        value: '1-1',
        children: [
          { label: '商户查询-1', value: '1-1-1' },
          { label: '查看商户-2', value: '1-1-2' },
          { label: '新增商户-3', value: '1-1-3' },
        ],
      },
      {
        label: '商户列表',
        value: '1-2',
      },
    ],
  },
  {
    label: '运营平台管理',
    value: '2',
    children: [
      {
        value: '2-1',
        label: '角色管理',
        children: [
          { value: '2-1-1', label: '新增角色' },
          { value: '2-1-2', label: '修改角色' },
          { value: '2-1-3', label: '查询角色列表', disabled: true },
        ],
      },
      {
        value: '2-2',
        label: '账号管理',
        children: [
          { value: '2-2-1', label: '账号查询' },
          { value: '2-2-2', label: '新增账号' },
          { value: '2-2-3', label: '编辑账号' },
        ],
      },
      {
        value: '2-3',
        label: '日志管理',
        children: [{ value: '2-3-1', label: '日志查询' }],
      },
    ],
  },
];

const LTreeTable: React.FC<Record<string, any>> = ({
  fieldNames: outFieldNames,
}) => {
  const fieldNames = React.useMemo(
    () => ({
      label: 'label',
      value: 'value',
      children: 'children',
      ...outFieldNames,
    }),
    [outFieldNames],
  );

  const {
    value: valueKey,
    label: labelKey,
    children: childrenKey,
  } = fieldNames;

  // useEffect(() => {
  //   const maxLevel = getTreeMaxLevel(treeDate);

  //   transformTreeToList(treeDate, false, fieldNames, maxLevel - 1);
  // }, []);

  const { list, columns } = useCreation(() => {
    const maxLevel = getTreeMaxLevel(treeDate);
    return transformTreeToList(treeDate, false, fieldNames, maxLevel - 1);
  }, []);

  return (
    // <Table
    //   columns={columns}
    //   dataSource={list}
    //   bordered
    //   pagination={false}
    //   rowKey="value"
    // />
    null
  );
};

export default LTreeTable;
