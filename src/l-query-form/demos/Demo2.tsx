import { Divider, Flex } from 'antd';
import { LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <Flex vertical>
      <LQueryForm
        isSpace
        onFinish={async (values) => {
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
        isSpace
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        submitter={{
          position: 'flex-start',
        }}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
      <Divider />

      <LQueryForm
        justify="end"
        isSpace
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        submitter={{
          position: 'flex-start',
        }}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
      <Divider />

      <LQueryForm
        justify="center"
        isSpace
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
        }}
        submitter={{
          position: 'flex-start',
        }}
        items={[
          <LFormItemInput name="input1" required label="输入框1" />,
          <LFormItemInput name="input2" required label="输入框2" />,
          <LFormItemInput name="input3" required label="输入框3" />,
        ]}
      />
    </Flex>
  );
};

export default Demo1;
