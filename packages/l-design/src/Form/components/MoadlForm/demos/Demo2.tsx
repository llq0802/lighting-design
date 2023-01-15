import { Button, message } from 'antd';
import { LForm, LFormItemInput, LModalForm } from 'lighting-design';
import { awaitTime } from '../../../../_utils';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LModalForm
      form={form}
      title="新增"
      onFinish={async (values) => {
        console.log('onFinish-values ', values);
        await awaitTime();
        message.success('提交成功');
        return true;
      }}
      submitter={{
        buttonAlign: 'left',
        render(dom) {
          return (
            <>
              <Button onClick={() => form.setFieldsValue({ name: null })}>重置</Button>
              {dom}
            </>
          );
        },
      }}
      trigger={<Button type="primary">新增</Button>}
    >
      <LFormItemInput name="name" required label="姓名" />
    </LModalForm>
  );
};

export default Demo1;
