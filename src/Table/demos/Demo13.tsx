import { Button, ConfigProvider, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/_test';
import type { CSSProperties, FC } from 'react';
import { useRef } from 'react';
import styles from './Demo.module.less';
import { columns, originData } from './service';

const formItems = [
  // 添加类名 修改样式
  <LFormItemInput key="1" name="input1" />,
  <LFormItemInput key="2" name="input2" />,
  <LFormItemInput key="3" name="input3" />,
  <LFormItemInput key="4" name="input4" />,
  <LFormItemInput key="5" name="input5" />,
  <LFormItemInput key="6" name="input6" />,
];

const publicCardProps = {
  style: {
    borderRadius: 0,
    background: '#133261',
    backgroundColor: '#133261',
  } as CSSProperties,
};

const data = originData.slice(0);

const Demo13: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: '#486295',
            colorBorder: '#486295',
            colorTextPlaceholder: '#fff',
          },
        },
      }}
    >
      <LTable
        rowKey="key"
        className={styles.container} // antd 表格类名
        rootClassName={styles.root_container} // LTable 组件的根div类名
        rowClassName={styles.row_container} // antd 表格每一行的类名
        onHeaderRow={(col, i) => {
          return {
            className: styles.header_row,
          };
        }}
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
        queryFormProps={{
          // 添加类名 修改样式
          showColsNumber: 3,
        }}
        formCardProps={{
          style: {
            ...publicCardProps.style,
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
          // 修改分页的样式
          // itemRender(
          //   page: number,
          //   type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
          //   element: React.ReactNode,
          // ) {
          //   return element;
          // },
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
            total: data.length,
          };
        }}
      />
    </ConfigProvider>
  );
};

export default Demo13;
