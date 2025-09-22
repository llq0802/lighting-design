import { Divider } from 'antd';
import { LFormItemDate, LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <>
      <LQueryForm
        column={3}
        items={[
          <LFormItemInput name="inpu1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
          <LFormItemInput name="input4" required label="输入框4" />,
          <LFormItemInput name="input5" required label="输入框5" />,
        ]}
      />

      <Divider></Divider>
      <LQueryForm
        column={4}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
          <LFormItemInput name="input4" required label="输入框4" />,
          {
            content: <LFormItemDate rangePicker name="input6" required label="日期" />,
            colProps: {
              span: 12,
            },
          },
        ]}
      />
    </>
  );
};

export default Demo1;
