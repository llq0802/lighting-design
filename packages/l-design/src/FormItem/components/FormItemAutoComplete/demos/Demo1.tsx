import { LForm, LFormItemAutoComplete } from 'lighting-design';
import { useState } from 'react';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});
const Demo1 = () => {
  const [form] = LForm.useForm();
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    console.log('searchText', searchText);
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  return (
    <LForm name="FormItemAutoComplete" form={form}>
      <LFormItemAutoComplete
        label="邮箱"
        required
        name="name"
        onSearch={onSearch}
        options={options}
      />
    </LForm>
  );
};
export default Demo1;
