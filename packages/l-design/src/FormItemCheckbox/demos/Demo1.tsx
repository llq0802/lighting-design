import { Button, Form } from 'antd';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { LFormItemInput } from 'lighting-design';
import { useState } from 'react';
import LFormItemCheckbox from '..';

const Demo1 = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState<CheckboxValueType[]>(['1']);
  const [opts, setOpts] = useState([]);

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemInput
        name="userName"
        label="名字"
        required
        tooltip="禁止空格"
        disabledWhiteSpace
        alignItems="end"
        contentAfter={<div>后面</div>}
        inputProps={{ placeholder: '请输入名字' }}
      />
      <LFormItemCheckbox
        label="选择"
        name="select"
        beforeAll={{
          label: '全选',
          value: 'all',
          disabled: false,
          style: {
            marginRight: 10,
          },
        }}
        required
        options={[
          { label: '上班', value: '1' },
          { label: '睡觉', value: '2' },
          { label: '打豆豆', value: '3' },
        ]}
        checkboxProps={{
          value,
          onChange: (checkedValue) => {
            console.log(checkedValue);
            setValue(checkedValue);
          },
        }}
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
