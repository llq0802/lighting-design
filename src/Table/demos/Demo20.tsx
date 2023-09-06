import { Button, type FormInstance } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import React, { useRef } from 'react';

const originData: any[] = [];

for (let index = 0; index < 10; index++) {
  originData.push({
    key: `${index}`,
    name: `JohnBrown-${index}`,
    age: 10 + index,
  });
}

const Demo20: React.FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const columns: ColumnsType<any> = [
    {
      title: '姓名-A',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '年龄-A',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: '_operation_',
      align: 'center',
      render(value, record, index) {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                // 调用修改的接口成功后再执行以下方法
                tableRef.current?.setTableData((prev) => {
                  prev.list[index].name = `李岚清-${index}`;
                  prev.list[index].age = index + 20;
                  return { ...prev, total: prev.list?.length };
                });
              }}
            >
              修改
            </Button>
            <Button
              type="link"
              onClick={() => {
                // 调用删除的接口成功后再执行以下方法
                tableRef.current?.setTableData((prev) => {
                  return {
                    list: prev.list.filter((item) => item.key !== record.key),
                    total: prev.total - 1,
                  };
                });
              }}
            >
              删除
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <LTable
        isSort={{ width: 200 }}
        columns={columns}
        tableRef={tableRef}
        formRef={formRef}
        pagination={{
          showSizeChanger: false,
          showQuickJumper: false,
        }}
        request={async (params, requestType) => {
          return {
            success: true,
            data: originData,
            total: originData.length,
          };
        }}
      />
    </div>
  );
};

export default Demo20;
