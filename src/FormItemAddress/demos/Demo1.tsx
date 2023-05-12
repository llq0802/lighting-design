import { LForm, LFormItemAddress } from 'lighting-design';
import { useEffect, useState } from 'react';
import './styles.less';

const optionsData: any[] = [
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
  const [options, setOptions] = useState(optionsData);
  const [AREA_DATA, set_AREA_DATA] = useState([]);

  useEffect(() => {
    fetch('https://unpkg.com/province-city-china@8.5.6/dist/level.json')
      .then((res) => res.json())
      .then((result) => {
        set_AREA_DATA(result);
      });
  }, []);

  return (
    <LForm
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
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemAddress
        cascaderProps={{
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
        label="地址选择"
        required
        names={['location', 'address']}
        options={AREA_DATA}
      />
      <LFormItemAddress
        label="设置弹出层高度"
        cascaderProps={{
          popupClassName: 'my-lform-item-address-popup',
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
        required
        names={['location9', 'address9']}
        options={AREA_DATA}
      />

      <LFormItemAddress
        label="左右各占一半"
        required
        names={['location2', 'address1']}
        options={AREA_DATA}
        cascaderProps={{
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
        cascaderColProps={{ xs: 24, md: 12, lg: 12, xxl: 12 }}
        inputColProps={{ xs: 24, md: 12, lg: 12, xxl: 12 }}
      />

      <LFormItemAddress
        label="开户银行"
        required
        names={['location1', 'address2']}
        options={options}
        placeholder={['请选择省市', '请输入银行支行']}
      />
    </LForm>
  );
};
export default Demo1;
