import type { FormInstance } from 'antd';
import { Button } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemNumberRange,
  LFormItemSegmented,
  LFormItemSelect,
  LTable,
} from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import type { FC } from 'react';
import { useRef } from 'react';
import { awaitTime } from '../../_test';
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
        { label: 'Unresolved', value: 'open' },
        { label: 'Resolved', value: 'closed' },
        { label: 'Resolving', value: 'processing' },
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
  <LFormItemNumber key="3" name="inputNumber1" label="数字输入" />,
  <LFormItemNumberRange
    key="5"
    label="范围"
    name="numberRange1"
    placeholder={['请输入左边', '请输入右边']}
  />,
  <LFormItemDatePicker
    key="4"
    name="date1"
    label="日期"
    rangePicker
    ownColSpans={{ xl: 12, xxl: 12 }}
  />,
];

const Demo1: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef1 = useRef<UseShowInstance>();
  return (
    <>
      <LTable
        rowKey="key"
        tableLayout="fixed"
        rowClassName="lightd-table-row-1"
        rootClassName="my-table-root-1"
        className="my-table-1"
        tableRef={tableRef}
        queryFormProps={{
          showColsNumber: 3,
          isCollapsed: false,
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
          <Button
            type="primary"
            onClick={() =>
              tableRef.current?.onReset({
                abc: 999,
              })
            }
          >
            重置表单,分页并重新请求传递额外请求参数
          </Button>
        }
        defaultRequestParams={{
          a: 111,
        }}
        onChange={(...args) => {
          console.log('== onChange ====>', args);
        }}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        request={async (params, requestType) => {
          console.log('==查询框Demo1-params====>', params);
          console.log('==查询框Demo1-requestType====>', requestType);
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

export default Demo1;
