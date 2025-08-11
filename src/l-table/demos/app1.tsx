import type { Table } from 'antd';
import { LTable } from 'lighting-design';
import React, { useEffect, useRef } from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  const tblRef: Parameters<typeof Table>[0]['ref'] = useRef(null);
  useEffect(() => {
    console.log('==tblRef.currentscrollTo====>', tblRef.current!.scrollTo);
    console.log('==tblRef.currentnativeElement====>', tblRef.current!.nativeElement);
  }, []);
  return (
    <div>
      <LTable<DataType>
        ref={tblRef}
        rowKey="id"
        sortColumn
        borderless
        pagination={{
          pageSize: 6,
        }}
        columns={columns}
        request={async (params, type) => {
          // console.log('===request请求之前==>', type, params);
          const res = await apiGetUserList(params);
          // console.log('===request请求之后==>', type, params);
          return res;
        }}
      />
    </div>
  );
};

export default App;
