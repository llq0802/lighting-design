import { Button, Checkbox, Form, Input, message, Modal, Space } from 'antd';
import type { OnShowInstance } from 'rc-use-hooks';
import { useShow } from 'rc-use-hooks';
import type { RefObject } from 'react';
import { useRef, useState } from 'react';

const demo1 = () => {
  const childModelRef = useRef<OnShowInstance>(null);

  const handleClickShow = () => {
    childModelRef.current?.onShow({
      name: '李岚清',
      age: 25,
      remember: true,
    });
  };
  const handleClickHide = () => {
    childModelRef.current?.onHide({
      name: '李岚清',
      age: 25,
      remember: true,
    });
  };

  const handleGetData = () => {
    const childData = childModelRef.current?.getChildData();

    message.info(`子组件数据为:   ${JSON.stringify(childData, null, 2)}`);
    console.log(' childData', childData);
  };

  return (
    <div>
      <Space>
        <Button onClick={handleClickShow}> 父组件调用onShow事件并传参数给子组件</Button>
        <Button onClick={handleClickHide}> 父组件调用onHide事件并传参数给子组件</Button>
        <Button onClick={handleGetData}> 父组件获取子组件数据</Button>
      </Space>

      <ChildModel funcRef={childModelRef} />
    </div>
  );
};

export default demo1;

type ChildModelProps = {
  funcRef: RefObject<OnShowInstance>;
};
function ChildModel({ funcRef }: ChildModelProps) {
  const [open, setOpen] = useState(false);

  const { parentData, setParentData } = useShow(funcRef, {
    onShow: (data: Record<string, any>) => {
      console.log('父组件调用了onShow并传参数 ', data);
      setOpen(true);
    },

    onHide: (data) => {
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

  return (
    <>
      <Modal open={open} title="子组件的弹窗" onOk={handleOk} onCancel={() => setOpen(false)}>
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

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 5, span: 19 }}>
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
