import { LForm, LFormItemInput } from 'lighting-design';
import IdentifyCode from './IdentifyCode';
import renderFieldWithPopover from './renderFieldWithPopover';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemInput
        className="myLFormItemInput-4"
        name="name"
        label="名字"
        required
      />

      <LFormItemInput
        name="name1"
        label="启用空格"
        disabledWhiteSpace={false}
        required
        tooltip="启用空格"
      />
      <LFormItemInput
        name="chinese"
        label="中文汉字"
        required
        tooltip="中文"
        type="chinese"
        messageVariables={{ label: '请输入中文!' }}
      />
      <LFormItemInput
        name="phone"
        label="手机号"
        type="phone"
        required
        messageVariables={{ label: '请输入正确的手机号格式!' }}
      />
      <LFormItemInput
        name="email"
        type="email"
        label="邮箱"
        required
        messageVariables={{ label: '请输入正确的邮箱格式!' }}
      />
      <LFormItemInput
        name="idCard"
        type="idCard"
        label="身份证"
        required
        messageVariables={{ label: '请输入正确的身份证格式!' }}
      />
      <LFormItemInput
        name="bankCard"
        label="银行卡"
        required
        type="bankCard"
        messageVariables={{ label: '请输入正确的银行卡格式!' }}
      />
      <LFormItemInput
        name="url"
        label="URL网址"
        required
        type="url"
        messageVariables={{ label: '请输入正确的网址格式!' }}
      />
      <LFormItemInput
        label="图片验证码"
        name="code"
        required
        contentAfter={<IdentifyCode />}
      />
      <LFormItemInput
        required
        validateTrigger={['onChange', 'onBlur']}
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({
          content: '该方案可用于所有表单项',
        })}
      />
    </LForm>
  );
};
export default Demo;
