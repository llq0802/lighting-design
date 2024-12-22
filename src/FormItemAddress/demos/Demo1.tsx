import { LForm, LFormItemAddress } from 'lighting-design';
import { useEffect, useState } from 'react';
import china_city from '../../FormItemCascader/demos/china_city.json';
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
        name="Address1"
        leftProps={{
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
        label="地址选择"
        required
        options={china_city}
      />
      <LFormItemAddress
        name="Address2"
        variant="filled"
        label="设置弹出层高度"
        leftProps={{
          popupClassName: 'my-lform-item-address-popup',
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
        required
        options={AREA_DATA}
      />

      <LFormItemAddress
        name="Address3"
        label="左侧宽度设置"
        leftWidth="30%"
        required
        options={AREA_DATA}
        leftProps={{
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
        }}
      />

      <LFormItemAddress
        label="开户银行"
        required
        name="Address4"
        options={options}
        placeholder={['请选择省市区', '请输入银行支行']}
      />
    </LForm>
  );
};
export default Demo1;
