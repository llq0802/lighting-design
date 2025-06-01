import { Button, Upload } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { excel2Json, getExcelData, LTable } from 'lighting-design';
import React, { useRef, useState } from 'react';
import { apiGetUserList } from '../../tableExport/demos/service';

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
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
];

const App: React.FC = () => {
  const tableRef = useRef<LTableInstance>();
  const [list1, setList1] = useState([]);
  const [obj, setObj] = useState({});

  const handleUploadChange1 = async (file) => {
    const res = await excel2Json({ columns, file });
    setList1(res);
    // tableRef.current?.setTableData({
    //   total: res?.length,
    //   list: res,
    // });
  };
  const handleUploadChange2 = async (file) => {
    const res = await getExcelData(file);
    setObj(res);
  };

  return (
    <>
      <LTable
        tableExtra={
          <>
            <div
              style={{
                margin: `20px 0`,
                background: `beige`,
                padding: `0 24px`,
              }}
            >
              excel2Json方法解析的数据为：{' '}
              <pre>{JSON.stringify(list1, null, 4)}</pre>
            </div>
            <div
              style={{
                margin: `20px 0`,
                background: `beige`,
                padding: `0 24px`,
              }}
            >
              getExcelData方法解析的数据为：{' '}
              <pre>{JSON.stringify(obj, null, 4)}</pre>
            </div>
          </>
        }
        rowKey="key"
        toolbarLeft={
          <>
            <Upload
              showUploadList={false}
              // 文件类型判断或者限制只能是excel类型开发者自行去判断
              onChange={(info) => handleUploadChange1(info.file.originFileObj)}
            >
              <Button type="primary">excel2Json 方法导入</Button>
            </Upload>
            <Upload
              showUploadList={false}
              // 文件类型判断或者限制只能是excel类型开发者自行去判断
              onChange={(info) => handleUploadChange2(info.file.originFileObj)}
            >
              <Button type="primary">getExcelData 方法导入</Button>
            </Upload>
          </>
        }
        tableRef={tableRef}
        columns={columns}
        request={async (params, requestType) => {
          const result = await apiGetUserList();
          return {
            success: true,
            data: result.data,
            total: result.data.length,
          };
        }}
      />
    </>
  );
};

export default App;
