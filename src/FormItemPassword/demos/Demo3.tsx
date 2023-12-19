import { LForm, LFormItemPassword } from 'lighting-design';
import renderFieldWithPopover from '../../FormItemInput/demos/renderFieldWithPopover';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      submitter={{ buttonAlign: 'center', isAntdReset: true }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemPassword
        className="myLFormItemInput"
        name="password1"
        label="密码1"
        required
        disabledWhiteSpace={false}
      />
      <LFormItemPassword
        name="password2"
        label="密码2"
        required
        min={6}
        validateTrigger="onChange"
      />
      <LFormItemPassword name="password3" label="高强度密码" required highPassWord />

      <LFormItemPassword
        required
        validateTrigger="onChange"
        label="自定义渲染"
        name="with-popover6"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({
          content: '该方案可用于所有自定义表单项',
        })}
      />
    </LForm>
  );
};
export default Demo3;
