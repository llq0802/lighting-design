import { Button, Checkbox, Form, Input, message, Modal, Space } from 'antd';
import type { UseShowInstance, UseShowInstanceRef } from 'lighting-design';
import { useShow } from 'lighting-design';
import { useRef, useState } from 'react';

type ChildModelProps = {
  funcRef: UseShowInstanceRef;
};
function ChildModel({ funcRef }: ChildModelProps) {
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

const Parent = () => {
  const childModelRef = useRef<UseShowInstance>();

  const handleClickShow = () => {
    childModelRef.current?.onShow({
      name: '李岚清',
      age: 25,
      remember: true,
    });
  };
  const handleClickHide = () => {
    childModelRef.current?.onHide({
      name: '吴彦祖',
      age: 18,
      remember: false,
    });
  };

  const handleGetData = () => {
    const childData = childModelRef.current?.getChildData();
    message.info(`获得到子组件数据为:   ${JSON.stringify(childData, null, 2)}`);
  };

  return (
    <div style={{ border: '1px solid #888', padding: 20 }}>
      <h2>这是父组件</h2>
      <Space>
        <Button onClick={handleClickShow} type="primary">
          父组件调用onShow事件并传参数给子组件
        </Button>
        <Button onClick={handleClickHide}>
          父组件调用onHide事件并传参数给子组件
        </Button>
        <Button onClick={handleGetData}> 父组件获取子组件数据</Button>
      </Space>

      <ChildModel funcRef={childModelRef} />
    </div>
  );
};

export default Parent;
