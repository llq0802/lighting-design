import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { json2Excel, LTable } from 'lighting-design';
import React, { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const App: React.FC = () => {
  const tableRef = useRef<LTableInstance>();

  const handleUploadChange = () => {
    const data = tableRef.current?.tableData as Record<string, any>[];
    json2Excel({ columns, data, fileName: '用户列表' });
  };

  return (
    <>
      <LTable
        toolbarLeft={
          <>
            <Button type="primary" onClick={handleUploadChange}>
              导出 Excel
            </Button>
            {/* <Upload
              onChange={async (files: any[]) => {
                const res = await getExcelData(files.file.originFileObj);
                console.log('res', res);
              }}
            >
              <Button type="primary">Click to Upload-2</Button>
            </Upload> */}
          </>
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
