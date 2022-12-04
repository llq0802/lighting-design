import { Button, Form } from 'antd';
import { LFormItemInput, LFormItemSwitch } from 'lighting-design';
import { useState } from 'react';

const Demo1 = () => {
  const [form] = Form.useForm();
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
      <LFormItemSwitch
        name="state"
        label="状态"
        required
        tooltip="禁止空格"
        contentAfter={<div>后面</div>}
        switchProps={{
          className: 'abvs',
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
