import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const Demo2: FC = () => {
  const tableRef = useRef<LTableInstance>();

  return (
    <LTable
      rowKey="key"
      tableRef={tableRef}
      size="small"
      showToolbar={false}
      columns={columns}
      pagination={false}
      toolbarActionConfig={{
        orders: {
          columnSetting: 1,
          fullscreen: 2,
          density: 3,
          reload: 4,
        },
      }}
      request={async (params, requestType) => {
        // console.log('==params==', params);
        // console.log('requestType ', requestType);
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
