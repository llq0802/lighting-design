import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { apiGetUserList, columns } from './service';

const Demo7: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  useEffect(() => {
    // 也可以为URL的参数
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        input4: '输入框1',
        input5: '输入框2',
      });
      // 手动发起请求
      tableRef.current?.onSearch();
    }, 2000);
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
      // 关闭自动请求
      autoRequest={false}
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
        // console.log('tableRef ', tableRef.current);
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

export default Demo7;
