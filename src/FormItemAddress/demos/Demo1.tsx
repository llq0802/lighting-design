import { LForm, LFormItemAddress } from 'lighting-design';
import { useState } from 'react';

const options1: any[] = [
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

  const [options, setOptions] = useState(options1);

  return (
    <LForm
      name="LFormItemAddress"
      form={form}
      submitter={{
        buttonAlign: 'center',
        resetText: '更新',
        resetButtonProps: {
          preventDefault: true,
          onClick() {
            setOptions((item) => [...item]);
          },
        },
      }}
      onValuesChange={(a, v) => {
        console.log(' a', a);
        console.log(' v', v);
      }}
    >
      <LFormItemAddress
        label="地址选择"
        required
        names={['location', 'address']}
        options={options}
      />

      <LFormItemAddress
        label="开户银行"
        required
        names={['location1', 'address2']}
        options={options}
        placeholder={['请选择省市', '请输入银行支行']}
      />
      <LFormItemAddress
        label="各占一半"
        required
        names={['location2', 'address1']}
        options={options}
        cascaderColProps={{ xs: 24, md: 12, lg: 12, xxl: 12 }}
        inputColProps={{ xs: 24, md: 12, lg: 12, xxl: 12 }}
      />
    </LForm>
  );
};
export default Demo1;
