import { Button, Flex, Form, Input, message } from 'antd';
import { LForm, LFormItemRadio, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <Flex gap={8}>
      <LModalForm
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <LFormItemRadio
          label="单选2"
          name="radio"
          required
          options={[
            { label: 'AA', value: 'a' },
            { label: 'BB', value: 'b' },
            { label: 'CC', value: 'c' },
          ]}
        />

        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </LModalForm>

      <LModalForm
        centered
        form={form}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">centered</Button>}
      >
        <Form.Item name="title2" label="Title">
          <Input />
        </Form.Item>
      </LModalForm>
    </Flex>
  );
};

export default Demo1;
