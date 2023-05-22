import { Popconfirm, Typography } from 'antd';
import LFormItemInput from 'lighting-design/FormItemInput';
import { useRef, useState } from 'react';
import EditableTable from '../base/EditableTable';

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const Demo8 = () => {
  const editTableRef = useRef();

  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: <LFormItemInput />,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: <LFormItemInput />,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        // console.log('record', record);

        return record?.editing ? (
          <span>
            <Typography.Link onClick={() => {}} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm
              title="Sure to cancel?"
              onConfirm={() => {
                editTableRef?.current.cancel(record);
              }}
            >
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={!!editingKey}
            onClick={() => {
              editTableRef?.current.edit(record);
            }}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  return (
    <div>
      <EditableTable
        editTableOptions={{
          editTableRef,
          editingKey,
          onEditingKey(key) {
            setEditingKey(key);
          },
        }}
        dataSource={originData}
        columns={columns}
        onChange={(e) => {
          console.log('onChange ', e);
        }}
      />
    </div>
  );
};

export default Demo8;
