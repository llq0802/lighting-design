import { Button, Form, Input, Select, Space } from 'antd';
import { LFormItem } from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();
  // const nameValue = Form.useWatch('name', form);
  return (
    <>
      <Form name="Form1" form={form} preserve={false}>
        <LFormItem name="name" className="l-name" label="姓名" contentAfter={<div>后面</div>}>
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

        <LFormItem shouldUpdate={(prevV, curV) => prevV.select !== curV.select}>
          {({ getFieldValue }) =>
            getFieldValue('select') === 'a' ? (
              <LFormItem
                name="age"
                className="l-age"
                label="年龄"
                alignItems="end"
                contentAfter={<div>后面</div>}
              >
                <Input placeholder="年龄" />
              </LFormItem>
            ) : null
          }
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
            form.setFieldsValue({ name: '1' });
          }}
        >
          设置
        </Button>
      </Space>
    </>
  );
};

export default Demo1;
