import { Button, Flex, message } from 'antd';
import { LForm, LFormItemInput, LFormItemRadio, LModalForm } from 'lighting-design';
import { sleep } from '../../test';

const Demo1 = () => {
  const [form1] = LForm.useForm();
  const [form2] = LForm.useForm();
  const [form3] = LForm.useForm();

  return (
    <Flex gap={8}>
      <LModalForm
        form={form1}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">打开弹窗</Button>}
      >
        <LFormItemInput name="name1" required label="姓名" />
        <LFormItemRadio
          label="单选2"
          name="radio"
          required
          options={[
            { label: 'AA', value: 'a' },
            { label: 'BB', value: 'b' },
            { label: 'CC', value: 'c' },
          ]}
        />
      </LModalForm>
      <LModalForm
        centered
        form={form2}
        title="弹窗"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        trigger={<Button type="primary">centered</Button>}
      >
        <LFormItemInput name="name2" required label="姓名" />
      </LModalForm>
      <LModalForm
        width="40%"
        form={form3}
        title="弹窗3"
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          await sleep();
          message.success('提交成功');
          return true;
        }}
        afterOpen={() => {
          form3.setFieldsValue({ name: '法外狂徒' });
        }}
        trigger={<Button type="primary"> 使用 afterOpen 编辑回显</Button>}
      >
        <LFormItemInput name="name" required label="姓名" />
      </LModalForm>
    </Flex>
  );
};

export default Demo1;
