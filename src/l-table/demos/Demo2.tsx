import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { columns, originData } from './service';

const Demo2: FC = () => {
  const tableRef = useRef<LTableInstance>();

  return (
    <>
      <LTable
        rowKey="key"
        tableRef={tableRef}
        size="small"
        showToolbar={false}
        columns={columns}
        pagination={false}
        request={async (params, requestType) => {
          // console.log('==params==', params);
          // console.log('requestType ', requestType);
          return {
            success: true,
            data: originData,
            total: originData.length,
          };
        }}
      />
    </>
  );
};

export default Demo2;
