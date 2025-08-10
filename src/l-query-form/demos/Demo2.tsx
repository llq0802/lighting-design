import { Divider, Flex } from 'antd';
import { LFormItemInput, LQueryForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <Flex vertical>
      <LQueryForm
        layout="inline"
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
        layout="inline"
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
        layout="inline"
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
        layout="inline"
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
