import { LForm, LFormItemInput } from 'lighting-design';
import IdentifyCode from './IdentifyCode';
import renderFieldWithPopover from './renderFieldWithPopover';

const Demo = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemInput" form={form}>
      <LFormItemInput
        name="name"
        label="名字"
        required
        tooltip="禁止空格"
        disabledWhiteSpace
        alignItems="end"
        contentAfter={<div>后面</div>}
      />
      <LFormItemInput
        dependencies={['name']}
        name="phone"
        label="手机号"
        required
        tooltip="禁止空格 只能输入数字"
        type="phone"
        disabledWhiteSpace
        contentAfter={<div>后面</div>}
      />
      <LFormItemInput
        name="idCard"
        label="身份证"
        required
        type="idCard"
        disabledWhiteSpace
        contentAfter={<div>后面</div>}
      />

      <LFormItemInput
        label="图片验证码"
        name="code"
        required
        placeholder="请输入验证码"
        contentAfter={<IdentifyCode />}
      />

      <LFormItemInput
        label="结合popover"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({ content: '测试内容测试内容' })}
      />
    </LForm>
  );
};
export default Demo;
