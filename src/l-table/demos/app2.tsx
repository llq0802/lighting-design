import { LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <div>
      <LTable<DataType>
        rowKey="id"
        rowStripe="#F4F4F5"
        rowHoverable="#8b8b8b"
        columns={columns?.map((item) => {
          return {
            ...item,
            onHeaderCell() {
              return { style: { background: '#F4F4F5' } };
            },
          };
        })}
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
