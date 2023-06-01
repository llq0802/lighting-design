import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { awaitTime } from '../../_test';
import { apiGetUserList, columns } from './service';

const Demo4: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const [isReady, setIsReady] = useState(false);
  const [initialValues, setInitialValues] = useState<any>();

  useEffect(() => {
    // 异步获取表单初始值
    (async () => {
      await awaitTime('', 3000);
      setInitialValues({ input4: '初始值1' });
      setIsReady(true);
    })();
  }, []);

  const formItems = [
    <LFormItemInput key="0" name="input4" label="输入框" />,
    <LFormItemInput key="1" name="input5" label="输入框" />,
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];

  return (
    <LTable
      isReady={isReady}
      formInitialValues={initialValues}
      rowKey="key"
      tableRef={tableRef}
      toolbarLeft={
        <>
          <Button type="primary">新增</Button>
        </>
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
    />
  );
};

export default Demo4;
