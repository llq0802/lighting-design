import { LForm, LFormItemAddress } from 'lighting-design';
import './styles.less';

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
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemAddress
        label="地址"
        required
        name="aaa111"
        options={options}
        placeholder={['请选择省市', '请输入银行支行']}
      />
      <LFormItemAddress
        label="地址2"
        required
        name="aaa2"
        options={options}
        cascaderProps={{
          style: {
            width: '50%',
          },
        }}
      />
    </LForm>
  );
};
export default Demo1;
