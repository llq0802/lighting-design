import { Button, Form, Input, Select, Space } from 'antd';
import { LFormItem } from 'lighting-design';
import AgeSelect from './components/AgeSelect';

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
        <LFormItem name="l-sex" label="性别" required>
          <Select
            placeholder="选择性别"
            options={[
              { value: '1', label: '男' },
              { value: '0', label: '女' },
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
          dependencies={['sex']}
        >
          <AgeSelect />
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
