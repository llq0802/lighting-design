import { Tree } from 'antd';
import type { TransferItem } from 'antd/es/transfer';
import type { DataNode } from 'antd/es/tree';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';

const treeData: DataNode[] = [
  { key: '0-0', title: '0-0' },
  {
    key: '0-1',
    title: '0-1',
    children: [
      { key: '0-1-0', title: '0-1-0' },
      { key: '0-1-1', title: '0-1-1' },
    ],
  },
  { key: '0-2', title: '0-2' },
  { key: '0-3', title: '0-3' },
  { key: '0-4', title: '0-4' },
];

// Customize Table Transfer
const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number,
) => selectedKeys.includes(eventKey);

const generateTree = (
  treeNodes: DataNode[] = [],
  checkedKeys: string[] = [],
): DataNode[] =>
  treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateTree(children, checkedKeys),
  }));

/**
 * 33
 */
export default () => {
  const [form] = LForm.useForm();

  const transferDataSource: TransferItem[] = [];
  function flatten(list: DataNode[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as TransferItem);
      flatten(item.children);
    });
  }
  flatten(treeData);

  return (
    <LForm
      form={form}
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        // options={transferDataSource}
        request={async ({ current, pageSize }) => {
          await awaitTime();
          return {
            data: transferDataSource,
            total: transferDataSource.length,
          };
        }}
        label="穿梭框"
        name="transfer"
        transferProps={{
          showSelectAll: false,
          children: ({ direction, onItemSelect, selectedKeys }) => {
            if (direction === 'left') {
              const targetKeys = form.getFieldValue('transfer') ?? [];
              const checkedKeys = [...selectedKeys, ...targetKeys];
              return (
                <div style={{ padding: 8 }}>
                  <Tree
                    blockNode
                    checkable
                    checkStrictly
                    defaultExpandAll
                    checkedKeys={checkedKeys}
                    treeData={generateTree(treeData, targetKeys)}
                    onCheck={(_, { node: { key } }) => {
                      onItemSelect(key as string, !isChecked(checkedKeys, key));
                    }}
                    onSelect={(_, { node: { key } }) => {
                      onItemSelect(key as string, !isChecked(checkedKeys, key));
                    }}
                  />
                </div>
              );
            }
          },
        }}
      />
    </LForm>
  );
};
