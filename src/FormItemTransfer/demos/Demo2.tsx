import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import type { TransferItem } from 'antd/es/transfer';
import { LForm, LFormItemTransfer } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import { difference } from 'lodash-es';

interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}

interface DataType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}

const mockTags = ['cat', 'dog', 'bird'];

const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content-${i + 1}`,
  desc: `desc-${i + 1}`,
  tag: mockTags[i % 3],
}));

const leftColumns: ColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
    align: 'center',
  },
  {
    dataIndex: 'desc',
    title: 'Desc',
    align: 'center',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    align: 'center',
    render: (tag) => <Tag>{tag}</Tag>,
  },
];
const rightColumns: ColumnsType<Pick<DataType, 'title'>> = [
  {
    dataIndex: 'title',
    title: 'Name',
    align: 'center',
  },
];

const filterOption = (inputValue, item) => {
  return (
    item.title!.indexOf(inputValue) !== -1 ||
    item.tag.indexOf(inputValue) !== -1
  );
};

export default () => {
  return (
    <LForm
      labelCol={{ flex: '120px' }}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemTransfer
        request={async (page, pageSize) => {
          await awaitTime();
          return {
            data: mockData,
            total: mockData.length,
          };
        }}
        label="穿梭框"
        name="transfer"
        transferProps={{
          showSearch: true,
          filterOption,
          listStyle: {
            padding: 8,
          },
          children: ({
            direction,
            filteredItems,
            onItemSelectAll,
            onItemSelect,
            selectedKeys: listSelectedKeys,
            disabled: listDisabled,
          }) => {
            const columns = direction === 'left' ? leftColumns : rightColumns;

            const rowSelection: TableRowSelection<TransferItem> = {
              getCheckboxProps: (item) => ({
                disabled: listDisabled || item.disabled,
              }),
              onSelectAll(selected, selectedRows) {
                const treeSelectedKeys = selectedRows
                  .filter((item) => !item.disabled)
                  .map(({ key }) => key);

                const diffKeys = selected
                  ? difference(treeSelectedKeys, listSelectedKeys)
                  : difference(listSelectedKeys, treeSelectedKeys);

                onItemSelectAll(diffKeys as string[], selected);
              },
              onSelect({ key }, selected) {
                onItemSelect(key as string, selected);
              },
              selectedRowKeys: listSelectedKeys,
            };

            return (
              <Table
                size="small"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={filteredItems}
                style={{ pointerEvents: listDisabled ? 'none' : undefined }}
                onRow={({ key, disabled: itemDisabled }) => ({
                  onClick: () => {
                    if (itemDisabled || listDisabled) return;
                    onItemSelect(
                      key as string,
                      !listSelectedKeys.includes(key as string),
                    );
                  },
                })}
              />
            );
          },
        }}
      />
    </LForm>
  );
};
