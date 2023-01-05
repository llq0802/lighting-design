import { LForm, LFormItemAddress, LFormItemCascader, LFormItemSelect } from 'lighting-design';

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
        label="下拉选择"
        name="select"
        required
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c' },
        ]}
      />
      <LFormItemCascader label="级联选择" name="cascader" required options={options} />

      <LFormItemAddress
        label="地址选择"
        names={['location', 'address']}
        required
        options={options}
      />
    </LForm>
  );
};
export default Demo1;
