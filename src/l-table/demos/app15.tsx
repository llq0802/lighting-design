import { Button, Flex } from 'antd';
import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect, LTable, type LTableActionRef } from 'lighting-design';
import React, { useRef } from 'react';
import SDrawerAddButton from './components/s-drawer-add-button';
import SDrawerEditButton from './components/s-drawer-edit-button';
import SModalAddButton from './components/s-modal-add-button';
import SModalEditButton from './components/s-modal-edit-button';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  const actionRef = useRef<LTableActionRef>();
  return (
    <LTable<DataType>
      rowKey="id"
      actionRef={actionRef}
      formItems={[
        <LFormItemInput label="输入框1" name="input1" />,
        <LFormItemInput label="输入框2" name="input2" />,
        <LFormItemSelect
          label="下拉框1"
          name="select1"
          options={Mock.mock({ 'list|5': [{ label: '@cname', value: '@id' }] }).list}
        />,
      ]}
      toolbar={
        <Flex gap={8} flex={1}>
          <SModalAddButton actionRef={actionRef} />
          <SModalEditButton actionRef={actionRef} />
          <Button
            style={{
              marginInlineStart: 'auto',
            }}
          >
            导出
          </Button>
          <SDrawerAddButton actionRef={actionRef} />
          <SDrawerEditButton actionRef={actionRef} />
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
