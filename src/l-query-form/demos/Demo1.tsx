import { Flex } from 'antd';
import { LForm, LFormItemInput, LQueryForm } from 'lighting-design';
import { sleep } from 'lighting-design/test';

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <>
      <LQueryForm
        // isSpace
        // formItemBottom={10}
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
          position: 'flex-start',
        }}
        items={[
          {
            content: (
              <Flex>
                <span>999</span>
                <LFormItemInput name="input1" required label="输入框1" />
              </Flex>
            ),
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
