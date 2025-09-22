import { Button, Flex } from 'antd';
import { LForm, LFormItemInput } from 'lighting-design';

const Demo5 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LForm
        name="form3"
        form={form}
        labelWidth={90}
        // 不能使用回车键提交
        onFinish={async (values) => {
          console.log('自定义提交 / 重置按钮onFinish-values ', values);
        }}
        submitter={{
          onReset() {
            console.log('== onReset ====>');
          },
          onSubmit() {
            console.log('== onSubmit ====>');
          },
          resetButtonProps: {
            onClick() {
              console.log('== onClick ====>');
            },
          },
          renderSubmitter(doms, props) {
            return (
              <Flex gap={16} justify="center" align="center">
                <Button>自定义按钮</Button>
                <Button>返回</Button>
                {doms.resetDom}
                {doms.submitDom}
              </Flex>
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
