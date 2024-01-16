import { Input } from 'antd';
import { LForm, LFormItem } from 'lighting-design';

const Demo6 = () => {
  const [form] = LForm.useForm();
  return (
    <>
      <LForm
        form={form}
        labelCol={{ flex: '110px' }}
        submitter={{ buttonAlign: 110 }}
        onFinish={(values) => {
          console.log('onFinish-values', values);
        }}
      >
        <LFormItem
          label="姓名"
          name="username"
          hasFeedback
          validateFirst
          required
          validateDebounce={300}
          tooltip=" getValueFromEvent 方法可自定义表单收集到的值"
          extra="温馨提示: 本组件可向下兼容原 antd 的 <Form.Item/>"
          getValueFromEvent={(...args: any[]) => {
            console.log('==args====>', args);
            // 可自定义表单收集到的值
            return args[0].target.value;
          }}
        >
          <Input placeholder="通过 getValueFromEvent 方法可自定义表单收集到的值" />
        </LFormItem>
      </LForm>
    </>
  );
};

export default Demo6;
