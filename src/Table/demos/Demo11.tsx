import { LoadingOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance, UseShowInstance } from 'lighting-design';
import { LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { awaitTime } from '../../_test';
import SModal from './components/S-Modal';
import { apiGetUserList, columns } from './service';

const Demo: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef = useRef<UseShowInstance>();
  const [loading, setLoading] = useState<boolean>(false);

  const formItems = [
    <LFormItemSelect
      label="下拉框"
      name="select1"
      key="select1"
      request={async () => {
        const result = await awaitTime([
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]);
        if (result.success) return result.data;
      }}
    />,
    <LFormItemInput key="0" name="input4" label="输入框" />,
    <LFormItemInput key="1" name="input5" label="输入框" />,
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];
  return (
    <>
      <LTable
        rowKey="key"
        loading={{
          spinning: loading,
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
        toolbarRight={
          <Button type="primary" onClick={() => tableRef.current?.onReset()}>
            重置表单并重新请求
          </Button>
        }
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        requestOptions={{
          onFinally() {
            setTimeout(() => {
              setLoading(false);
            }, 3000);
          },
        }}
        request={async (params, requestType) => {
          // console.log('==params==', params);
          // console.log('requestType ', requestType);
          setLoading(true);
          const res: Record<string, any> = await apiGetUserList();
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
