import { ConfigProvider, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo14: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <LTable
        rowKey="key"
        tableRef={tableRef}
        queryFormProps={{
          showColsNumber: 3,
          isEnterSubmit: false,
        }}
        showToolbar={false}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        request={async (params, requestType) => {
          // console.log('==params==', params);
          // console.log('==requestType==', requestType);
          const res: Record<string, any> = await apiGetUserList();
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
        tableRender={(doms) => {
          // console.log('doms', doms);
          return (
            // 自定义一些组装
            <>
              {doms.searchFormDom}
              {doms.tableDom}
            </>
          );
        }}
      />
    </ConfigProvider>
  );
};

export default Demo14;
