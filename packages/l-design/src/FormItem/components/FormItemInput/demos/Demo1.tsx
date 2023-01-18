import { LForm, LFormItemInput } from 'lighting-design';
import IdentifyCode from './IdentifyCode';
import renderFieldWithPopover from './renderFieldWithPopover';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemInput" form={form} submitter={{ buttonAlign: 'center' }}>
      <LFormItemInput className="myLFormItemInput" name="name" label="名字" required />
      <LFormItemInput
        name="name1"
        label="启用空格"
        disabledWhiteSpace={false}
        required
        tooltip="启用空格"
      />
      <LFormItemInput
        name="phone"
        label="手机号"
        required
        tooltip="只能输入11位数字"
        type="phone"
      />
      <LFormItemInput name="idCard" type="idCard" label="身份证" required />
      <LFormItemInput name="bankCard" label="银行卡" required type="bankCard" />
      <LFormItemInput label="图片验证码" name="code" required contentAfter={<IdentifyCode />} />
      <LFormItemInput
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({ content: '该方案可用于所有表单项' })}
      />
    </LForm>
  );
};
export default Demo;
