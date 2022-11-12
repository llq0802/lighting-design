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
        disabledWhiteSpace
        alignItems="end"
        contentAfter={<div>后面</div>}
        inputProps={{ placeholder: '请输入名字' }}
      />
      <LFormItemInput
        dependencies={['name']}
        name="phone"
        label="手机号"
        required
        tooltip="禁止空格 只能输入数字"
        type="phone"
        disabledWhiteSpace
        contentAfter={<div>后面</div>}
        inputProps={{ placeholder: '请输入手机号' }}
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
