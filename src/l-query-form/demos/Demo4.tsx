import { Divider } from 'antd';
import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        layout="vertical"
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        items={[
          <LFormItemInput name="inpu1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
      <Divider></Divider>
      <LQueryForm
        layout="vertical"
        submitter={{
          position: 'flex-start',
        }}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        items={[
          <LFormItemInput name="inpu1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
      <Divider></Divider>
      <LQueryForm
        justify={'end'}
        layout="vertical"
        submitter={{
          position: 'flex-start',
        }}
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        items={[
          <LFormItemInput name="inpu1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
    </>
  );
};

export default Demo1;
