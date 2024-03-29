import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
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
    </>
  );
  const toolbarRight = (
    <>
      <Button type="primary">审批</Button>
    </>
  );

  return (
    <LTable
      scroll={{
        y: 400,
        x: 1200,
      }}
      toolbarActionConfig={{
        showFullscreen: false,
        showColumnSetting: false,
      }}
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
