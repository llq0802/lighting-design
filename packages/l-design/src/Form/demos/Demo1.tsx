import { Form, message } from 'antd';
import {
  LForm,
  LFormItemColor,
  LFormItemInput,
  LFormItemSelect,
  LFormItemTextArea,
} from 'lighting-design';

const Demo1 = () => {
  const [form] = Form.useForm();
  return (
    <>
      <LForm
        submitter={{
          buttonAlign: 'center',
        }}
        name="LForm"
        form={form}
        onFinish={async (values) => {
          console.log('onFinish-values ', values);
          message.success('提交成功');
          return true;
        }}
      >
        <LFormItemColor colorType="chrome" label="颜色选择" name="color" required />
        <LFormItemInput name="input" required label="输入框" />
        <LFormItemTextArea name="textAreaProps" required label="备注" />
        <LFormItemSelect
          label="select选择"
          name="select"
          all
          required
          options={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' },
          ]}
        />
      </LForm>
    </>
  );
};

export default Demo1;
