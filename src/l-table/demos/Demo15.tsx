import { Button, ConfigProvider, Tag, Watermark, type FormInstance } from 'antd';
import type { LTableInstance } from 'lighting-design';
import { LFormItemDatePicker, LFormItemInput, LFormItemSelect, LTable } from 'lighting-design';
import { awaitTime } from 'lighting-design/test';
import type { FC } from 'react';
import { useRef } from 'react';
import { columns, originData } from './service';

const formItems = [
  <LFormItemInput key="2" name="input2" label="输入框" />,
  <LFormItemSelect
    key="3"
    name="select3"
    label="下拉框"
    options={[
      { value: '1', label: '有效' },
      { value: '0', label: '无效' },
    ]}
  />,
  <LFormItemSelect
    key="1"
    name="select2"
    label="下拉框"
    options={[
      { value: '2', label: '类型A' },
      { value: '1', label: '类型B' },
      { value: '0', label: '类型C' },
    ]}
    selectProps={{
      mode: 'multiple',
    }}
  />,
  <LFormItemInput key="4" name="input4" label="输入框" />,
  <LFormItemInput key="5" name="input5" label="输入框" />,
  <LFormItemDatePicker
    ownColSpans={{
      xl: 12,
      xxl: 12,
    }}
    rangePicker
    key="6"
    name="date6"
    label="时间项"
    disabledDateBefore={1}
  />,
];
const data = originData.slice(0);

const Demo15: FC = () => {
  const formRef = useRef<FormInstance>();
  const tableRef = useRef<LTableInstance>();

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            colorBgContainer: '#1b3160', // 表格组件的背景颜色
            colorFillAlter: '#486295', // 表格内容hover时的背景颜色与标题列的背景颜色
            colorTextHeading: '#fff', // 表格头部列标题的文字颜色
            colorText: '#fff', // 表格内容的文字颜色
            colorBorderSecondary: '#5495fe', // 表格内容边框的颜色
            borderRadiusLG: 0, // 表格头部列左右的圆角
          },
          Card: {
            colorBgContainer: '#152a52', // 卡片组件的背景颜色
            borderRadiusLG: 0, // 卡片组件的圆角
          },
          Form: {
            colorTextHeading: '#fff', // 表单label的文字颜色
          },
          Input: {
            colorBgContainer: '#486295', // 组件背景颜色
            colorTextPlaceholder: '#d1dce6', // 控制Placeholder颜色
            colorBorder: '#486295', // 边框颜色
            colorText: '#fff', // 输入的字体颜色
          },
          Select: {
            colorBgContainer: '#486295', // 组件背景颜色
            colorBgElevated: '#486295', // 组件内浮层(下拉)的容器背景
            colorBorder: '#486295', // 边框颜色
            colorText: '#fff', // 输入的字体颜色
            colorTextPlaceholder: '#d1dce6', // 控制Placeholder颜色
            controlItemBgActive: '#1a2a52', // 控制组件项在激活状态下的背景颜色。
            controlItemBgHover: '#1a2a52', // 控制组件项在鼠标悬浮时的背景颜色
          },

          DatePicker: {
            colorBgContainer: '#486295', // 组件背景颜色
            colorBgElevated: '#486295', // 组件内浮层(下拉)的容器背景
            colorBorder: '#486295', // 边框颜色
            colorText: '#fff', // 输入的字体颜色
            colorTextPlaceholder: '#d1dce6', // 控制Placeholder颜色
            colorTextHeading: '#fff', // 表格头部列标题的文字颜色
            controlItemBgActive: '#3d75fe', // 控制组件项在激活状态下的背景颜色。
            controlItemBgHover: '#1a2a52', // 控制组件项在鼠标悬浮时的背景颜色
            colorIcon: '#fff', // 面板左右箭头
          },

          Pagination: {
            colorText: '#fff', // 组件的字体颜色
            itemActiveBg: '#4d6194', // 页码激活态背景色
            colorBgTextHover: '#f45c20', // 悬停状态下的背景色。
            colorPrimary: '#fff', //
          },
          Button: {
            colorBgContainer: '#486295', // 组件容器背景颜色
          },
        },
      }}
    >
      <Watermark
        content="Lighting Design"
        font={{
          fontSize: 16,
          color: 'rgba(0,0,0,.35)',
        }}
      >
        <LTable
          rowKey="key"
          showHover="#426396"
          // showStripe="#152a52"
          isSort={{
            render(page) {
              return <Tag color="#108ee9">{page}</Tag>;
            },
          }}
          fullScreenBgColor="#000"
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
          toolbarActionConfig={{ style: { color: '#fff' } }}
          tableRef={tableRef}
          formRef={formRef}
          queryFormProps={{ submitter: { resetButtonProps: { ghost: true } } }}
          formCardProps={{ style: { marginBottom: 0 } }}
          tableCardProps={{
            // bodyStyle: { paddingTop: 8 }
            styles: {
              body: {
                paddingTop: 8,
              },
            },
          }}
          pagination={{ showQuickJumper: false }}
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
      </Watermark>
    </ConfigProvider>
  );
};

export default Demo15;
