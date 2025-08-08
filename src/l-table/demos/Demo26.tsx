import type { FormInstance } from 'antd';
import { Button, Card, Space } from 'antd';
import type { LTableInstance } from 'lighting-design';
import {
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemNumber,
  LFormItemNumberRange,
  LFormItemRadio,
  LFormItemSegmented,
  LFormItemSelect,
  LTable,
} from 'lighting-design';
import type { UseShowInstance } from 'rc-use-hooks';
import type { FC } from 'react';
import { useRef } from 'react';
import { sleep } from '../../test';
import SModal from './components/s-modal';
import { apiGetUserList, columns } from './service';

const formItems = [
  <LFormItemSelect
    label="下拉"
    name="select1"
    key="0"
    request={async () => {
      await sleep();
      return [
        { label: 'Unresolved', value: 'open' },
        { label: 'Resolved', value: 'closed' },
      ];
    }}
  />,
  <LFormItemInput key="1" name="input1" label="输入" />,
  <LFormItemSegmented
    initialValue=""
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
  <LFormItemNumberRange key="4" label="范围" name="numberRange1" placeholder={['请输入左边', '请输入右边']} />,
  <LFormItemDatePicker key="5" name="date2" label="日期2" />,
  <LFormItemDatePicker key="7" name="date1" label="日期1" rangePicker ownColSpans={{ xl: 12, xxl: 12 }} />,
  <LFormItemRadio
    key="8"
    ownColSpans={{ xl: 12, xxl: 12 }}
    optionType="button"
    buttonStyle="solid"
    label="组合"
    name="radio1"
    options={[
      { label: '前端', value: '1' },
      { label: '后端', value: '2' },
    ]}
    contentInline
    contentAfter={
      <Space>
        <Button danger type="dashed">
          按钮1
        </Button>
        <Button type="primary">按钮2</Button>
      </Space>
    }
  />,
  // <Space key="9">
  //   <Button>按钮4</Button>
  //   <Button danger type="dashed">
  //     按钮5
  //   </Button>
  //   <Button type="primary">按钮6</Button>
  // </Space>,
];

const Demo: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef1 = useRef<UseShowInstance>();
  return (
    <>
      <LTable
        sticky
        bordered
        showHeader
        title={(currentPageData) => 'antd.Header'}
        footer={(currentPageData) => 'antd.Footer'}
        tableExtra={<Card style={{ marginBottom: 16 }}>tableExtra</Card>}
        tableHeaderRender={() => <Card style={{ marginBottom: 16 }}>tableHeaderRender</Card>}
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
            重置请求传递额外请求参数
          </Button>
        }
        defaultRequestParams={{ a: 111 }}
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

export default Demo;
