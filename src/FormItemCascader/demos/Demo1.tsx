import { LForm, LFormItemCascader } from 'lighting-design';
import china_city from './china_city.json';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      { value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
      },
      {
        value: 'nanjing2',
        label: 'Nanjing2',
        children: [{ value: 'zhonghuamen2', label: 'Zhong Hua Men2' }],
      },
    ],
  },
  {
    value: 'chongqing',
    label: 'ChongQing',
    children: [
      { value: 'jiangbei', label: 'JIANGBEI' },
      { value: 'yuzhong', label: 'YUZHONG' },
    ],
  },
];

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={async (va) => {
        console.log('va', va);
      }}
    >
      <LFormItemCascader
        label="级联选择1"
        name="cascader1"
        required
        options={china_city}
        showSearch
        fieldNames={{ label: 'name', value: 'code', children: 'children' }}
      />
      <LFormItemCascader
        label="级联选择2"
        name="cascader2"
        required
        options={china_city}
        expandTrigger="hover"
        fieldNames={{ label: 'name', value: 'code', children: 'children' }}
      />
      <LFormItemCascader
        label="级联选择"
        name="cascader3"
        required
        options={options}
        displayRender={(labels) => labels?.join(' > ')}
      />
      <LFormItemCascader label="级联选择" name="cascader4" required options={options} multiple />
    </LForm>
  );
};
export default Demo1;
