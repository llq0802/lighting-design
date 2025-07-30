import { LForm, LFormItemCascader } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import { useState } from 'react';
import china_city from './china_city.json';

const opts = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{ value: 'hangzhou', label: 'Hangzhou', children: [{ value: 'xihu', label: 'West Lake' }] }],
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
interface Option {
  value: string | number;
  label: React.ReactNode;
  children?: Option[];
  isLeaf?: boolean;
}
const optionLists: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const Demo1 = () => {
  const [form] = LForm.useForm();

  const [options, setOptions] = useState<Option[]>(optionLists);
  const loadData = (selectedOptions: Option[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return (
    <LForm
      form={form}
      onFinish={async (va) => {
        console.log('va', va);
      }}
    >
      <LFormItemCascader label="multiple" name="cascader4" required options={opts} multiple />
      <LFormItemCascader
        variant="filled"
        label="showSearch"
        name="cascader1"
        required
        options={china_city}
        showSearch
        fieldNames={{ label: 'name', value: 'code', children: 'children' }}
      />
      <LFormItemCascader
        label="fieldNames"
        name="cascader2"
        required
        options={china_city}
        expandTrigger="hover"
        fieldNames={{ label: 'name', value: 'code', children: 'children' }}
      />
      <LFormItemCascader
        label="displayRender"
        name="cascader3"
        options={opts}
        displayRender={(labels) => labels?.join(' > ')}
      />
      <LFormItemCascader
        label="request"
        name="cascader4"
        required
        request={async () => {
          await sleep();
          return china_city;
        }}
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'children',
        }}
      />

      <LFormItemCascader label="loadData" name="cascader5" options={options} loadData={loadData} changeOnSelect />
    </LForm>
  );
};
export default Demo1;
