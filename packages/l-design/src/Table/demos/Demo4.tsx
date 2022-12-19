import { Form, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import EditTable from '../components/EditableTable';

interface Item {
  id: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    id: i.toString() + 'lightd',
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const editTableRef = useRef();

  const [editableKeys, setEditableKeys] = useState<string[]>([]);
  const [data, setData] = useState(originData);

  const edit = (record) => {
    editTableRef.current.onEdit(record);
  };

  const cancel = (id) => {
    editTableRef.current.onCancel(id);
  };

  const save = async (id) => {
    editTableRef.current.onSave(id);
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text: any, record: Item) => {
        return editableKeys?.includes(record.id) ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              保存
            </Typography.Link>

            <Typography.Link onClick={() => cancel(record.id)}>取消</Typography.Link>
          </span>
        ) : (
          <Typography.Link onClick={() => edit(record)}>编辑</Typography.Link>
        );
      },
    },
  ];

  return (
    <EditTable
      rowKey="id"
      editTableRef={editTableRef}
      editTableProps={{
        editKeys: editableKeys,
        editKeysChange: setEditableKeys,
        onSave: async (id, values) => {
          console.log('id,values ', id, values);
        },
      }}
      // dataSource={originData}
      // autoRequest={false}
      request={async (params, requestType) => {
        console.log('==params==', params);
        // console.log('requestType ', requestType);
        // console.log('tableRef ', tableRef.current);
        return {
          success: true,
          data: originData,
          total: originData.length,
        };
      }}
      columns={columns}
      rowClassName="editable-row"
    />
  );
};

export default App;
