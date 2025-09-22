import { Button } from 'antd';
import { json2Excel, LTable, type LTableActionRef } from 'lighting-design';
import React, { useRef } from 'react';
import { apiGetUserList } from './service';

const columns: any[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    hiddenInExcel: true, // 导出表格时隐藏这一列
  },
];

const App: React.FC = () => {
  const actionRef = useRef<LTableActionRef>();

  const handleUploadChange = () => {
    const data = actionRef.current?.tableData.list!;
    json2Excel({
      columns,
      data,
      fileName: '用户列表',
    });
  };

  return (
    <>
      <LTable
        toolbar={
          <Button type="primary" onClick={handleUploadChange}>
            导出 Excel
          </Button>
        }
        rowKey="key"
        actionRef={actionRef}
        columns={columns}
        request={async (params, requestType) => {
          const res: Record<string, any> = await apiGetUserList();
          return {
            list: res.data,
            total: res.total,
          };
        }}
      />
    </>
  );
};

export default App;
