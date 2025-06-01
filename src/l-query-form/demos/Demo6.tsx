import { Button, Space } from 'antd';
import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        isApproachLastItem
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        submitter={{
          render(dom) {
            return (
              <Space>
                <Button type="primary">新增</Button>
                {dom}
              </Space>
            );
          },
        }}
      >
        <LFormItemInput name="input1" required label="输入框1" />
        <LFormItemInput name="input2" required label="输入框2" />
      </LQueryForm>
    </>
  );
};

export default Demo1;
