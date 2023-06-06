import { Checkbox, Form, Input, message, Modal } from 'antd';
import type { UseShowInstanceRef } from 'lighting-design';
import { useShow } from 'lighting-design';
import { useState } from 'react';

type ChildModelProps = {
  funcRef: UseShowInstanceRef;
};
export default function ChildModel({ funcRef }: ChildModelProps) {
  const [open, setOpen] = useState(false);

  const { parentData, setParentData } = useShow(funcRef, {
    onShow: (data: Record<string, any>) => {
      message.info(
        `父组件调用了onShow并传参数${JSON.stringify(data, null, 2)}`,
      );
      console.log('父组件调用了onShow并传参数 ', data);
      setOpen(true);
    },

    onHide: (data) => {
      message.info(
        `父组件调用了onHide并传参数${JSON.stringify(data, null, 2)}`,
      );

      console.log('父组件调用了onHide并传参数 ', data);
      setOpen(false);
    },
  });

  const handleOk = () => {
    setParentData({
      title: '我是子组件数据',
      value: 99,
    });
    setOpen(false);
  };

  const handleCancel = () => {
    setParentData(null);
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        title="这是子组件的弹窗"
        onOk={handleOk}
        onCancel={handleCancel}
        okText="点我向父组件传数据"
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          initialValues={parentData}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 5, span: 19 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <span>父组件传过来的值: </span>
            <pre>{JSON.stringify(parentData, null, 4)}</pre>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
