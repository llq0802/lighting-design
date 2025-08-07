import { Empty } from 'antd';
import { LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <div>
      <LTable
        rowKey="id"
        renderEmpty={() => <Empty style={{ margin: '120px auto' }} description="空空如也" />}
        columns={columns}
        request={async (params, type) => {
          await apiGetUserList(params);
          return {
            list: [],
            total: 0,
          };
        }}
      />
    </div>
  );
};

export default App;
