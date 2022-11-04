import { Button, Form, Input } from 'antd';
import { LFormItem } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form name="Form1" form={form}>
        <LFormItem
          className="zxc"
          tooltip="这是提示"
          name="name"
          label="Description"
          contentAfter={<div>789</div>}
          contentProps={{ type: 'number' }}
          renderField={(dom) => {
            console.log('dom ', dom);

            return <Input />;
          }}
        >
          789
        </LFormItem>
      </Form>

      <Button
        onClick={() => {
          console.log(' form', form.getFieldsValue());
        }}
      >
        获取
      </Button>
      <Button
        onClick={() => {
          form.setFieldsValue({ name: '1' });
        }}
      >
        设置
      </Button>
    </>
  );
};

export default Demo1;
