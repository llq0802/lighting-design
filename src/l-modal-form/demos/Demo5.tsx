import { Button, ConfigProvider, message } from 'antd';
import {
  LForm,
  LFormItemCascader,
  LFormItemCheckbox,
  LFormItemDate,
  LFormItemInput,
  LFormItemNumber,
  LFormItemRadio,
  LFormItemSelect,
  LFormItemSwitch,
  LFormItemTextarea,
  LFormItemTime,
  LFormItemTreeSelect,
  LModalForm,
} from 'lighting-design';
import { sleep } from '../../test';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <ConfigProvider
        theme={{
          // 统一设置
          token: {
            colorBgTextActive: '#000',
            colorBgContainer: '#486295', // 组件容器背景颜色
            colorBorder: '#486295', // 边框颜色
            colorText: '#fff', // 组件字体颜色
            colorIcon: '#fff', // 组件内置图标颜色(关闭等)
            colorIconHover: '#888',
            colorTextPlaceholder: '#d1dce6', // 控制 Placeholder 颜色
            colorBgElevated: '#486295', // 组件内浮层(下拉)的容器背景
            controlItemBgActive: '#1a2a52', // 控制组件项在激活状态下的背景颜色。
            controlItemBgHover: '#1a2a52', // 控制组件项在鼠标悬浮时的背景颜色
            colorTextHeading: '#fff', // 组价标题标题
            controlOutlineWidth: 0, // 输入组件外线
            colorSplit: '#486295', // 组件内分割线颜色
          },

          components: {
            // 单独给抽屉设置
            Modal: {
              colorBgElevated: '#1b3160',
            },
          },
        }}
      >
        <LModalForm
          modalTop="16vh"
          title="弹窗"
          form={form}
          onFinish={async (values) => {
            console.log('onFinish-values ', values);
            await sleep();
            message.success('提交成功');
            return true;
          }}
          trigger={<Button type="primary">打开弹窗</Button>}
        >
          <LFormItemInput name="input" required label="输入框" />
          <LFormItemNumber name="LFormItemNumber" label="金额" required />
          <LFormItemSelect
            required
            name="select3"
            label="下拉框"
            options={[
              { value: '1', label: '有效' },
              { value: '0', label: '无效' },
            ]}
          />
          <LFormItemCascader label="级联选择" name="LFormItemCascader" required options={options} />
          <LFormItemTreeSelect label="树形选择" name="LFormItemTreeSelect" required treeData={options} />
          <LFormItemCheckbox
            label="多选框"
            required
            name="LFormItemCheckbox"
            options={[
              { label: '上班', value: '1' },
              { label: '睡觉', value: '2' },
              { label: '打豆豆', value: '3' },
            ]}
          />
          <LFormItemRadio
            label="单选"
            name="LFormItemRadio2"
            required
            request={async () => {
              await sleep();
              return [
                { label: 'Unresolved', value: 'open' },
                { label: 'Resolved', value: 'closed' },
                { label: 'Resolving', value: 'processing' },
              ];
            }}
          />
          <LFormItemTime required placeholder="请选择时间" label="时间选择" name="LFormItemTime" />
          <LFormItemDate required placeholder="请选择日期" label="日期选择" name="LFormItemDate" />
          <LFormItemTextarea name="LFormItemTextarea" label="备注" />
          <LFormItemSwitch name="LFormItemSwitch" label="开关" />
        </LModalForm>
      </ConfigProvider>
    </div>
  );
};

export default Demo1;
