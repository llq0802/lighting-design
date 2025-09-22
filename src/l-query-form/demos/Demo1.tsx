import { Divider, Flex } from 'antd';
import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <Flex vertical>
      <LQueryForm
        form={form}
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
      <Divider />
      <LQueryForm
        form={form}
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        items={[
          <LFormItemInput name="input4" required label="输入框1" />,
          <LFormItemInput name="input5" required label="输入框2" />,
          <LFormItemInput name="input6" required label="输入框3" />,
          <LFormItemInput name="input7" required label="输入框3" />,
          <LFormItemInput name="input8" required label="输入框3" />,
          <LFormItemInput name="input9" required label="输入框3" />,
          <LFormItemInput name="input10" required label="输入框3" />,
        ]}
      />
      <Divider />
      <LQueryForm
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        submitter={{
          position: 'flex-start',
        }}
        items={[
          <LFormItemInput name="input11" required label="输入框1" />,
          <LFormItemInput name="input12" required label="输入框2" />,
          <LFormItemInput name="input13" required label="输入框3" />,
        ]}
      />
      <Divider />

      <LQueryForm
        gap={32}
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        submitter={{
          submitText: '确定',
        }}
        items={[
          <LFormItemInput name="input11" required label="输入框1" />,
          <LFormItemInput name="input12" required label="输入框2" />,
          <LFormItemInput name="input13" required label="输入框3" />,
        ]}
      />
    </Flex>
  );
};

export default Demo1;
