import { Button, Space } from 'antd';
import { LForm, LFormItemInput } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LForm
        labelWidth={90}
        submitter={{
          buttonAlign: 90,
          showReset: false,
          render(dom) {
            return (
              <Space>
                <Button>返回</Button>
                {dom}
              </Space>
            );
          },
        }}
        name="LForm-transformValues"
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LForm>
    </>
  );
};

export default Demo5;
