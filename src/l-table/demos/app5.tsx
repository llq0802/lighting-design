import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <LTable<DataType>
      rowKey="id"
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      columns={columns}
      request={async (params, type) => {
        // console.log('===request请求之前==>', type, params);
        const res = await apiGetUserList(params);
        // console.log('===request请求之后==>', type, params);
        return res;
      }}
    />
  );
};

export default App;
