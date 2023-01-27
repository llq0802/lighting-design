import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LTable } from 'lighting-design';
import type { FC } from 'react';
import { useRef } from 'react';
import AddEditModal from './components/AddEditModal';
import { apiGetUserList, columns } from './service';

const Demo1: FC = () => {
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
      isSort
      loading={{ size: 'large' }}
      tableRef={tableRef}
      queryFormProps={{
        showColsNumber: 3,
      }}
      toolbarLeft={
        <>
          <Button
            type="primary"
            onClick={() => {
              console.log(' tableRef', tableRef);
            }}
          >
            新增
          </Button>
          <AddEditModal />
        </>
      }
      toolbarRight={<Button type="primary">导出</Button>}
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
      // expandable={{
      //   onExpand: async (isOPen, record) => {
      //     if (isOPen) {
      //       // console.log('record', record);
      //       await setState({
      //         parentId: Math.random().toString(16).slice(2),
      //       });
      //       tableRef.current!.onReload();
      //     }
      //   },
      // }}
    />
  );
};

export default Demo1;
