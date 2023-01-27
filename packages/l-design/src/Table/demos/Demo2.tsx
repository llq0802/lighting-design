import type { FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const Demo2: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <LTable
      rowKey="key"
      tableRef={tableRef}
      showToolbar={false}
      formRef={formRef}
      columns={columns}
      pagination={false}
      isSort
      request={async (params, requestType) => {
        // console.log('==params==', params);
        // console.log('requestType ', requestType);
        // console.log('tableRef ', tableRef.current);
        const res: Record<string, any> = await apiGetUserList();
        return {
          success: true,
          data: res.data,
          total: res.total,
        };
      }}
    />
  );
};

export default Demo2;
