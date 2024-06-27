import { LForm, LFormItemInput } from 'lighting-design';

const Demo = () => {
  const [form] = LForm.useForm();
  return (
    <LForm
      form={form}
      isEnterSubmit={false}
      submitter={{
        buttonAlign: 'center',
      }}
      onFinish={async (values) => {
        console.log('values', values);
      }}
      initialValues={{
        name: 'llq',
      }}
      isAntdReset={false}
    >
      <LFormItemInput className="myLFormItemInput-4" label="名字" name="name" required />

      <LFormItemInput label="名字2" name="name1" required initialValue="吴彦祖" />
      <LFormItemInput name="name2" label="禁用空格" disabledWhiteSpace required tooltip="禁用空格" />
      {/* <LFormItemInput
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
      <LFormItemInput label="图片验证码" name="code" required contentAfter={<IdentifyCode />} />
      <LFormItemInput
        required
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({
          content: '该方案可用于所有表单项',
        })}
      /> */}
    </LForm>
  );
};
export default Demo;
