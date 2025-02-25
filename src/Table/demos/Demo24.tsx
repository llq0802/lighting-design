import type { Table } from 'antd';
import { Button, Empty, Tag } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LTable } from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import { useEffect, useRef, type FC } from 'react';
import { columns } from '../demos/service';
import SDrawer from './components/S-Drawer';
import SModal from './components/S-Modal';
import { apiGetUserList } from './service';

const Demo: FC = () => {
  const modalRef1 = useRef<UseShowInstance>();
  const modalRef2 = useRef<UseShowInstance>();
  const tableRef = useRef<LTableInstance>();
  const tblRef: Parameters<typeof Table>[0]['ref'] = useRef(null);

  useEffect(() => {
    console.log('==tblRef.currentscrollTo====>', tblRef.current!.scrollTo);
    console.log('==tblRef.currentnativeElement====>', tblRef.current!.nativeElement);
  }, []);

  return (
    <>
      <LTable
        ref={tblRef}
        emptyRender={() => <Empty style={{ margin: '175px 0' }} />}
        isSort={{
          render(pageCount) {
            return <Tag>{pageCount}</Tag>;
          },
        }}
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
              抽屉1
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
              抽屉2
            </Button>
          </>
        }
        request={async (params, requestType) => {
          console.log('==基础用法-params====>', params);
          console.log('==基础用法-requestType====>', requestType);
          const res: Record<string, any> = await apiGetUserList(params);
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
        defaultRequestParams={{
          aaa: '999',
        }}
      />

      <SModal tableRef={tableRef} modalRef={modalRef1} />
      <SDrawer tableRef={tableRef} modalRef={modalRef2} />
    </>
  );
};

export default Demo;
