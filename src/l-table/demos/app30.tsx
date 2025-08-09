import { Alert } from 'antd';
import type { LTableActionRef } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo3: FC = () => {
  const actionRef = useRef<LTableActionRef>();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    preserveSelectedRowKeys: true,
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <LTable
      rowKey="id"
      actionRef={actionRef}
      rowSelection={rowSelection}
      formItems={formItems}
      queryFormProps={{
        showColsNumber: 3,
      }}
      pagination={{
        defaultPageSize: 6,
      }}
      tableExtra={
        selectedRowKeys.length ? (
          <Alert
            type="info"
            message={`已选择 ${selectedRowKeys.length} 条，共 ${actionRef.current?.pagination.total || 0} 条`}
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
      columns={columns}
      request={async (params, requestType) => {
        return await apiGetUserList(params);
      }}
    />
  );
};

export default Demo3;
