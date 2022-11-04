import { Button, Form } from 'antd';
import { LFormItemInput } from 'lighting-design';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemInput" form={form}>
      <LFormItemInput
        name="name"
        alignItems="end"
        type="phone"
        label="名字"
        required
        // rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
        disabledWhiteSpace
        contentAfter={<div>后面</div>}
        inputProps={{ placeholder: '请输入名字' }}
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
    </Form>
  );
};
