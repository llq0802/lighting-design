import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import { json2Excel } from '../utils';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemInput key="0" name="input4" label="输入框" />,
  <LFormItemInput key="1" name="input5" label="输入框" />,
  <LFormItemInput key="2" name="input6" label="输入框" />,
  <LFormItemInput key="3" name="input7" label="输入框" />,
  <LFormItemInput key="4" name="input8" label="输入框" />,
];

const Demo: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  const request = async (params, requestType) => {
    const res: Record<string, any> = await apiGetUserList(params);
    return {
      success: true,
      data: res.data,
      total: res.total,
    };
  };

  const toolbarLeft = (
    <>
      <Button type="primary">新增</Button>
      <Button type="primary">审批</Button>
    </>
  );
  const toolbarRight = (
    <>
      <Button
        onClick={() => {
          json2Excel({
            columns: columns as Parameters<typeof json2Excel>[0]['columns'],
            data: tableRef.current?.tableData as Record<string, any>,
          });
        }}
      >
        导出表格
      </Button>
    </>
  );

  const toolbarActionConfig = {
    orders: {
      reload: 4,
      density: 3,
      fullscreen: 2,
      columnSetting: 1,
    },
  };
  return (
    <LTable
      toolbarActionConfig={toolbarActionConfig}
      rowKey="key"
      tableRef={tableRef}
      toolbarLeft={toolbarLeft}
      toolbarRight={toolbarRight}
      formItems={formItems}
      formRef={formRef}
      columns={columns}
      request={request}
    />
  );
};

export default Demo;
