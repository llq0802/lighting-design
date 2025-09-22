import { Button, Divider, Flex, Space } from 'antd';
import { LForm, LFormItemInput, LFormItemSegmented, LFormItemSwitch, LQueryForm } from 'lighting-design';
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
          <LFormItemInput name="input1" label="输入框1" />,

          {
            content: (
              <Space>
                <LFormItemInput name="input2" label="输入框2" />
                <LFormItemSegmented
                  initialValue="List"
                  name="LFormItemSegmented"
                  options={[
                    { label: 'List', value: 'List' },
                    { label: 'Kanban', value: 'Kanban' },
                  ]}
                />
              </Space>
            ),
          },
          {
            content: (
              <Space>
                <LFormItemInput name="input3" label="输入框3" />
                <LFormItemSwitch name="LFormItemSwitch" />
              </Space>
            ),
          },
        ]}
      />
      <Divider />

      <LQueryForm
        onFinish={async (values) => {
          await sleep();
          console.log('onFinish-values ', values);
        }}
        items={[
          {
            content: (
              <Space>
                <LFormItemInput name="input2" label="输入框2" />
                <LFormItemSegmented
                  initialValue="Kanban"
                  name="LFormItemSegmented"
                  options={[
                    { label: 'List', value: 'List' },
                    { label: 'Kanban', value: 'Kanban' },
                  ]}
                />
              </Space>
            ),
          },
          {
            content: (
              <Flex gap={8}>
                <LFormItemInput name="input3" label="输入框3" />
                <Button>按钮</Button>
              </Flex>
            ),
          },
        ]}
        submitter={{
          renderSubmitter(doms, props) {
            return (
              <Flex gap={8}>
                <Button>按钮</Button>
                {doms.resetDom}
                {doms.submitDom}
              </Flex>
            );
          },
        }}
      />
    </Flex>
  );
};

export default Demo1;
