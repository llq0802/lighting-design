import { useBoolean } from 'ahooks';
import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemInput, LFormItemSegmented, LFormItemSelect, LTable } from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import type { FC } from 'react';
import { useRef } from 'react';
import { awaitTime } from '../../test';
import SModal from './components/S-Modal';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemSelect
    label="下拉"
    name="select1"
    key="0"
    request={async () => {
      await awaitTime();
      return [
        { label: 'AAA', value: 'AAA' },
        { label: 'BBB', value: 'BBB' },
        { label: 'CCC', value: 'CCC' },
      ];
    }}
  />,

  <LFormItemInput key="1" name="input1" label="输入" />,
  <LFormItemSegmented
    key="2"
    label="单选"
    name="segmented1"
    block
    options={[
      { label: '外包', value: '0' },
      { label: '正式', value: '1' },
    ]}
  />,
];

const CacheLTable: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef1 = useRef<UseShowInstance>();
  return (
    <>
      <LTable
        requestCacheKey="my-LTable-27"
        tableLayout="fixed"
        tableRef={tableRef}
        queryFormProps={{
          isAntdReset: false,
        }}
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
              onClick={() =>
                tableRef.current?.onReset({
                  onReset: 'onReset',
                })
              }
            >
              onReset
            </Button>
            <Button
              type="primary"
              onClick={() =>
                tableRef.current?.onReload({
                  onReload: 'onReload',
                })
              }
            >
              onReload
            </Button>
            <Button
              type="primary"
              onClick={() =>
                tableRef.current?.onSearch({
                  onSearch: 'onSearch',
                })
              }
            >
              onSearch
            </Button>
            <Button
              type="primary"
              onClick={() =>
                tableRef.current?.onCustomSearch(2, 10, {
                  onCustomSearch: 'onCustomSearch',
                })
              }
            >
              onCustomSearch
            </Button>
          </>
        }
        defaultRequestParams={{
          aaa: '这是初始请求默认的请求参数',
        }}
        formItems={formItems}
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
      <SModal tableRef={tableRef} modalRef={modalRef1} />
    </>
  );
};

export default () => {
  const [state, { toggle }] = useBoolean(false);
  return (
    <div>
      <p>您可以多次单击该按钮，分页条件与表单数据将被缓存.</p>
      <p>
        <Button type="primary" onClick={() => toggle()}>
          {!state ? 'show 表格' : 'hide 表格'}
        </Button>
      </p>
      {state && <CacheLTable />}
    </div>
  );
};
