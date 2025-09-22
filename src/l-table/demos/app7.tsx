import { Button, Flex } from 'antd';
import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import React from 'react';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  return (
    <LTable<DataType>
      rowKey="id"
      queryFormProps={{
        showColsNumber: 3,
      }}
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemInput label="输入框3" name="input3" />,
        <LFormItemInput label="输入框4" name="input4" />,
        <LFormItemInput label="输入框5" name="input5" />,
        <LFormItemInput label="输入框6" name="input6" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      toolbar={
        <Flex gap={8} flex={1}>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button type="primary" style={{ marginLeft: 'auto' }}>
            按钮4
          </Button>
          <Button type="primary">按钮5</Button>
        </Flex>
      }
      columns={columns}
      request={async (params, type) => {
        // console.log('===request请求之前==>', type, params);
        const res = await apiGetUserList(params, 95);
        // console.log('===request请求之后==>', type, params);
        return res;
      }}
    />
  );
};

export default App;
