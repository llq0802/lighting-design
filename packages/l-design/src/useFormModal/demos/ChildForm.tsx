import type { FormInstance } from 'antd';
import { Form, Input, Select } from 'antd';
import type { FormSlotProps } from 'lighting-design';

const { Option } = Select;

const ChildForm = (props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => {
  // const [form] = Form.useForm();
  // ref.current = form;
  console.log('props', props);

  return (
    <Form ref={ref} name="control-hooks">
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="年龄" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="sex" label="性别" required>
        <Select placeholder="Select a option and change input text above" allowClear>
          <Option value="nan">男</Option>
          <Option value="nv">女</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.sex !== currentValues.sex}
      >
        {({ getFieldValue }) =>
          getFieldValue('sex') === 'nan' ? (
            <Form.Item name="desc" label="描述" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
    </Form>
  );
};

export default ChildForm;
