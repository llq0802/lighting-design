import { LForm, LFormItemCascader, LFormItemSelect } from 'lighting-design';

import china_city from './china_city.json';
const options: any[] = china_city;

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      onFinish={async (va) => {
        console.log('va', va);
      }}
    >
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
        name="cascader"
        required
        options={options}
        cascaderProps={{
          fieldNames: {
            label: 'name',
            value: 'code',
            children: 'children',
          },
          onChange(value) {
            console.log('value111', value);
          },
        }}
      />
    </LForm>
  );
};
export default Demo1;
