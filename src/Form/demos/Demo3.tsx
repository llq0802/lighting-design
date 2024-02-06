import { Button, Space } from 'antd';
import { LForm, LFormItemInput } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LForm
        form={form}
        labelWidth={90}
        // 不能使用回车键提交
        isEnterSubmit={false}
        onFinish={async (values) => {
          console.log('自定义提交 / 重置按钮onFinish-values ', values);
        }}
        onReset={() => {
          console.log('== onReset ====>');
        }}
        submitter={{
          buttonAlign: 'center',
          resetButtonProps: {
            onClick() {
              console.log('== onClick ====>');
            },
          },
          render(dom) {
            return (
              <Space>
                <Button>自定义按钮</Button>
                <Button>返回</Button>
                {dom}
              </Space>
            );
          },
        }}
      >
        <LFormItemInput name="name" label="姓名" />
      </LForm>
    </>
  );
};

export default Demo5;
