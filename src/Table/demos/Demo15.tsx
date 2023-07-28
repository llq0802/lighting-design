import { Button, ConfigProvider, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import type { CSSProperties, FC } from 'react';
import { useRef } from 'react';
import { columns, originData } from './service';

const formItems = [
  <LFormItemInput key="2" name="input2" />,
  <LFormItemInput key="3" name="input3" />,
  <LFormItemInput key="4" name="input4" />,
  <LFormItemInput key="5" name="input5" />,
  <LFormItemInput key="6" name="input6" />,
];

const publicCardProps = {
  style: {
    // background: '#133261',
    // backgroundColor: '#133261',
  } as CSSProperties,
};
// colorBgContainer: '#486295',

const data = originData.slice(0);

const Demo13: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            colorBgContainer: '#1b3160',
            colorTextHeading: '#fff',
            colorText: '#fff',
            colorBorderSecondary: '#5495fe',
            borderRadius: 0,
            colorFillAlter: '#3d75fe',
          },
          Input: {
            colorTextPlaceholder: '#f5f5f5',
            colorBgContainer: '#486295',
            colorBorder: '#133261',
          },
          Card: {
            colorBgContainer: '#152a52',
            borderRadiusLG: 0,
          },
          Pagination: {
            colorBgContainer: '#486295',
            colorText: '#fff',
            colorBorder: '#3d75fe',
          },
          Select: {
            colorBgElevated: '#3d75fe',
            colorBgContainer: '#3d75fe',
            colorBorder: '#3d75fe',
            colorText: '#fff',
            controlItemBgActive: '#1a2a52',
          },
        },
      }}
    >
      <LTable
        rowKey="key"
        toolbarLeft={
          <>
            <Button type="primary">新增</Button>
            <Button type="primary">审批</Button>
          </>
        }
        toolbarRight={
          <>
            <Button type="primary">上传</Button>
            <Button type="primary">导出</Button>
          </>
        }
        toolbarActionConfig={{
          style: { color: '#fff' },
        }}
        tableRef={tableRef}
        formRef={formRef}
        formCardProps={{
          ...publicCardProps,
          bodyStyle: {
            marginBottom: 0,
          },
        }}
        tableCardProps={{
          ...publicCardProps,
          bodyStyle: {
            paddingTop: 8,
          },
        }}
        pagination={{
          showQuickJumper: false,
          style: { color: '#fff' },
        }}
        formItems={formItems}
        columns={columns}
        request={async (params, type) => {
          // console.log('params', params);
          // console.log('type', type);
          await awaitTime();
          return {
            success: true,
            data,
            total: data?.length,
          };
        }}
      />
    </ConfigProvider>
  );
};

export default Demo13;
