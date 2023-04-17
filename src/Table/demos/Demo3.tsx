import type { FormInstance } from 'antd';
import { Button, Card } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
// import AddEditModal from './components/AddEditModal';
import { apiGetUserList, columns } from './service';

const Demo3: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const formItems = [
    <LFormItemInput key="0" name="input4" label="输入框" />,
    <LFormItemInput key="1" name="input5" label="输入框" />,
    <LFormItemInput key="2" name="input6" label="输入框" />,
    <LFormItemInput key="3" name="input7" label="输入框" />,
    <LFormItemInput key="4" name="input8" label="输入框" />,
  ];
  return (
    <LTable
      rowKey="key"
      tableRef={tableRef}
      toolbarLeft={
        <>
          <Button type="primary">新增</Button>
          {/* <AddEditModal /> */}
        </>
      }
      formItems={formItems}
      tableExtra={
        <Card
          bordered={false}
          bodyStyle={{ marginBottom: 16 }}
          style={{
            boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 3%), 0 1px 6px -1px rgba(0, 0, 0, 2%), 0 2px 4px 0 rgba(0, 0, 0, 2%)`,
          }}
        >
          tableExtra
        </Card>
      }
      toolbarActionConfig={{
        showDensity: false,
        showReload: false,
      }}
      formRef={formRef}
      columns={columns}
      request={async (params, requestType) => {
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

export default Demo3;
