import { Button } from 'antd';
import type { LTableActionRef } from 'lighting-design';
import { LTable, json2Excel } from 'lighting-design';
import React, { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const App: React.FC = () => {
  const actionRef = useRef<LTableActionRef>();

  const handleUploadChange = () => {
    const data = actionRef.current?.tableData.list;
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
