import { LForm, LFormItemCascader, LFormItemSelect } from 'lighting-design';

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
    <LForm name="LFormItemSelect" form={form}>
      <LFormItemSelect
        label="select选择"
        name="select"
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />

      <LFormItemCascader
        label="级联选择"
        name={'cascader'}
        required
        dependencies={['select']}
        debounceTime={1000}
        request={async (params) => {
          console.log('request-params', params);
          // if (!params) return [];
          return options;
        }}
      />
    </LForm>
  );
};
export default Demo1;
