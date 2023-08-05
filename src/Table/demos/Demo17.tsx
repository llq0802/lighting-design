import { useRequest } from 'ahooks';
import type { FormInstance } from 'antd';
import { ConfigProvider, Skeleton } from 'antd';
import { LFormItemInput, LTable } from 'lighting-design';
import { useRef } from 'react';
import './Demo17.less';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框1" />,
  <LFormItemInput key="1" name="input5" label="输入框2" />,
  <LFormItemInput key="2" name="input6" label="输入框3" />,
  <LFormItemInput key="3" name="input7" label="输入框4" />,
  <LFormItemInput key="4" name="input8" label="输入框5" />,
];

function Demo17() {
  const formRef = useRef<FormInstance>();
  const { loading, runAsync } = useRequest(apiGetUserList, { manual: true });

  return (
    <LTable
      rowKey="key"
      showToolbar={false}
      formItems={formItems}
      formRef={formRef}
      columns={columns}
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
            theme={{
              components: {
                Skeleton: {
                  colorFill: 'red',
                  colorFillContent: 'blue',
                },
              },
            }}
          >
            <Skeleton
              active
              className="my-skeleton-2"
              loading={loading}
              title={{ width: '100%' }}
              paragraph={{ rows: 10, width: '100%' }}
            >
              {doms.finallyDom}
            </Skeleton>
          </ConfigProvider>
        );
      }}
    />
  );
}

export default Demo17;
