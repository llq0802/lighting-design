import { Button, message, Space } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo6 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();

  return (
    <Space>
      <LDrawerForm
        width="100vw"
        initialValues={{ name: '张三' }}
        form={form1}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开抽屉1(从右到左)</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LDrawerForm>
      <LDrawerForm
        placement="bottom"
        drawerProps={{ height: '100vh' }}
        initialValues={{ name: '张三' }}
        form={form2}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开抽屉2(从下到上)</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LDrawerForm>
    </Space>
  );
};

export default Demo6;
