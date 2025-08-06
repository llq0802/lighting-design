import { LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <div>
      <LTable<DataType>
        sortColumn
        borderless
        pagination={{
          pageSize: 6,
        }}
        columns={columns}
        request={async (params, type) => {
          console.log('===request请求之前==>', type, params);
          const res = await apiGetUserList(params);
          console.log('===request请求之后==>', type, params);
          return res;
        }}
      />
    </div>
  );
};

export default App;
