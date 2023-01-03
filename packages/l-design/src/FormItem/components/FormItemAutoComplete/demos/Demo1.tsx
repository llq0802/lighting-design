import TextArea from 'antd/lib/input/TextArea';
import { LForm, LFormItemAutoComplete } from 'lighting-design';
import { useState } from 'react';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});

const Demo1 = () => {
  const [form] = LForm.useForm();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText, 1), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  return (
    <LForm name="FormItemAutoComplete" form={form}>
      <LFormItemAutoComplete
        label="自动联想"
        required
        name="LFormItemAutoComplete"
        onSearch={onSearch}
        options={options}
      />
      <LFormItemAutoComplete
        label="自定义输入框"
        required
        name="LFormItemAutoComplete1"
        onSearch={onSearch}
        options={options}
        renderInput={() => <TextArea className="custom" style={{ height: 50 }} />}
      />
    </LForm>
  );
};
export default Demo1;
