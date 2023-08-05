import { useRequest } from 'ahooks';
import { Card, ConfigProvider, Skeleton, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import './Demos.less';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
  <LFormItemInput key="3" name="input7" label="输入框4" />,
  <LFormItemInput key="4" name="input8" label="输入框5" />,
];

const Demo16: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const { loading, runAsync } = useRequest(apiGetUserList, { manual: true });

  return (
    <>
      <LTable
        tableRef={tableRef}
        loading={false}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        toolbarActionConfig={{
          showFullscreen: false,
        }}
        request={async () => {
          const res = await runAsync();
          return {
            success: res.success,
            data: res.data,
            total: res.total,
          };
        }}
        tableRender={(doms) => {
          return (
            <ConfigProvider
            // theme={{
            //   components: {
            //     Skeleton: {
            //       colorFill: 'red',
            //       colorFillContent: 'blue',
            //     },
            //   },
            // }}
            >
              {doms.searchFormDom}
              <Card bordered={false}>
                <Skeleton
                  active
                  className="my-skeleton-1"
                  loading={loading}
                  title={{ width: '100%' }}
                  paragraph={{ rows: 10, width: '100%' }}
                >
                  {doms.tableDom}
                </Skeleton>
              </Card>
            </ConfigProvider>
          );
        }}
      />
      {/* {loading ? (
        <Skeleton
          active
          title={{ width: '100%' }}
          paragraph={{ rows: 11, width: '100%' }}
        />
      ) : (
        <LTable
          tableRef={tableRef}
          autoRequest={false}
          showToolbar={false}
          formItems={formItems}
          formRef={formRef}
          columns={columns}
          dataSource={dataSource?.data}
        />
      )} */}
    </>
  );
};

export default Demo16;
