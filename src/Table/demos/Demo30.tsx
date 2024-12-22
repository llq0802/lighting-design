import type { FormInstance } from 'antd';
import { Alert, Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
];

const Demo3: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    preserveSelectedRowKeys: true,
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <LTable
      rowKey="key"
      rowSelection={rowSelection}
      tableRef={tableRef}
      toolbarLeft={<Button type="primary">新增</Button>}
      toolbarRight={<Button type="primary">审批</Button>}
      formItems={formItems}
      // tableExtra='也可以把 Alert 放这'
      tableHeaderRender={() =>
        selectedRowKeys.length ? (
          <Alert
            style={{ marginBottom: 10 }}
            message={`已选择 ${selectedRowKeys.length} 项，共 ${
              tableRef.current?.pagination.total || 0
            } 项`}
            type="info"
            action={
              <a
                onClick={() => {
                  onSelectChange([]);
                }}
              >
                取消选择
              </a>
            }
          />
        ) : null
      }
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
  );
};

export default Demo3;
