import type { FormInstance } from 'antd';
import { Form, Input, Select } from 'antd';
import type { FormSlotProps } from 'lighting-design';

const { Option } = Select;

const ChildForm = (_props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => {
  return (
    <Form ref={ref}>
      <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请选择姓名' }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item name="age" label="年龄" rules={[{ required: true, message: '请选择年龄' }]}>
        <Input placeholder="请输入年龄" />
      </Form.Item>
      <Form.Item name="sex" label="性别" rules={[{ required: true, message: '请选择性别' }]}>
        <Select placeholder="请选择性别" allowClear>
          <Option value="1">男</Option>
          <Option value="0">女</Option>
        </Select>
      </Form.Item>
      <Form.Item name="state" label="类型" rules={[{ required: true, message: '请选择类型' }]}>
        <Select placeholder="请选择类型">
          <Option value="number">Male</Option>
          <Option value="string">string</Option>
          <Option value="boolean">boolean</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default ChildForm;
