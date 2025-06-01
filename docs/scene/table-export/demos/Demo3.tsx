import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { json2Excel, LTable } from 'lighting-design';
import React, { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const App: React.FC = () => {
  const tableRef = useRef<LTableInstance>();

  const handleUploadChange = () => {
    const data = tableRef.current?.tableData as Record<string, any>[];
    json2Excel({
      columns,
      data,
      fileName: '用户列表',
      hasColumnTitle: false,
    });
  };

  return (
    <>
      <LTable
        toolbarLeft={
          <Button type="primary" onClick={handleUploadChange}>
            导出 Excel
          </Button>
        }
        rowKey="key"
        tableRef={tableRef}
        columns={columns}
        request={async (params, requestType) => {
          const res: Record<string, any> = await apiGetUserList();
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />
    </>
  );
};

export default App;
