import type { FormInstance } from 'antd';
import { Button, Empty } from 'antd';
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
  <LFormItemNumberRange key="5" label="范围" name="numberRange1" placeholder={['请输入左边', '请输入右边']} />,
  <LFormItemDatePicker key="4" name="date1" label="日期" rangePicker ownColSpans={{ xl: 12, xxl: 12 }} />,
];

const Demo1: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();
  const modalRef1 = useRef<UseShowInstance>();
  return (
    <>
      <LTable
        showHover="#3e9bed"
        showStripe
        rowKey="key"
        rowClassName="lightd-table-row-1"
        rootClassName="my-table-root-1"
        className="my-table-1"
        tableRef={tableRef}
        queryFormProps={{
          showColsNumber: 3,
          isCollapsed: false,
          onFinish(values) {
            console.log('==查询框Demo1-values====>', values);
          },
        }}
        emptyRender={() => <Empty style={{ margin: '160px 0' }} />}
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
        onChange={(...args) => {
          console.log('== onChange ====>', args);
        }}
        formItems={formItems}
        formRef={formRef}
        columns={columns}
        request={async (params, requestType) => {
          console.log('==查询框Demo1-params====>', params);
          console.log('==查询框Demo1-requestType====>', requestType);
          const res: Record<string, any> = await apiGetUserList(params, 1500);
          return {
            success: true,
            data: res.data,
            total: res.total,
          };
        }}
      />
      <SModal tableRef={tableRef} modalRef={modalRef1} />

      {/* 
  处理表格在全屏状态下 antd一些弹出层组件(Modal)无法显示问题
  全屏本质上是把你的表格区域 fixed 了，所以你需要把 Modal等组件 的 getPopupContainer 设置为了 table 的区域 */}
      {/* 如果没有使用表格的全屏 (toolbarActionConfig为false或toolbarActionConfig.showFullscreen=false)，就不用包裹 ConfigProvider */}
      {/* 除了下面的方式包裹,也可以设置 Modal 的 getContainer 方法来代替 <ConfigProvider/>, 也可以把 Modal当做 LTable的 children */}
      {/* <ConfigProvider getPopupContainer={() => tableRef.current?.rootRef.current || document.body}>
        <SModal tableRef={tableRef} modalRef={modalRef1} />
      </ConfigProvider> */}
    </>
  );
};

export default Demo1;
