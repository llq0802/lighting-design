import { Button, Form } from 'antd';
import { LFormItemNumber, LFormItemPassword, LFormItemTextArea } from 'lighting-design';

const Demo = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemInput" form={form}>
      <LFormItemPassword
        name="password"
        label="密码"
        required
        tooltip="禁止空格"
        disabledWhiteSpace
        contentAfter={<div>后面</div>}
        passwordProps={{ placeholder: '请输入密码' }}
      />
      <LFormItemTextArea
        required
        name="beizhu"
        label="备注"
        contentAfter={<div>后面</div>}
        textAreaProps={{ placeholder: '请输入备注' }}
      />
      <LFormItemNumber
        required
        name="num"
        label="数字"
        contentAfter={<div>后面</div>}
        numberProps={{ placeholder: '请输入数字' }}
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
