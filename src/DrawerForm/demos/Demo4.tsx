import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LDrawerForm
        initialValues={{ name: '张三' }}
        form={form}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开抽屉</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LDrawerForm>
    </div>
  );
};

export default Demo4;
