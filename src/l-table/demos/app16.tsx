import { Button, Flex } from 'antd';
import Mock from 'better-mock';
import { LFormItemInput, LFormItemSelect, LTable, type LTableActionRef } from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import React, { useRef } from 'react';
import SDrawer from './components/s-drawer';
import SModal from './components/s-modal';
import { apiGetUserList, columns, type DataType } from './service';

type PropsType = {};

const App: React.FC<PropsType> = ({}) => {
  const modalRef = useRef<UseShowInstance>();
  const drawerRef = useRef<UseShowInstance>();
  const actionRef = useRef<LTableActionRef>();
  return (
    <>
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
            <Button type="primary" onClick={() => modalRef.current?.onShow({})}>
              Modal新增
            </Button>
            <Button
              type="primary"
              onClick={() =>
                modalRef.current?.onShow({
                  input: '编辑',
                  select: '1',
                  radio: 'a',
                })
              }
            >
              Modal编辑
            </Button>
            <Button
              type="primary"
              style={{
                marginInlineStart: 'auto',
              }}
              onClick={() => drawerRef.current?.onShow({})}
            >
              Drawer新增
            </Button>
            <Button
              type="primary"
              onClick={() =>
                drawerRef.current?.onShow({
                  input: '编辑',
                  select: '1',
                  radio: 'a',
                })
              }
            >
              Drawer编辑
            </Button>
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

      <SModal actionRef={actionRef} modalRef={modalRef} />
      <SDrawer actionRef={actionRef} drawerRef={drawerRef} />
    </>
  );
};

export default App;
