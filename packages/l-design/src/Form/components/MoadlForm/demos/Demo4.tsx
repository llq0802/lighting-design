import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LModalForm
        initialValues={{ name: '张三' }}
        isResetFields={false}
        form={form}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </>
  );
};

export default Demo3;
