import { Button, Form } from 'antd';
import { LFormItemAddress, LFormItemCascader, LFormItemSelect } from 'lighting-design';
import { useState } from 'react';

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
  const [opts, setOpts] = useState([]);

  return (
    <Form name="LFormItemSelect" form={form}>
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

      <LFormItemCascader
        label="级联选择"
        // name={['sheng', 'shi', 'qu']}
        name={'cascader'}
        required
        // options={options}
        dependencies={['select']}
        debounceTime={300}
        request={async (params) => {
          console.log('request-params', params);
          // if (!params) return [];
          return options;
        }}
      />

      <LFormItemAddress
        label="地址选择"
        names={['location', 'address']}
        required
        options={options}
      />

      <Button
        onClick={() => {
          form.validateFields().then((res) => {
            console.log(' res ', res);
          });
        }}
      >
        验证
      </Button>
      <Button
        onClick={() => {
          console.log(' form.getFieldsValue()  ', form.getFieldsValue());
        }}
      >
        获取
      </Button>
      <Button
        onClick={() => {
          setOpts([]);
        }}
      >
        强制更新
      </Button>
    </Form>
  );
};
export default Demo1;
