import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import { useRef, type FC } from 'react';
import SDrawer from './components/S-Drawer';
import SModal from './components/S-Modal';
import { apiGetUserList, columns } from './service';

const Demo: FC = () => {
  const modalRef1 = useRef<UseShowInstance>();
  const modalRef2 = useRef<UseShowInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <>
      <LTable
        tableRef={tableRef}
        toolbarActionConfig={false}
        columns={columns}
        toolbarLeft={
          <>
            <Button
              type="primary"
              onClick={() => {
                modalRef1.current?.onShow({});
              }}
            >
              新增
            </Button>
            <Button
              type="primary"
              onClick={() => {
                modalRef1.current?.onShow({
                  input: '吴彦祖',
                  radio: 'a',
                  select: '1',
                });
              }}
            >
              编辑
            </Button>
          </>
        }
        toolbarRight={
          <>
            <Button
              type="primary"
              onClick={() => {
                modalRef2.current?.onShow({});
              }}
            >
              导出
            </Button>
            <Button
              type="primary"
              onClick={() => {
                modalRef2.current?.onShow({
                  input: '陈冠希',
                  radio: 'b',
                  select: '0',
                });
              }}
            >
              审批
            </Button>
          </>
        }
        request={async (params) => {
          const res: Record<string, any> = await apiGetUserList(params);
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />

      <SModal tableRef={tableRef} modalRef={modalRef1} />
      <SDrawer tableRef={tableRef} modalRef={modalRef2} />
    </>
  );
};

export default Demo;
