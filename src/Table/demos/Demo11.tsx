import { LoadingOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Button, Space } from 'antd';
import type { LTableInstance, UseShowInstance } from 'lighting-design';
import { LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import SModal from './components/S-Modal';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemSelect
    label="下拉框"
    name="select1"
    key="select1"
    options={[
      { label: 'Unresolved', value: 'open' },
      { label: 'Resolved', value: 'closed' },
      { label: 'Resolving', value: 'processing' },
    ]}
  />,
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef = useRef<UseShowInstance>();

  return (
    <>
      <LTable
        rowKey="key"
        loading={{
          size: 'large',
          tip: '加载中...',
          indicator: <LoadingOutlined />,
        }}
        tableRef={tableRef}
        toolbarLeft={
          <>
            <Button
              type="primary"
              onClick={() => {
                modalRef.current?.onShow({});
              }}
            >
              新增
            </Button>
            <Button
              type="primary"
              onClick={() => {
                modalRef.current?.onShow({
                  radio: 'a',
                  input: '编辑',
                  select: '1',
                });
              }}
            >
              编辑
            </Button>
          </>
        }
        queryFormProps={{
          // isApproachLastItem: true,
          showColsNumber: 2,
          submitter: {
            render(dom) {
              return (
                <Space>
                  <Button type="primary">审批</Button>
                  <Button type="primary">导出</Button>
                  {dom}
                </Space>
              );
            },
          },
        }}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        request={async (params, requestType) => {
          const res: Record<string, any> = await apiGetUserList(params);
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />
      <SModal modalRef={modalRef} tableRef={tableRef} />
    </>
  );
};

export default Demo;
