import { Button, Form } from 'antd';
import { LFormItemPassword } from 'lighting-design';

const Demo = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemInput" form={form}>
      <LFormItemPassword
        name="name"
        label="密码"
        tooltip="禁止空格"
        contentAfter={<div>后面</div>}
        passwordProps={{ placeholder: '请输入密码' }}
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
