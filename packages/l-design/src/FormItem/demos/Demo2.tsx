import { Button, Form, Input, Select, Space } from 'antd';
import { LFormItem } from 'lighting-design';

const Demo2 = () => {
  const [form] = Form.useForm();
  // const nameValue = Form.useWatch('name', form);
  return (
    <>
      <Form name="Form1" form={form} preserve={false}>
        <LFormItem
          name="name"
          className="l-name"
          label="姓名"
          contentAfter={<div>后面</div>}
          required
        >
          <Input />
        </LFormItem>

        <LFormItem name="select" label="选择">
          <Select
            placeholder="Search to Select"
            options={[
              { value: 'a', label: 'AA' },
              { value: 'b', label: 'BB' },
              { value: 'c', label: 'CC' },
            ]}
          />
        </LFormItem>

        <LFormItem
          required
          name="age"
          className="l-age"
          label="年龄"
          alignItems="end"
          contentAfter={<div>岁</div>}
          dependencies={['name', 'select']}
        >
          {/* <Input placeholder="年龄" /> */}
          <Input placeholder="年龄" />
        </LFormItem>
      </Form>

      <Space>
        <Button
          onClick={() => {
            console.log(' form', form.getFieldsValue());
          }}
        >
          获取
        </Button>
        <Button
          onClick={() => {
            form.validateFields();
          }}
        >
          验证
        </Button>
      </Space>
    </>
  );
};

export default Demo2;
