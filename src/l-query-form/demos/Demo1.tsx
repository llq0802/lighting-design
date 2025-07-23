import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        // layout="vertical"
        form={form}
        showColsNumber={3}
        // isCollapsed={false}
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        submitter={{
          isEnterSubmit: true,
          position: 'flex-end',
        }}
        items={[
          {
            content: <LFormItemInput name="input1" required label="输入框1" />,
          },
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
          <LFormItemInput name="input4" required label="输入框3" />,
          <LFormItemInput name="input5" required label="输入框3" />,
        ]}
      />
    </>
  );
};

export default Demo1;
