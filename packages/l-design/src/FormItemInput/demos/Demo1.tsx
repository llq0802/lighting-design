import { Button, Form } from 'antd';
import { LFormItemInput } from 'lighting-design';

const Demo = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemInput" form={form}>
      <LFormItemInput
        name="name"
        label="名字"
        required
        tooltip="禁止空格"
        // rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
        disabledWhiteSpace
        alignItems="end"
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
export default Demo;
