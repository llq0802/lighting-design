import { Form, message } from 'antd';
import {
  LForm,
  LFormItemAddress,
  LFormItemCascader,
  LFormItemCheckbox,
  LFormItemColor,
  LFormItemDatePicker,
  LFormItemInput,
  LFormItemRadio,
  LFormItemSelect,
  LFormItemTextArea,
  LFormItemTimePicker,
} from 'lighting-design';

const options: any[] = [
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
  const [form] = Form.useForm();
  return (
    <>
      <LForm
        labelWidth={90}
        submitter={{ buttonAlign: 90 }}
        name="LForm"
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />
        <LFormItemInput name="input" required label="输入框" />
        <LFormItemTextArea name="textAreaProps" required label="备注" />
        <LFormItemSelect
          label="select选择"
          name="select"
          all
          required
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' },
          ]}
        />
        <LFormItemCheckbox
          label="选择"
          name="LFormItemCheckbox"
          beforeAll={{
            onChange(e) {
              console.log(e);
            },
          }}
          required
          options={[
            { label: '上班', value: '' },
            { label: '睡觉', value: '2' },
            { label: '打豆豆', value: '3' },
          ]}
        />
        <LFormItemRadio
          label="选择"
          name="LFormItemRadio"
          // all
          required
          options={[
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
            { label: '空', value: '' },
          ]}
        />

        <LFormItemCascader label="级联选择" name="cascader" required options={options} />

        <LFormItemAddress
          label="地址选择"
          names={['location', 'address']}
          required
          options={options}
        />

        <LFormItemDatePicker
          label="日期选择"
          name="date1"
          required
          disabledDateAfter={1}
          rangePicker
          // disabledDateBefore={1}
        />
        <LFormItemDatePicker
          label="日期选择"
          name="LFormItemDatePicker"
          required
          // disabledDateAfter={1}
          disabledDateBefore={1}
        />

        <LFormItemTimePicker label="时间选择" name="LFormItemTimePicker" required rangePicker />
        <LFormItemTimePicker label="时间选择" name="LFormIteer" />
      </LForm>
    </>
  );
};

export default Demo1;
