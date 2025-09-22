import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LModalForm
        draggableProps
        initialValues={{ name: '张三' }}
        form={form}
        title="新增"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </div>
  );
};

export default Demo3;
