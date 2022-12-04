import { Button, Form } from 'antd';
import { useState } from 'react';
import FormItemAutoComplete from '..';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});
const Demo1 = () => {
  const [form] = Form.useForm();
  const [opts, setOpts] = useState([]);
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    console.log('searchText', searchText);
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  return (
    <Form name="LFormItemSelect" form={form}>
      <FormItemAutoComplete
        label="名字"
        required
        name="name"
        onSearch={onSearch}
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
