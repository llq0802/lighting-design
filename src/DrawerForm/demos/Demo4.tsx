import { Button, message } from 'antd';
import { LDrawerForm, LForm, LFormItemInput } from 'lighting-design';
import { awaitTime } from '../../_test';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <div>
      <LDrawerForm
        // submitter={{
        //   submitButtonProps: {
        //     // icon: <TeamOutlined />,
        //   },
        // }}
        initialValues={{ name1: '张三' }}
        form={form}
        title="新增"
        // isAntdReset={false}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await awaitTime();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开抽屉</Button>}
      >
        <LFormItemInput name="name1" required label="姓名1" />
        <LFormItemInput name="name2" required label="姓名2" />
      </LDrawerForm>
    </div>
  );
};

export default Demo4;
