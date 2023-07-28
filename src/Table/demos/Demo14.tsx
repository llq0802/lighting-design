import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const Demo14: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const formItems = [
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];
  return (
    <>
      <LTable
        rowKey="key"
        loading={{ size: 'large', tip: '加载中...' }}
        tableRef={tableRef}
        queryFormProps={{
          showColsNumber: 3,
          isEnterSubmit: false,
          submitter: {
            onReset() {},
            onSubmit() {},
          },
        }}
        showToolbar={false}
        toolbarLeft={
          <>
            <Button type="primary">新增</Button>
            <Button type="primary">编辑</Button>
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
        request={async (params, requestType) => {
          // console.log('==params==', params);
          // console.log('requestType ', requestType);
          const res: Record<string, any> = await apiGetUserList();
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
        tableRender={(doms) => {
          console.log('doms', doms);
          return (
            <>
              <div>{doms.searchFormDom}</div>
              {doms.tableDom}
            </>
          );
        }}
      />
    </>
  );
};

export default Demo14;
